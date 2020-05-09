package com.dp.pojo;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import tk.mybatis.mapper.annotation.KeySql;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Table(name = "tb_user")
public class UserPojo {

    @Id
    @JsonIgnore
    @KeySql(useGeneratedKeys = true)
    private Integer id;

    private String username;

    private String password;

    private String phone;

    private String crtime;

    private String role;
}
