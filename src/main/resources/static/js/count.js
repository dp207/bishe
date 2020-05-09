var statIdName = "TrsAccessMonitor";
var xmlHttp;
var serverUrl="http://localhost:8080/ubas/add";
var params = {
    cookieId: '',
    userAgent: '',
    referrer: '',//来源
    URL: '',
    platform: '',
    screenX: '',
    screenY: '',
    pageSite: '',
    pageUrl: '',
    browserName: '',
    browserVersion: '',
    browserLanguage: '',
    siteId: '15',
    channelId: '了',
    docId: '6',
    doctitle: 'title',
    OS: '',
    BaseCount:'',//默认点击量
    IP: '',
};
/**
  * 设置cookieId
  */
function setCookie(c_name, value, expiredays) {
    var now = new Date();
    now.setDate(now.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value)+";expires=" + now.toGMTString() + ";path=/"; ;
}
/**
  * 获取cookieId
  */
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}
/**
  * 获取当前时间戳
  */
function getTimestamp() {
    var timestamp = Date.parse(new Date());
    return timestamp;
}

/**
  * 生成statId
  */
function genStatId() {
    var cookieId = getTimestamp();
    cookieId = statIdName + "-" + cookieId + "-" + Math.round(Math.random() * 3000000000);
    return cookieId;
}
/**
  * 设置StatId
  */
function setStatId() {
    var cookieId = genStatId();
    setCookie(statIdName, cookieId, 365);
}

/**
  * 获取StatId
  */
function getStatId() {
    var statId = getCookie(statIdName);
    if (statId != null && statId.length > 0) {
        return statId;
    } else {
        setStatId();
        return getStatId();
    }
}
/**
  * 获取UA
  */
function getUA() {
    var ua = navigator.userAgent;
    if (ua.length > 250) {
        ua = ua.substring(0, 250);
    }
    return ua;
}
/**
  * 获取浏览器类型
  */
function getBrowser() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
    var isIE = (!!window.ActiveXObject || "ActiveXObject" in window) && !isOpera; //判断是否IE浏览器
    var isEdge = userAgent.indexOf("Edge") > -1; //判断是否IE的Edge浏览器
    var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
    var isQQ = userAgent.indexOf("QQBrowser") > -1; //判断是否QQ浏览器
    var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
    var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion == 7) {
            return "IE7";
        }
        else if (fIEVersion == 8) {
            return "IE8";
        }
        else if (fIEVersion == 9) {
            return "IE9";
        }
        else if (fIEVersion == 10) {
            return "IE10";
        }
        else {
            return "IE11"
        }//IE版本过低
    }//isIE end

    if (isFF) {
        return "Firefox";
    }
    if (isOpera) {
        return "Opera";
    }
    if (isSafari) {
        return "Safari";
    }
    if (isChrome) {
        return "Chrome";
    }
    if (isEdge) {
        return "Edge";
    }
    if (isQQ) {
            return "QQBrowser";
    }
}//

/**
  * 获取浏览器语言
  */
function getBrowerLanguage() {
    var lang = navigator.browserLanguage;
    return lang != null && lang.length > 0 ? lang : "";
}

/**
  * 获取操作系统
  */
function getPlatform() {
    return navigator.platform;
}
/**
  * 获取页面title
  */
function getPageTitle() {
    return document.title;
}

function createParams() {
    params.cookieId = getStatId();
    params.userAgent = getUA();
    params.IP = document.localName;
    params.referrer = document.referrer;
    params.URL = document.URL;
    params.screenX = screen.width ;
    params.screenY = screen.height;
    params.OS = getPlatform();
    params.browserName = getBrowser();
    params.browserLanguage = getBrowerLanguage();
    params.browserVersion = navigator.appVersion;
}
