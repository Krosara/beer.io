package com.savov.beer_io.dto;

import com.savov.beer_io.enums.PlayerRole;
import lombok.Data;

@Data
public class PlayerDTO {
    private Long id;
    private String username;
    private String email;
    private String password;
    private PlayerRole role = PlayerRole.USER;
    private String country;
}
