import { apiMoedas } from "./api";
// alter o get() create() delete() e o updade() para o que vc deseja pro exemplo getUsuarios()
// altere o '/' para sua rota de deseja acessar por exemplo '/usuarios'
export async function getMoedaReal() {
  const result = await apiMoedas.get("/USD-BRL");
  return result;
}
export async function getMoedaDolar() {
  const result = await apiMoedas.get("/EUR-BRL");
  return result;
}


export async function getCripMoeda() {
  const result = await apiMoedas.get("/BTC-BRL");
  return result;
}

