
    function saveStuMsg() {
        var str = sessionStorage.obj;
        var obj = $.parseJSON(str);
        var token = obj.token;
        $.ajax({
            url: "http://localhost:8085/saveMsg",
            headers:{"token":token},
            type: "POST",
            async: false,
            // data:{ message:JSON.stringify($("#testForm").serialize())},
            data:$("#megAction").serialize(),
            success:function (res) {
                if (res.status == 200){
                    alert("ok")
                    window.location.replace("stuAction.html")
                }else if(res.status==500){
                    alert(res.msg)
                }
            }
        })

    }
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
                    $('.table_node').empty()
                    //取出后端传过来的list值
                    var chargeRuleLogs = res.data.rows
                    //将结果存入缓存
                    sessionStorage.setItem("rowsData",JSON.stringify(chargeRuleLogs));
                    //对list值进行便利
                    $.each(chargeRuleLogs, function (index) {

                        if (chargeRuleLogs[index].teacherPhone!=null){

                            var rowTr = document.createElement('tr')
                            //找到html的tr节点
                            rowTr.className = "tr_node"
                            var child = "<td>" + chargeRuleLogs[index].title +  "</td>"
                                + "<td>" + chargeRuleLogs[index].teacherName + "</td>"
                                + "<td>" + chargeRuleLogs[index].stuCrtime + "</td>"
                                + "<td>" + chargeRuleLogs[index].teacherCrtime + "</td>"
                                + "</td>"+"<a target='_blank' href="+"replyDetail.html?index="+index+">内容详情</a>"+"</td>"

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
                                +"<td>"+ "<a target='_blank' href="+"noReplyDetail.html?index="+index+">内容详情</a>"+"</td>"

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
            $("#reply").css("display", "block");
            $("#noReply").css("display", "none");
        });
        $("#noReply_btn").click(function() {
            $("#reply").css("display", "none");
            $("#noReply").css("display", "block");

        });
    });

          function getPage() {


                var pageNum =sessionStorage.getItem("pageNum")
                 var i=parseInt("0")
                  //将结果存入缓存
                  var chargeRuleLogs = JSON.parse(sessionStorage.getItem("msg"));
                  $("#tr2").empty();
                  var rowTr = document.createElement('tr')
                  //对list值进行便利
                  for (i;i<2;i++) {
                      var index = 9+i
                      if (chargeRuleLogs[index].teacherPhone!=null){

                          //找到html的tr节点
                          rowTr.className = "tr_node"
                          var child = "<td>" + chargeRuleLogs[index].title +  "</td>"
                              + "<td>" + chargeRuleLogs[index].teacherName + "</td>"
                              + "<td>" + chargeRuleLogs[index].stuCrtime + "</td>"
                              + "<td>" + chargeRuleLogs[index].teacherCrtime + "</td>"
                              + "<td>详情 </td>"

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
                              + "<td>详情 </td>"

                          //将要展示的信息写入页面
                          rowTr.innerHTML = child
                          //将信息追加
                          $(".table_node2").append(rowTr)
                      }

                  }
              }

