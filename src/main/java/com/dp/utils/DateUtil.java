package com.dp.utils;

import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtil {

    public static final String FORMAT_YYYY_MM_DD_HH_MM_SS = "yyyy-MM-dd HH:mm:ss";

    public static String nowDateTime(){

        SimpleDateFormat simpleDateFormat=new SimpleDateFormat(FORMAT_YYYY_MM_DD_HH_MM_SS);
        String formatDate = simpleDateFormat.format(new Date());

        return formatDate;

    }
}
