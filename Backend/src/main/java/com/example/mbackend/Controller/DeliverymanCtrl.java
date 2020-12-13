package com.example.mbackend.Controller;

import com.example.mbackend.Entity.Deliveryman;
import com.example.mbackend.dao.DeliverymanRepository;
import net.sf.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;


@RestController
public class DeliverymanCtrl {
    @Autowired
    private DeliverymanRepository deliverymanRepository;

    @PostMapping(value = "/deliveryman/Login")
    public int getAll(@RequestBody HashMap<String, String> map) {

        List<Deliveryman> list = deliverymanRepository.findByUsername(map.get("username"));
        if(list ==null || list.isEmpty()) {
            Deliveryman deliveryman = new Deliveryman();
            deliveryman.setUsername(map.get("username"));
            deliveryman.setPassword(map.get("password"));
            deliverymanRepository.save(deliveryman);
            System.out.println("noUsrname");
            return -2;
        }
        else{
            if(!list.get(0).getPassword().equals(map.get("password"))){
                return -1;
            }
        }
        return list.get(0).getId();
    }
}