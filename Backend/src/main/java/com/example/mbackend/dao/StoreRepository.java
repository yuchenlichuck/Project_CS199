package com.example.mbackend.dao;

import com.example.mbackend.Entity.Store;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StoreRepository extends  JpaRepository<Store,Integer>  {

}