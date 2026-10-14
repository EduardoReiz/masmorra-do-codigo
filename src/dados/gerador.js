// Motor de variações. Um exercício "molde" não tem testes fixos: tem uma
// SOLUÇÃO DE REFERÊNCIA e um gerador de entradas. A cada instância, sorteamos
// entradas (incluindo casos-cascudos) e a resposta esperada é CALCULADA pela
// solução de referência — por construção, nunca sai um exercício errado.
// Os Exames (chefes) continuam estáticos e autorais (duros de propósito).

// PRNG determinística (mulberry32): mesma semente => mesma instância.
export function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export const intEntre = (r, min, max) => min + Math.floor(r() * (max - min + 1));
export const listaInts = (r, n, min, max) => Array.from({ length: n }, () => intEntre(r, min, max));

const clonar = (v) => (Array.isArray(v) ? v.map(clonar) : v && typeof v === "object" ? { ...v } : v);

// Transforma um molde numa instância concreta (com testes já calculados).
// Exercício estático (sem .molde) passa direto.
export function instanciar(ex, seed) {
  if (!ex || !ex.molde) return ex;
  const r = rng(seed >>> 0 || 1);
  const g = ex.gerarEntradas(r);
  const build = (inp, publico) => ({ in: inp, out: ex.solucao(...inp.map(clonar)), publico });
  const testes = [
    ...(g.publicas || []).map((i) => build(i, true)),
    ...(g.ocultas || []).map((i) => build(i, false)),
  ];
  const fratura = (g.fratura || []).map((i) => build(i, false));
  return { ...ex, testes, fratura };
}
