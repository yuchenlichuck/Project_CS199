package com.example.mbackend.Controller.OrderCtrl;

import com.example.mbackend.Entity.MyOrder;
import com.example.mbackend.Utils.Constant_Util;
import com.example.mbackend.dao.OrderRepository;
import net.sf.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
public class OrderCtrl {
    @Autowired
    private OrderRepository orderResitory;
    @GetMapping(value = "/order/getAll")
    public String getAll(){

        JSONArray array=JSONArray.fromObject(orderResitory.findAll());
        String strArray=array.toString();
        return strArray;
    }

    @GetMapping(value = "/order/getUnreceived")
    public String getUnreceived(){
        JSONArray array=JSONArray.fromObject(orderResitory.findByState("0"));
        String strArray=array.toString();
        return strArray;
    }

    @PostMapping(value = "/order/getbyEmail")
    public String getbyEmail(@RequestBody HashMap<String, String> map){
        JSONArray array=JSONArray.fromObject(orderResitory.findByStateAndMail("2",map.get("email")));
        String strArray=array.toString();
        return strArray;
    }

    @PostMapping(value = "/order/getUnFinished")
    public String getUnFinished(@RequestBody HashMap<String, String> map){
        JSONArray array=JSONArray.fromObject(orderResitory.findByStateAndDmanId("1",Integer.parseInt(map.get("Did"))));
        String strArray=array.toString();
        return strArray;
    }

    @PostMapping(value = "/order/getBalance")
    public String getBalance(@RequestBody HashMap<String, String> map){
        List<MyOrder> list_order = orderResitory.findByStateAndDmanId("3",Integer.parseInt(map.get("Did")));
        double balance=0;
        for(MyOrder mo :list_order){
            balance+=mo.getPrice();
        }


        return ""+balance;
    }

    @PostMapping(value = "/order/receiveUnreceived")
    public MyOrder receiveUnreceived(@RequestBody HashMap<String, String> map){
        MyOrder myOrder= orderResitory.findById(Integer.parseInt(map.get("Id"))).get(0);
        myOrder.setState("1");
        myOrder.setDmanId(Integer.parseInt(map.get("Did")));
        System.out.println("post");
        return orderResitory.save(myOrder);
    }

    @PostMapping(value = "/order/OrderFinish")
    public MyOrder OrderFinish(@RequestBody HashMap<String, String> map){
        MyOrder myOrder= orderResitory.findById(Integer.parseInt(map.get("OrderId"))).get(0);
        myOrder.setState("2");
        System.out.println("post");
        return orderResitory.save(myOrder);
    }

    @GetMapping(value = "/order/getByDmanId")
    public String getBy(@RequestBody HashMap<String, String> map){
        /*for (Store store:  studentResitory.findAll()){
        JSONObject json = JSONObject.fromObject(store);
        //2、使用JSONArray*/
        JSONArray array=JSONArray.fromObject(orderResitory.findByDmanId(Integer.parseInt(map.get("storeId"))));
        //  String strJson=json.toString();
        String strArray=array.toString();
        return strArray;
    }

    @PostMapping(value = "/order/getByMail")
    public String say(@RequestBody HashMap<String, String> map){
        /*for (Store store:  studentResitory.findAll()){
        JSONObject json = JSONObject.fromObject(store);
        //2、使用JSONArray*/
        List<MyOrder> list = orderResitory.findByStateAndMail("2",map.get("email"));
        if(list==null || list.isEmpty()) return "-1";
        else{
            for (MyOrder o :list){
                o.setState("3");
                orderResitory.save(o);
            }
        }
        return "1";

    }



    @PostMapping(value = "/order/post")
    public MyOrder addOrder(@RequestBody HashMap<String, String> map){

        MyOrder order=new MyOrder();
        order.setState(Constant_Util.ORDER_POST);
        order.setAddress(map.get("address"));
        order.setInstruction(map.get("instructions"));
        order.setMail(map.get("email"));
        order.setPrice(Double.parseDouble(map.get("price")));

        return  orderResitory.save(order);
    }

}
