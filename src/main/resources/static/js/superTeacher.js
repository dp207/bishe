

$(function(){
    var base_url_getMsgInfo = "http://localhost:8085/getMsgInfo";
    var str = sessionStorage.obj;
    var token;
    var pageNum=1;
    sessionStorage.setItem("pageNum",1);
    // if(sessionStorage.obj==null){
    //     window.location.href="http://localhost:8085/index";
    //     console.log("jinlaile")
    // }else{
    // console.log(str=="null")
    if (str!="null"&&str!=null){
        var obj = $.parseJSON(str);
        token=obj.token;
        $("#username").text(obj.username);
        $("#role").text(obj.role);
    }
    $.ajax({
        url: base_url_getMsgInfo,
        headers:{
            "token":token
        },
        type: "POST",
        async: false,
        // data:{ message:JSON.stringify($("#testForm").serialize())},
        data:{
            pageSize:100,
            pageNum:parseInt(pageNum)
        },
        success:function (res) {
            console.log(res)
            if (res.status == 200){
                //获取当前用户信息
                var obj = $.parseJSON(sessionStorage.obj);
                //取出后端传过来的list值
                var chargeRuleLogs = res.data.rows
                //将结果存入缓存
                sessionStorage.setItem("rowsData",JSON.stringify(chargeRuleLogs));
                //对list值进行便利
                $.each(chargeRuleLogs, function (index) {

                    if (chargeRuleLogs[index].teacherPhone!=null){

                        if(chargeRuleLogs[index].teacherPhone==obj.phone){
                            var rowTr = document.createElement('tr')
                            //找到html的tr节点
                            rowTr.className = "tr_node"
                            var child = "<td>" + chargeRuleLogs[index].title +  "</td>"
                                + "<td>" + chargeRuleLogs[index].teacherName + "</td>"
                                + "<td>" + chargeRuleLogs[index].stuCrtime + "</td>"
                                + "<td>" + chargeRuleLogs[index].teacherCrtime + "</td>"
                                + "<td>" +"<a target='_blank' href="+"replyDetail.html?index="+index+">内容详情</a>"+"</td>"

                            //将要展示的信息写入页面
                            rowTr.innerHTML = child
                            //将信息追加
                            $(".table_node3").append(rowTr)
                        }
                        var rowTr = document.createElement('tr')
                        //找到html的tr节点
                        rowTr.className = "tr_node"
                        var child = "<td>" + chargeRuleLogs[index].title +  "</td>"
                            + "<td>" + chargeRuleLogs[index].teacherName + "</td>"
                            + "<td>" + chargeRuleLogs[index].stuCrtime + "</td>"
                            + "<td>" + chargeRuleLogs[index].teacherCrtime + "</td>"
                            + "<td>" +"<a target='_blank' href="+"replyDetail.html?index="+index+">内容详情</a>"+"</td>"

                        //将要展示的信息写入页面
                        rowTr.innerHTML = child
                        //将信息追加
                        $(".table_node").append(rowTr)
                    }else {
                        var rowTr = document.createElement('tr')
                        //找到html的tr节点
                        rowTr.className = "tr_node"
                        var child = "<td>" + chargeRuleLogs[index].title +  "</td>"
                            + "<td>" + chargeRuleLogs[index].stuCrtime + "</td>"
                            + "<td>"+"<a target='_blank' href="+"teacherReplyDetail.html?index="+index+">内容详情</a>"+"</td>"

                        //将要展示的信息写入页面
                        rowTr.innerHTML = child
                        //将信息追加
                        $(".table_node2").append(rowTr)
                    }
                });
            }else if(res.status == 301) {
                alert(res.msg+res.status)
                self.location="/html/backIndex.html?msg="+res.msg
            }if(res.status==302){
                self.location="/html/backIndex.html?msg="+res.msg
            }
        }
    })
    // }
})

function getIndex() {
    var item = sessionStorage.getItem('index');
    var a = document.createElement('a');
    if (item=="null"||item==null){
        a.setAttribute("href", '../../index');
    }else {
        a.setAttribute("href", '../../html/'+item);}
    document.body.appendChild(a);
    a.click();
}
$(function() {
    $("#reply_btn").click(function() {
        $("#reply").css("display", "block","active");
        $("#noReply").css("display", "none");
        $("#myReply").css("display", "none");
    });
    $("#noReply_btn").click(function() {
        $("#reply").css("display", "none");
        $("#noReply").css("display", "block","active");
        $("#myReply").css("display", "none");
    });
    $("#myReply_btn").click(function() {
        $("#reply").css("display", "none");
        $("#noReply").css("display", "none");
        $("#myReply").css("display", "block","active");
    });
});
function logout() {
    var str = sessionStorage.obj;
    //浏览器缓存被清会出现此情况
    var msg="用户登录超时，请重新登录"
    if(str==null||str=="null"){
        window.location.href="/html/backIndex.html?msg="+msg
    }
    var obj = $.parseJSON(str);
    var base_url_register="http://localhost:8085/user/logout"
    $.ajax({
        url: base_url_register,
        headers:{
            "token":obj.token
        },
        type: "POST",
        async: false,
        // data:{ message:JSON.stringify($("#testForm").serialize())},
        success:function (res) {
            console.log(res.msg)
            if (res.status == 200){
                alert(res.msg)
                //清除浏览器本地缓存
                sessionStorage.clear();
                window.location.replace("http://localhost:8085/index")
            }else if(res.status == 500) {
                alert("注销异常,异常为"+res.msg)
            }else if (res.status==301){
                self.location="/html/backIndex.html?msg="+res.msg
            }if(res.status==302){
                self.location="/html/backIndex.html?msg="+res.msg
            }
        }
    })
}
