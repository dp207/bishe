package com.dp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class JumpController {

    @RequestMapping("test")
    public String jump(){
        String i="llp";
        String[] m=new String[5];
        return "23";
    }
    @RequestMapping("index")
    public String jump2(){
        return "index";
    }

    @RequestMapping("msginfo")
    public String jump4(){
        return "msginfo";
    }

    @RequestMapping("33")
    public String jump3(HttpServletRequest request){

        return "33";
    }
}
