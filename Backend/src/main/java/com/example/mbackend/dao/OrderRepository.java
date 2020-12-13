package com.example.mbackend.dao;

import com.example.mbackend.Entity.MyOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Transactional
public interface OrderRepository extends  JpaRepository<MyOrder,Integer>  {
    //MyOrder findByUserName(String userName);
    List<MyOrder> findByDmanId(int DmanIds);
    List<MyOrder> findByMail(String mail);
    List<MyOrder> findByState(String state);

    List<MyOrder> findByStateAndDmanId(String state, int Did);
    List<MyOrder> findByStateAndMail(String state, String email);
    List<MyOrder> findById(int Id);


/*    @Modifying(clearAutomatically = true)
    @Query(value = "UPDATE MyOrder c SET c.state = :state, c.DmanId = :Dman_Id WHERE c.id = :Id")
    void recive_order(@Param("Id") int Id, @Param("state") String state,
    @Param("Dman_Id") int Dman_Id);*/
}
