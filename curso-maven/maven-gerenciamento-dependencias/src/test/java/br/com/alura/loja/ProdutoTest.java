package br.com.alura.loja;

import java.math.BigDecimal;

//import org.junit.Assert;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

//import static org.junit.Assert.*;

//import org.junit.Test;

public class ProdutoTest {

	@Test
	public void test() {
		Produto p = new Produto("teste", BigDecimal.TEN);
		assertEquals("teste", p.getName());
		assertEquals(BigDecimal.TEN, p.getPrice());
	}

}