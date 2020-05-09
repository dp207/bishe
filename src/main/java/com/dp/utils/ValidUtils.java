package com.dp.utils;

public class ValidUtils {

    public static void ValidateNotNull(String...fieldNames){


        for (String fieldName : fieldNames) {
            if (fieldName==null){
                throw new NullPointerException(fieldName + " can't be empty");
            }
        }

    }
}
