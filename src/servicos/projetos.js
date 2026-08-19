import { api } from "./api";

export async function listarProjetos(setProjetos) {
    await api.get("/projetos").then((resposta) => {
        if (resposta.status === 200) {
            setProjetos(resposta.data);
        }
    }).catch((erro) => {
        alert("Erro ao listar projetos.");
        console.error("Erro ao listar projetos: ", erro);
    })
}