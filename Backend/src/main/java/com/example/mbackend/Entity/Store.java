package com.example.mbackend.Entity;

import javax.persistence.*;

@Entity
@Table(name="store")
public class Store {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String squareimgurl;
    @Column(unique = true)
    private String mname;
    @Column
    private String title;
    @Column
    private Double price;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSquareimgurl() {
        return squareimgurl;
    }

    public void setSquareimgurl(String squareimgurl) {
        this.squareimgurl = squareimgurl;
    }

    public String getMname() {
        return mname;
    }

    public void setMname(String mname) {
        this.mname = mname;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}
