package com.dp.pojo;

import lombok.Data;
import tk.mybatis.mapper.annotation.KeySql;

import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @version 1.0
 * @auther lan.xin
 * @date 2020/3/716:38
 **/
@Data
@Table(name = "tb_interaction")
public class InteractionPojo {

    @Id
    @KeySql(useGeneratedKeys = true)
    private Long stuContentId;

    private String stuPhone;

    private String title;

    private String stuContent;

    private String teacherPhone;

    private String teacherContent;

    private String teacherName;

    private String stuCrtime;

    private String teacherCrtime;


}
