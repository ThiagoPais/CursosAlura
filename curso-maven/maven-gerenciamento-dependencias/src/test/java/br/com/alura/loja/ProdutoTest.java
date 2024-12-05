package br.com.alura.loja;

import java.math.BigDecimal;

import org.junit.Assert;

//import static org.junit.Assert.*;

import org.junit.Test;

public class ProdutoTest {

	@Test
	public void test() {
		Produto p = new Produto("teste", BigDecimal.TEN);
		Assert.assertEquals("teste", p.getName());
		Assert.assertEquals(BigDecimal.TEN, p.getPrice());
	}

}