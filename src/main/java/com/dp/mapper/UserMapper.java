package com.dp.mapper;

import com.dp.pojo.UserPojo;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import tk.mybatis.mapper.common.Mapper;

public interface UserMapper extends Mapper<UserPojo> {
    @Select("select password from tb_user where username = '${username}'")
    String queryParentByName(@Param("username") String username);
}
