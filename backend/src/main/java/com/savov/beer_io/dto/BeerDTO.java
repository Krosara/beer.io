package com.savov.beer_io.dto;

import lombok.Data;

@Data
public class BeerDTO {
    private Long id;
    private String brandName;
    private String type;
    private String country;
}
