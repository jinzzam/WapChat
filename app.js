var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
var session = require('express-session');


var io = require('socket.io').listen(4000);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var chatRouter = require('./routes/chat');
var conferenceRouter = require('./routes/conference');
var joinRouter = require('./routes/join');
var joinFailRouter = require('./routes/joinFail');
var loginRouter = require('./routes/login');
var noIDRouter = require('./routes/noID');
var unmatchedPwRouter = require('./routes/unmatchedPw');
var modifyInfoRouter = require('./routes/modifyInfo');
var logoutRouter = require('./routes/logout');
var connection = require('./public/javascripts/dbconnection');


var app = express();
var Files = {};

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: {secure: false}
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/chat', chatRouter);
app.use('/conference-chat', conferenceRouter);
app.use('/join', joinRouter);
app.use('/join-fail', joinFailRouter);
app.use('/login', loginRouter);
app.use('/no-id', noIDRouter);
app.use('/unmatched-pw', unmatchedPwRouter);
app.use('/modify-info', modifyInfoRouter);
app.use('/logout', logoutRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

io.sockets.on('connection', function (socket) {
    socket.on('join:room', function (data) {
        console.log('room' + data.roomId);
        socket.join('room' + data.roomId);
    });

    socket.on('chatReqG', function (data) {
        console.log(data);
        var selectnamesql = 'select name from user where id=?';
        connection.query(selectnamesql, data.user_id, function (err, rows, fields) {
            console.log(rows[0].name);
            if (data.checked_id) {
                io.sockets.in('room1').emit('chatRes', data);
            } else {
                data.user_id = undefined;
                data.user_name = rows[0].name;
                io.sockets.in('room1').emit('chatRes', data);
            }
        });
    });
    //받는 애
    socket.on('chatReqC', function (data) {
        console.log(data);
        io.sockets.in('room2').emit('chatRes', data.msg);// 요청
    });

    socket.on('viewImg', function (data) {
        io.sockets.in('room1').emit('imgRes', data.str);
    });

    socket.on('conferenceChat',function(data){
        console.log(data);
        io.sockets.in('room2').emit('conferenceRes',data.cmsg);
    });

    //파일 서버로 받아와서 서버에 저장
    socket.on('Start', function (data) {
        console.log('socket Start!');
        console.log(data);

        var Name = data.Name;
        Files[Name] = {
            FileSize: data.Size,
            Data: "",
            Downloaded: 0
        };

        var place = 0;

        //파일 받은 적이 있다면 연결해서 받으라는 코드인데 파일이 있는지 없는지 우선 검사해야하므로 이건 아직 안됨
        // var Stat = fs.statSync('/Temp' + Name);
        // if (Stat.isFile) {
        //     Files[Name].Downloaded = Stat.size;
        //     place = Stat.size / 524288;
        // }

        fs.open("Temp/" + Name, "a+", function (err, fd) {
            if (err) console.log(err);
            else {
                Files[Name].Handler = fd;
                socket.emit('MoreData', {Place: place, Percent: 0});
            }
        })
    });
    socket.on('Upload', function (data) {
        console.log(data);
        var Name = data.Name;
        Files[Name].Downloaded += data.Data.length;
        Files[Name].Data += data.Data;
        if (Files[Name].Downloaded == Files[Name].FileSize) {
            fs.write(Files[Name].Handler, Files[Name].Data, null, 'Binary', function (err, written) {
                if (err) console.log(err);
                //Generate movie thumnail
                var readable = fs.createReadStream("Temp/" + Name);
                var writable = fs.createWriteStream("Video/" + Name);

                readable.pipe(writable);

                writable.on('finish', function (err) {
                    if (err) console.log(err);

                    console.log(Name + ": writing is completed.");

                    fs.close(Files[Name].Handler, function (err) {
                        //close fs module
                        if (err) console.error(err);

                        //파일 스트림 연결 끊어줌
                        fs.unlink("Temp/" + Name, function (err) {
                            //Moving file is Completed
                            if (err) console.error(err);

                            console.log(Name + "is deleted");
                        });
                    });
                });

            });
        } else if (Files[Name].Data.length > 10485760) {
            fs.write(Files[Name].Handler, Files[Name].Data, null, 'Binary', function (err, writtem) {
                Files[Name].Data = ""; //Reset the Buffer
                var Place = Files[Name].Downloaded / 524288;
                var Percent = (Files[Name].Downloaded / Files[Name].FileSize) * 100;
                socket.emit('MoreData', {Place: Place, Percent: Percent});
            });
        } else {
            var Place = Files[Name].Downloaded / 524288;
            var Percent = (Files[Name].Downloaded / Files[Name].FileSize) * 100;
            socket.emit('MoreData', {Place: Place, Percent: Percent});
        }
    });

});