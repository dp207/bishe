package com.dp.fillter;

import com.dp.fillter.interceptor.LoginInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * @description: 拦截器注册器
 * @author: liu.zhengwei
 * @create: 2018/11/14 21:31
 */
@Configuration
public class LoginInterceptorConfig extends WebMvcConfigurerAdapter {

    //在注册前先实例化，不然redis模板无法使用
    @Bean
    public LoginInterceptor loginInterceptor(){
        return new LoginInterceptor();
    }
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(loginInterceptor())
                .addPathPatterns("/saveMsg","/user/logout","/getMsgInfo");
        super.addInterceptors(registry);
    }
}
