package com.savov.beer_io.beer;

import lombok.Getter;

public class Beer {
    @Getter private long id;
    @Getter private String brand;
    @Getter private String type;
    @Getter private String country;

    public Beer(long id, String brand, String type, String country) {
        this.id = id;
        this.brand = brand;
        this.type = type;
        this.country = country;
    }
}


