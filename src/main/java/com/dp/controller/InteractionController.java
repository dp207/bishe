package com.dp.controller;

import com.dp.common.utils.IMoocJSONResult;
import com.dp.service.impl.InteracionServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpServletRequest;

/**
 * @version 1.0
 * @auther lan.xin
 * @date 2020/3/713:05
 **/
@RestController
public class InteractionController extends BasicController{


    @Autowired
    private InteracionServiceImpl interacionService;

    /**
    * @Description:添加学生意见、老师回复
    * @Param: [httpServletRequest, title, content]
    * @return: com.dp.common.utils.IMoocJSONResult
    * @Author: 兰鑫
    * @Date: 2020/3/7
    */
    @RequestMapping(value = "saveMsg",method={RequestMethod.GET,RequestMethod.POST})
    public IMoocJSONResult saveMsg(HttpServletRequest httpServletRequest,String titleOrStuContentId,String content){
        System.out.println(titleOrStuContentId+"---------"+content);
        return interacionService.saveMsg(httpServletRequest,titleOrStuContentId,content);
    }


   /**
   * @Description: 获取意见列表
   * @Param: [httpServletRequest, pageSize, pageNum]
   * @return: com.dp.common.utils.IMoocJSONResult
   * @Author: 兰鑫
   * @Date: 2020/3/8
   */
   @RequestMapping(value = "getMsgInfo",method={RequestMethod.GET,RequestMethod.POST})
    public IMoocJSONResult getMsgInfo(HttpServletRequest httpServletRequest,Integer pageSize,Integer pageNum){
        return interacionService.getMsgInfo(httpServletRequest,pageSize,pageNum);
    }

}
