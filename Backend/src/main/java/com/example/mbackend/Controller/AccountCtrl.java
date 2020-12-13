package com.example.mbackend.Controller;

import com.example.mbackend.dao.AccountRepository;
import com.example.mbackend.dao.OrderRepository;
import net.sf.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class AccountCtrl {
    @Autowired
    private AccountRepository accountResitory;

    @GetMapping(value = "/account/getAccount")
    public String getAll() {

        JSONArray array = JSONArray.fromObject(accountResitory.findAll());
        String strArray = array.get(0).toString();
        return strArray;
    }
}