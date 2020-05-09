package com.dp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import tk.mybatis.spring.annotation.MapperScan;

@SpringBootApplication
@MapperScan("com.dp.mapper")
public class BiSheApplication {
    public static void main(String[] args) {
        SpringApplication.run(BiSheApplication.class,args);
    }

}

