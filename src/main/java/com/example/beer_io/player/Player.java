package com.example.beer_io.player;


import lombok.Getter;
import lombok.ToString;

public class Player {
    @Getter private long id;
    @Getter private String username;
    @Getter private String email;
    @Getter private String password;
    @Getter private String country;

    public Player(long id, String username, String email, String password, String country)
    {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.country = country;
    }

//    @Override
//    public String ToString()
//    {
//        return "Student"
//    }
}
