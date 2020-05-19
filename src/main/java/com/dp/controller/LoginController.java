package com.dp.controller;

import com.dp.common.utils.IMoocJSONResult;
import com.dp.service.impl.DataServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@RestController
@RequestMapping("user")
public class LoginController extends BasicController{


    @Autowired
    private DataServiceImpl dataService;

    /**
    * @Description:登录
    * @Param: [phone, password]
    * @return: com.dp.common.utils.IMoocJSONResult
    * @Author: lan.xin
    * @Date: 2020/3/2
    */
    @RequestMapping(value = "/login", method={RequestMethod.GET,RequestMethod.POST})
    public IMoocJSONResult login(String phone, String password,HttpServletRequest httpServletRequest){

        return dataService.dealLoginData(phone,password,httpServletRequest);
    }

    /**
    * @Description:
    * @Param: [username, password, phone, role]
    * @return: com.dp.common.utils.IMoocJSONResult
    * @Author: 兰鑫
    * @Date: 2020/3/3
    */
    @RequestMapping(value = "/register", method={RequestMethod.GET,RequestMethod.POST})
    public IMoocJSONResult register(String username,String password,String phone,String role) {

        return dataService.register(username,password,phone,role);
    }


    /**
    * @Description: 注销
    * @Param: [httpServletRequest]
    * @return: com.dp.common.utils.IMoocJSONResult
    * @Author: 兰鑫
    * @Date: 2020/3/16
    */
    @RequestMapping(value = "/logout", method={RequestMethod.GET,RequestMethod.POST})
    public IMoocJSONResult logout(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse){
        return dataService.logout(httpServletRequest,httpServletResponse);
    }

    /**
    * @Description: 更新用户信息
    * @Param:
    * @return:
    * @Author: 兰鑫
    * @Date: 2020/5/15
    */
    @RequestMapping(value = "updataUser",method={RequestMethod.GET,RequestMethod.POST})
    public IMoocJSONResult updataUserInfo(HttpServletRequest httpServletRequest,String username,String passWord){
        return dataService.updataUserInfo(httpServletRequest,username,passWord);
    }
}
