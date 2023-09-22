const calculadora = require("../../models/calculadora.js");

test("Somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("Somar 5 + 100 deveria retornar 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("somar 'banana' + 100 deveria retornar 'Erro'", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Erro");
});

test("somar 100 + 'banana' deveria retornar 'Erro'", () => {
  const resultado = calculadora.somar(100, "banana");
  expect(resultado).toBe("Erro");
});

test("somar nada + nada deveria retornar 'Erro'", () => {
  const resultado = calculadora.somar();
  expect(resultado).toBe("Erro");
});

test("somar 5 + nada deveria retornar 'Erro'", () => {
  const resultado = calculadora.somar(5);
  expect(resultado).toBe("Erro");
});

test("dividir 10 / 2 deveria retornar 4", () => {
  const resultado = calculadora.dividir(10, 2);
  expect(resultado).toBe(5);
});

test("dividir 10 / 0 deveria retornar Infinity", () => {
  const resultado = calculadora.dividir(10, 0);
  expect(resultado).toBe(Infinity);
});

test("dividir nada / nada deveria retornar 'Erro'", () => {
  const resultado = calculadora.dividir();
  expect(resultado).toBe("Erro");
});
