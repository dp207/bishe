
$().ready(function() {
    $("#login_form").validate({
        rules: {
            username: "required",
            password: {
                required: true,
                minlength: 5
            },
        },
        messages: {
            username: "请输入姓名",
            password: {
                required: "请输入密码",
                minlength: "密码长度不能小于 5 个字母"
            },
        }
    });
    $("#register_form").validate({
        rules: {
            username: "required",
            password: {
                required: true,
                minlength: 5
            },
            rpassword: {
                equalTo: "#register_password"
            },
            phone: {
                required: true,
            }
        },
        messages: {
            username: "请输入姓名",
            password: {
                required: "请输入密码",
                minlength: "密码长度不能小于 5 个字母"
            },
            rpassword: {
                equalTo: "两次密码不一样"
            },
            phone: {
                required: "请输入手机号",

            }
        }
    });
});
$(function() {
    $("#register_btn").click(function() {
        $("#register_form").css("display", "block");
        $("#login_form").css("display", "none");
    });
    $("#back_btn").click(function() {
        $("#register_form").css("display", "none");
        $("#login_form").css("display", "block");
    });
});
var base_url_login = "http://localhost:8085/user/login";
var base_url_register = "http://localhost:8085/user/register";
var mm=5
$(function(){
    var url=window.location.href;                    //获取当前页面的url
    if(url.indexOf("?")!=-1){                        //判断是否存在参数
        url = url.replace(/(\?|#)[^'"]*/, '');           //去除参数
        window.history.pushState({},0,url);
    }
})

function login() {
    // var str = sessionStorage.obj;
    // var info="用户已登录";
    // if (str!=null){
    //     alert(info)
    //}else {
    if($("input[name='phone']").val()==""||$("input[name='password']")==""){

    }else {
        $.ajax({
            url: base_url_login,
            type: "POST",
            async: false,
            // data:{ message:JSON.stringify($("#testForm").serialize())},
            data:$("#login_form").serialize(),
            success:function (res) {
                if (res.status == 200){
                    sessionStorage.obj = JSON.stringify(res.data);
                    if(res.data.role=="0"){
                        sessionStorage.setItem('index',"stu.html")

                        window.open("html/stu.html");
                        window.close()
                    };
                    if(res.data.role=="1"){
                        sessionStorage.setItem("index","teacher.html")
                        window.open("html/teacher.html");
                        window.close();};
                }else if(res.status == 201) {
                    alert(res.msg)
                }else if(res.status==500){
                    alert(res.msg)
                }else if (res.status==205){
                    alert(res.msg)
                }else if (res.status==208){
                    alert(res.msg)
                }
            }
        })
    }

    //}

}
function register() {
    if($("input[name='username']").val()==""||$("input[name='password']")==""||$("input[name='phone']")==""){

    }else {
        $.ajax({
            url: base_url_register,
            type: "POST",
            async: false,
            // data:{ message:JSON.stringify($("#testForm").serialize())},
            data:$("#register_form").serialize(),
            success:function (res) {
                console.log(res.msg)
                if (res.status == 200){
                    alert("注册成功")
                }else if(res.status == 500) {
                    alert("注册异常,异常为"+res.msg)
                }if(res.status==201){
                    alert(res.msg)
                }
            }
        })
    }

}

