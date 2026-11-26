import { test } from "node:test";
import assert from "node:assert/strict";

function par(n) {
  return n % 2 === 0;
}

function media(notas) {
  if (notas.length === 0) throw new Error("media: array vazio não tem média");
  return notas.reduce((soma, n) => soma + n, 0) / notas.length;
}

function filtrarMaiores18(usuarios) {
  return usuarios.filter((u) => u.age >= 18);
}

export { par, media, filtrarMaiores18 };

test("par", () => {
  assert.equal(par(2), true);
  assert.equal(par(3), false);
  assert.equal(par(0), true);
});

test("media", () => {
  assert.equal(media([7, 8, 9]), 8);
  assert.throws(() => media([]), /vazio/);
});

test("filtrarMaiores18", () => {
  const usuarios = [
    { name: "Ana", age: 22 },
    { name: "Carla", age: 30 },
    { name: "Beto", age: 17 },
    { name: "Dani", age: 18 },
  ];
  const nomes = filtrarMaiores18(usuarios).map((u) => u.name);
  assert.deepEqual(nomes, ["Ana", "Carla", "Dani"]);
});
