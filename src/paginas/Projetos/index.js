import { useEffect, useState } from "react";
import { listarProjetos } from "../../servicos/projetos";
import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";

function Projetos() {
    const [projetos, setProjetos] = useState([]);

    useEffect(() => {
        listarProjetos(setProjetos);
    }, []);

    return (
        <>
            <Cabecalho />

            <section id="projetos" className="container mt-3">
                <div className="d-flex justify-content-between">
                    <h1>Projetos Cadastrados</h1>
                    <button className="btn btn-primary">Novo Projeto</button>
                </div>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Descrição</th>
                            <th scope="col">Data de Criação</th>
                            <th scope="col">Data de Conclusão</th>
                            <th scope="col">Status</th>
                            <th scope="col">Responsável</th>
                            <th scope="col">Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            projetos?.map((projeto) => (
                                <tr scope="row" key={projeto.id}>
                                    <td>{projeto.id}</td>
                                    <td>{projeto.nome}</td>
                                    <td>{projeto.descricao}</td>
                                    <td>{projeto.dataCriacao}</td>
                                    <td>{projeto.dataConclusao}</td>
                                    <td>{projeto.status}</td>
                                    <td>{projeto.responsavel.nome}</td>
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

export default Projetos;