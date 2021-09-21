package com.savov.beer_io.model;

import lombok.Getter;
import lombok.Setter;
import net.bytebuddy.dynamic.loading.InjectionClassLoader;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

public class Beer implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    @Getter private long id;
    @Getter @Setter private String brand;
    @Getter @Setter private String type;
    @Getter @Setter private String country;

    @Autowired
    public Beer(long id, String brand, String type, String country) {
        this.id = id;
        this.brand = brand;
        this.type = type;
        this.country = country;
    }

    @Override
    public String toString () {
        return "Beer{" + "id=" + id
                + ", brand='" + brand + "\'"
                + ", type='" + type + "\'"
                + ", country" + country + "\'" + "}";
    }
}


