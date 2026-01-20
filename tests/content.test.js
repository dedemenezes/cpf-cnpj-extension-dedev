import { describe, it, expect } from "vitest";

import {
  randomNum,
  generateCNPJ,
  generateCPF,
  formatCPF,
  formatCNPJ,
} from "../src/content.js";

describe("CPF Generator", () => {
  it("generate CPF", () => {
    const cpf = generateCPF();
    expect(cpf).toHaveLength(11);
    expect(/^\d{11}$/.test(cpf)).toBe(true);
  });

  it("2. Deve formatar CPF corretamente", () => {
    const cpf = "12345678901";
    const formatted = formatCPF(cpf);
    expect(formatted).toBe("123.456.789-01");
  });
});

describe("CNPJ Generator", () => {
  it("3. Deve gerar CNPJ com 14 dígitos", () => {
    const cnpj = generateCNPJ();
    expect(cnpj).toHaveLength(14);
    expect(/^\d{14}$/.test(cnpj)).toBe(true);
  });

  it("4. Deve formatar CNPJ corretamente", () => {
    const cnpj = "12345678000190";
    const formatted = formatCNPJ(cnpj);
    expect(formatted).toBe("12.345.678/0001-90");
  });
});

describe("Random Number", () => {
  it("5. Deve gerar número entre 0 e 9", () => {
    for (let i = 0; i < 100; i++) {
      const num = randomNum();
      expect(num).toBeGreaterThanOrEqual(0);
      expect(num).toBeLessThanOrEqual(9);
    }
  });
});
