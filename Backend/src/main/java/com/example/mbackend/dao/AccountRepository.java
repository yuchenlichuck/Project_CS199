package com.example.mbackend.dao;
import com.example.mbackend.Entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Transactional
public interface AccountRepository extends  JpaRepository<Account,Integer>  {
    //MyOrder findByUserName(String userName);

}
