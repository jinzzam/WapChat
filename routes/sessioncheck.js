router.get('/', function(request,response) {
    if (request.session.key) {
        console.log('세션이 존재합니다.(' + request.session.key + ')');
        response.send('현재 로그인 상태입니다.');
    }
    else {
        console.log('세션이 존재하지 않습니다.(' + request.session.key + ')');
        response.send('다시 로그인 해주세요.');
    }
});

router.get('/',function(request,response){
    request.session.destroy(function(err)
    {
        if (err) {
            console.log(err);
            response.send('세션 만료 불가');
        }
        else {
            console.log('세션 만료');
            response.send('세션이 만료되었습니다.');
        }
    });
});