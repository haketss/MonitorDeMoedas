import { apiMoedas } from "./api";
// alter o get() create() delete() e o updade() para o que vc deseja pro exemplo getUsuarios()
// altere o '/' para sua rota de deseja acessar por exemplo '/usuarios'
export async function getMoeda() {

  const accessToken = sessionStorage.getItem("token");
  const result = await apiMoedas.get("/USD-BRL,EUR-BRL", {
    headers: {
      Authorization: `Bearer ${JSON.parse(accessToken)}`,
    },
  });
  return result;
}

export async function getCripMoeda() {

  const accessToken = sessionStorage.getItem("token");
  const result = await apiMoedas.get("/BTC-BRL", {
    
    headers: {
      Authorization: `Bearer ${JSON.parse(accessToken)}`,
    },
  });
  
  return result;
}

