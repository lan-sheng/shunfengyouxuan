$('.login1').on('click', function() {
    if ($('.username').val() && $('.password').val()) {
        $.ajax({
            type: 'post',
            url: 'http://localhost/shunfengyouxuan/php/login.php',
            data: {
                username: $('.username').val(),
                password: hex_sha1($('.password').val())
            },
            success: function(data) {
                if (!data) {
                    alert('用户名或者密码错误');
                } else {
                    //存取cookie
                    jstool.addcookie('username', $('.username').val());
                    location.href = 'http://localhost/shunfengyouxuan/index1.html';
                }
            }
        })
    } else {
        alert('用户名或者密码不能为空')
    }
});