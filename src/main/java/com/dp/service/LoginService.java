package com.dp.service;

import com.dp.common.utils.IMoocJSONResult;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Service
public interface LoginService {

    IMoocJSONResult dealLoginData(String phone, String password,HttpServletRequest httpServletRequest);
    IMoocJSONResult register(String username, String password, String phone,String role);
    public IMoocJSONResult logout(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse);

    IMoocJSONResult updataUserInfo(HttpServletRequest httpServletRequest, String username, String passWord);
}
