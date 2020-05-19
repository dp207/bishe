package com.dp.service;

import com.dp.common.utils.IMoocJSONResult;
import com.dp.pojo.UserPojo;

import javax.servlet.http.HttpServletRequest;

/**
 * @version 1.0
 * @auther lan.xin
 * @date 2020/3/716:36
 **/
public interface InteractionService {

    IMoocJSONResult saveMsg(HttpServletRequest httpServletRequest, String title, String content);

    IMoocJSONResult getMsgInfo(HttpServletRequest httpServletRequest,Integer pageSize,Integer pageNum);

    UserPojo getLoginUser(HttpServletRequest httpServletRequest);

    IMoocJSONResult delMsg(HttpServletRequest httpServletRequest, String id);
}
