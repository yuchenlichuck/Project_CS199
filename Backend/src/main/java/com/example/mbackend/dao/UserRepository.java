package com.example.mbackend.dao;

import com.example.mbackend.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends  JpaRepository<User,Integer>  {

}