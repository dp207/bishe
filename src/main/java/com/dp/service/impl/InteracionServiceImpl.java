package com.dp.service.impl;

import com.dp.common.utils.IMoocJSONResult;
import com.dp.common.utils.PagedResult;
import com.dp.mapper.InteractionMapper;
import com.dp.pojo.InteractionPojo;
import com.dp.pojo.UserPojo;
import com.dp.service.InteractionService;
import com.dp.utils.*;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.entity.Example;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * @auther lan.xin
 * @date
 **/
@Service
public class InteracionServiceImpl implements InteractionService {


    @Autowired
    private InteractionMapper interactionMapper;
    @Autowired
    private RedisOperator redisOperator;

    public IMoocJSONResult saveMsg(HttpServletRequest httpServletRequest, String titleOrStuContentId, String content) {

        InteractionPojo interactionPojo=new InteractionPojo();
        //获取登录用户信息
        UserPojo userPojo = getLoginUser(httpServletRequest);
        try {
            //非空校验
            ValidUtils.ValidateNotNull(titleOrStuContentId, content);
            if (userPojo.getRole().equals("0")) {
                //添加学生上传意见和学生信息
                interactionPojo.setTitle(titleOrStuContentId);
                interactionPojo.setStuContent(content);
                interactionPojo.setStuPhone(userPojo.getPhone());
                interactionPojo.setStuCrtime(DateUtil.nowDateTime());
                int insert = interactionMapper.insert(interactionPojo);
            }
            if (userPojo.getRole().equals("1")){
                //添加老师回复和老师信息
                interactionPojo.setTeacherContent(content);
                interactionPojo.setTeacherPhone(userPojo.getPhone());
                interactionPojo.setTeacherCrtime(DateUtil.nowDateTime());
                interactionPojo.setTeacherName(userPojo.getUsername());
                Example example=new Example(InteractionPojo.class);
                example.createCriteria().andEqualTo("stuContentId",titleOrStuContentId);
                interactionMapper.updateByExampleSelective(interactionPojo,example);
            }
            return  IMoocJSONResult.build(200,"添加成功",null);
        } catch (Exception e){
            return IMoocJSONResult.build(500,e.toString(),null);
        }
    }

    @Override
    public IMoocJSONResult getMsgInfo(HttpServletRequest httpServletRequest,Integer pageSize,Integer pageNum){

        //获取登录用户信息
        UserPojo userPojo=getLoginUser(httpServletRequest);

        try {
            if (userPojo.getRole().equals("0")){
                //构造查询条件
                Example example=new Example(InteractionPojo.class);
                example.createCriteria().andEqualTo("stuPhone",userPojo.getPhone());
                //构造分页条件
                PageHelper.startPage(pageNum,pageSize);
                //获取列表
                List<InteractionPojo> interactionPojos = interactionMapper.selectByExample(example);
                //获取分页结果
                PagedResult pagedResult= PageUtil.getResult(interactionPojos,pageNum);
                return IMoocJSONResult.ok(pagedResult);
            }
            if (userPojo.getRole().equals("1")){
                //构造分页条件
                PageHelper.startPage(pageNum,pageSize);
                //获取列表
                List<InteractionPojo> interactionPojos = interactionMapper.selectAll();
                //获取分页结果
                PagedResult pagedResult= PageUtil.getResult(interactionPojos,pageNum);
                return IMoocJSONResult.ok(pagedResult);
            }
        }catch (Exception e){
            return IMoocJSONResult.build(500,e.toString(),null);
       }
        return null;
    }

    public UserPojo getLoginUser(HttpServletRequest httpServletRequest){
        String token = httpServletRequest.getHeader("token");

        System.out.println(token+"header");
        //获取当前用户信息
        String userInfo = redisOperator.get("user_token:" + token);
        UserPojo userPojo = JsonUtils.jsonToPojo(userInfo, UserPojo.class);
        return userPojo;
    }
}
