package br.com.alura.loja;

import java.math.BigDecimal;

public class Produto {

    private String name;
    private BigDecimal price;

    public Produto(String name, BigDecimal price) {
        this.name = name;
        this.price = price;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getPrice() {
        return this.price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

}
