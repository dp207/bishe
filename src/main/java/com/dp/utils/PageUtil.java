package com.dp.utils;

import com.dp.common.utils.PagedResult;
import com.dp.pojo.InteractionPojo;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

import java.util.List;

/**
 * @version 1.0
 * @auther lan.xin
 * @date 2020/3/815:03
 **/
public class PageUtil {


    public static PagedResult getResult(List<?> list,Integer pageNum){



        PageInfo<?> pageList = new PageInfo<>(list);
        //分页返回结果
        PagedResult pagedResult=new PagedResult();
        pagedResult.setTotal(pageList.getPages());
        pagedResult.setRows(list);
        pagedResult.setPage(pageNum);
        pagedResult.setRecords(pageList.getTotal());
        return pagedResult;
    }
}
