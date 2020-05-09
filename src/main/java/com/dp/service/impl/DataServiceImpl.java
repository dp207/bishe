package com.dp.service.impl;

import com.dp.base.UserInfoResult;
import com.dp.common.utils.IMoocJSONResult;
import com.dp.mapper.UserMapper;
import com.dp.pojo.UserPojo;
import com.dp.service.LoginService;
import com.dp.utils.DateUtil;
import com.dp.utils.JsonUtils;
import com.dp.utils.RedisOperator;
import com.dp.utils.ValidUtils;
import jdk.nashorn.internal.ir.CallNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;
import tk.mybatis.mapper.entity.Example;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.List;

@Service
public class DataServiceImpl implements LoginService {

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private RedisOperator redisOperator;

    public IMoocJSONResult dealLoginData(String phone, String password,HttpServletRequest httpServletRequest) {

               HttpSession session = httpServletRequest.getSession();
               //判断用户是否登录
               String token= DigestUtils.md5DigestAsHex((password+phone).getBytes());
                   if (session.getAttribute("token")!=null){
                       if (redisOperator.get("user_token:" + token) != null) {
                           return IMoocJSONResult.build(208, "用户已登录", null);
                       }
                   }

        try {
                //校验参数
                ValidUtils.ValidateNotNull(phone,password);
                //查询用户
                Example example=new Example(UserPojo.class);
                example.createCriteria().andEqualTo("phone",phone);
                List<UserPojo> userPojos = userMapper.selectByExample(example);
            if (userPojos.size()<1) {
                    return IMoocJSONResult.build(201, "用户不存在", null);
                }
               //获取用户信息
                UserInfoResult userInfoResult=new UserInfoResult();
                String passwordData = userPojos.get(0).getPassword();
                String role = userPojos.get(0).getRole();
                String username = userPojos.get(0).getUsername();
                //校验
                if (passwordData.equals(password)) {

                    //String token= DigestUtils.md5DigestAsHex((password+phone).getBytes());
                    //存入redis
                    redisOperator.set("user_token:"+token, JsonUtils.objectToJson(userPojos.get(0)));
                    redisOperator.expire("user_token:"+token,60);
                    session.setAttribute("token",token);
                    //添加结果返回信息
                    userInfoResult.setRole(role);
                    userInfoResult.setUsername(username);
                    userInfoResult.setToken(token);
                    userInfoResult.setPhone(phone);
                    return IMoocJSONResult.build(200, "登陆成功", userInfoResult);
                }else {
                    return IMoocJSONResult.build(205,"密码错误",null);
                }
            }
        catch (Exception e){
            return IMoocJSONResult.build(500,e.toString(),null);
        }
    }

    public IMoocJSONResult register(String username, String password, String phone,String role) {

        try {

            //校验参数
            ValidUtils.ValidateNotNull(username,password,phone,role);

             //添加查询条件
            Example example=new Example(UserPojo.class);
            example.createCriteria().andEqualTo("phone",phone);

            //调用业务查询
            List<UserPojo> userPojos = userMapper.selectByExample(example);

            //判断用户是否存在
            if (userPojos.size()>0){
                System.out.println(userPojos.size());
                return IMoocJSONResult.build(201,"用户已存在",null);
            }
            //添加用户
            UserPojo userPojo=new UserPojo();
            userPojo.setUsername(username);
            userPojo.setPassword(password);
            userPojo.setPhone(phone);
            userPojo.setCrtime(DateUtil.nowDateTime());
            userPojo.setRole(role);
            userMapper.insert(userPojo);
        }catch (Exception e){
            return IMoocJSONResult.build(500,e.toString(),null);
        }
        return IMoocJSONResult.build(200,"注册成功",null);
    }

    public IMoocJSONResult logout(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) {

        String token = httpServletRequest.getHeader("token");

        HttpSession session = httpServletRequest.getSession();
        try {
            redisOperator.del("user_token:"+token);
            session.invalidate();
            return IMoocJSONResult.build(200,"注销成功",null);
        }catch (Exception e){
            return IMoocJSONResult.build(500,e.toString(),null);
        }

    }
}
