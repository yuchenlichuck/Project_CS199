package com.example.mbackend.Controller;

import com.example.mbackend.Entity.Store;
import com.example.mbackend.dao.StoreRepository;
import net.sf.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
public class StoreCtrl {
    @Autowired
    private StoreRepository studentResitory;
    @GetMapping(value = "/store/getAll")
    public String getAll(){

        /*for (Store store:  studentResitory.findAll()){
        JSONObject json = JSONObject.fromObject(store);
        //2、使用JSONArray*/
        JSONArray array=JSONArray.fromObject(studentResitory.findAll());

        //  String strJson=json.toString();
        String strArray=array.toString();
        return strArray;
    }

    @PostMapping(value = "/store/post")
    public Store addStu(@RequestBody HashMap<String, String> map){
        Store stu=new Store();
        stu.setMname(map.get("mname"));
        stu.setSquareimgurl(map.get("squareimgurl"));
        stu.setPrice(Double.parseDouble(map.get("price")));
        stu.setTitle(map.get("title"));
        return studentResitory.save(stu);
    }
}
