
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
var base_url_login2 = "http://120.77.221.159:8085/user/login";
var base_url_register2 = "http://120.77.221.159:8085/user/register";
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
    var aa = $("input[type='checkbox']").is(":checked");//获取选中状态
    if($("input[name='phone']").val()==""||$("input[name='password']").val()==""){
              return false;
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
    // if($("input[name='username']").val()==""||$("input[name='password']").val()==""||$("input[name='phone']").val()==""){
    //
    // }else {
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
                    return false;
                }
            }
        })
    //}

}

//把信息设置进去Cookie里面去
function setCookie(){

    var phone = $("input[name='phone']").val();
    alert(phone)
    var password = $("input[name='password']").val();
    var aa = $("input[type='checkbox']").is(":checked");//获取是否选中
    if(aa==true){//如果选中-->记住密码登录
        alert("opop")
        $.cookie("phone",phone);//有效时间7天，也可以设置为永久，把时间去掉就好
        alert("opop2")
        $.cookie("password",password);
    }else{//如果没选中-->不记住密码登录
        $.cookie("password", "");
        $.cookie("phone", "");
        alert("没有记住密码")
    }
}


function getCookie(){ //获取cookie
    var phone = $.cookie("phone"); //获取cookie中的用户名
    alert(phone)
    var pwd =  $.cookie("password"); //获取cookie中的登陆密码
    if(pwd){//密码存在的话把“记住用户名和密码”复选框勾选住
        $("[name='rememenber']").attr("checked","true");
    }
    if(phone!=""){//用户名存在的话把用户名填充到用户名文本框
        $("input[name='phone']").val(phone);
    }else{
        $("input[name='password']").val(pwd);
    }
    if(pwd!=""){//密码存在的话把密码填充到密码文本框
        $("input[name='password']").val(pwd);
    }else{
        $("#password").val("");
    }
}
