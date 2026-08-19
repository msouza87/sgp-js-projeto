import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";
import robo from "../../imagens/robo_404.png";

function Pagina404() {
    return (
        <>
            <Cabecalho />

            <div className="container text-center mt-3">
                <div className="alert alert-warning">
                    Esta página não existe!
                </div>
                <div className="d-flex justify-content-center">
                    <img src={robo} alt="Erro 404 - Not Found" width={"30%"} />
                </div>
            </div>

            <Rodape />
        </>
    );
}

export default Pagina404;