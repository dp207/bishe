package com.dp.fillter.interceptor;

import com.dp.common.utils.IMoocJSONResult;
import com.dp.utils.JsonUtils;
import com.dp.utils.RedisOperator;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;

/**
 * @description:  Token拦截器
 * @auther lan.xin
 * @date 2020/3/520:49
 **/
@Component
public class LoginInterceptor implements HandlerInterceptor {

    @Autowired
    private RedisOperator redisOperator;
    public static final String USER_REDIS_SESSION = "user-redis-session";

    /**
     * 拦截请求，在controller调用之前
     */
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response,
                             Object arg2) throws Exception {

        IMoocJSONResult iMoocJSONResult=new IMoocJSONResult();
        HttpSession session = request.getSession();
        String token=null;
        //首先在session中查找是否存在token
       if (session.getAttribute("token")!=null){
           token = session.getAttribute("token").toString();
           System.out.println(token+"session");
       }
       //再在header中查找受否存在token
       else {
           token = request.getHeader("token");
           System.out.println(token+"header1");
       }
        if (!(token==null||token.length()==0)){
            String userInfo = redisOperator.get("user_token:" + token);

            if (!(userInfo==null||userInfo.length()==0)){
                session.setAttribute("userInfo",userInfo);
                session.setAttribute("token",token);
                return true;
            }else {
                iMoocJSONResult.setMsg("登陆过期,请重新登录");
                iMoocJSONResult.setStatus(301);
            }
        }else {
            iMoocJSONResult.setMsg("未登陆用户,请登录");
            iMoocJSONResult.setStatus(302);
            System.out.println(iMoocJSONResult.getMsg()+"msg欸登录");
        }

        //将 登录失败 信息打包成json格式返回
        response.setContentType("application/json;charset=UTF-8");
        response.setStatus(200);
        System.out.println(iMoocJSONResult.getMsg());
        response.getOutputStream().write((JsonUtils.objectToJson(iMoocJSONResult).getBytes("utf-8")));
        return false;


    }
    public void returnErrorResponse(HttpServletResponse response, IMoocJSONResult result)
            throws IOException, UnsupportedEncodingException {
        OutputStream out=null;
        try{
            response.setCharacterEncoding("utf-8");
            response.setContentType("text/json");
            out = response.getOutputStream();
            out.write(JsonUtils.objectToJson(result).getBytes("utf-8"));
            out.flush();
        } finally{
            if(out!=null){
                out.close();
            }
        }
    }

    /**
     * 请求controller之后，渲染视图之前
     */
    @Override
    public void postHandle(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, ModelAndView arg3)
            throws Exception {
    }

    /**
     * 请求controller之后，视图渲染之后
     */
    @Override
    public void afterCompletion(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, Exception arg3)
            throws Exception {
    }


}
