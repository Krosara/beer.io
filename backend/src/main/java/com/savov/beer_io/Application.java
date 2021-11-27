package com.savov.beer_io;

import com.savov.beer_io.enums.PlayerRole;
import com.savov.beer_io.model.Player;
import com.savov.beer_io.service.PlayerService;
import org.modelmapper.ModelMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class Application {

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
//    @Bean
//    CommandLineRunner run(PlayerService playerService) {
//        return args -> {
//            playerService.addPlayer(new Player(null, "kristian", "kristian@gmail.com", "kristian", PlayerRole.ADMIN, "BG"));
//        };
//    }

}
