import { useEffect, useState } from "react";
import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";
import { listarTarefas } from "../../servicos/tarefas";

function Tarefas() {
    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        listarTarefas(setTarefas);
    }, []);

    return (
        <>
            <Cabecalho />

            <section id="tarefas" className="container mt-3">
                <div className="d-flex justify-content-between">
                    <h1>Tarefas Cadastradas</h1>
                    <button className="btn btn-primary">Nova Tarefa</button>
                </div>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Título</th>
                            <th scope="col">Descrição</th>
                            <th scope="col">Data de Criação</th>
                            <th scope="col">Prioridade</th>
                            <th scope="col">Status</th>
                            <th scope="col">Projeto</th>
                            <th scope="col">Usuário</th>
                            <th scope="col">Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tarefas?.map((tarefa) => (
                                <tr scope="row" key={tarefa.id}>
                                    <td>{tarefa.id}</td>
                                    <td>{tarefa.titulo}</td>
                                    <td>{tarefa.descricao}</td>
                                    <td>{tarefa.dataCriacao}</td>
                                    <td>{tarefa.prioridade}</td>
                                    <td>{tarefa.status}</td>
                                    <td>{tarefa.projeto.nome}</td>
                                    <td>{tarefa.usuario.nome}</td>
                                    <td>
                                        <div className="btn-group">
                                            <button className="btn btn-outline-primary">Editar</button>
                                            <button className="btn btn-outline-danger">Excluir</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>

            <Rodape />
        </>
    );
}

export default Tarefas;