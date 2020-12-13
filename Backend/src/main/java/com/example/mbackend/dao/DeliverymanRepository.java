package com.example.mbackend.dao;

import com.example.mbackend.Entity.Deliveryman;
import com.example.mbackend.Entity.MyOrder;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DeliverymanRepository extends  JpaRepository<Deliveryman,Integer>  {
    List<Deliveryman> findByUsername(String username);
}