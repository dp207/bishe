package com.dp.utils;

import org.apache.commons.lang3.StringUtils;

public class ValidUtils {

    public static void ValidateNotNull(String...fieldNames){


        for (String fieldName : fieldNames) {
            if (fieldName==null|| StringUtils.isEmpty(fieldName)){
                throw new NullPointerException(fieldName + "输入内容不能为空");
            }
        }


    }
}
