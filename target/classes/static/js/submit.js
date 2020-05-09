window.onload = function () {
    createParams();
    var strParam = "";
    for(var key in params){
        strParam += key+"="+params[key]+"&";
    }
    console.log(strParam);
    var trsImg =  document.createElement("img");
    trsImg.src = encodeURI(encodeURI(serverUrl+"?"+strParam));
    trsImg.style.display = "none";
    document.body.appendChild(trsImg);
}