package com.savov.beer_io.dto;

import com.savov.beer_io.enums.PlayerRole;
import lombok.Data;

@Data
public class PlayerDTO {
    private int id;
    private String username;
    private String email;
    private String country;
    private PlayerRole role = PlayerRole.USER;
    private Long score = 0L;
}
