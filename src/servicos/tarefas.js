import { api } from "./api";

export async function listarTarefas(setTarefas) {
    await api.get("/tarefas").then((resposta) => {
        if (resposta.status === 200) {
            setTarefas(resposta.data);
        }
    }).catch((erro) => {
        alert("Erro ao listar tarefas.");
        console.error("Erro ao listar tarefas: ", erro);
    })
}