import { api } from "./api";

export async function listarUsuarios(setUsuarios) {
    await api.get("/usuarios").then((resposta) => {
        if (resposta.status === 200) {
            setUsuarios(resposta.data);
        }
    }).catch((erro) => {
        alert("Erro ao listar usuários.");
        console.error("Erro ao listar usuários: ", erro);
    })
}