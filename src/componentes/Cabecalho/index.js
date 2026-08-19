import logo from "../../imagens/sgp_logo_horizontal.png";

function Cabecalho() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#menu-lateral"
                    aria-controls="menu-lateral"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menu-lateral">
                    <a className="navbar-brand" href=".">
                        <img src={logo} alt="Sistema de Gestao de Projetos" width="200px" />
                    </a>

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" href="/dashboard">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/usuarios">Usuarios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/projetos">Projetos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/tarefas">Tarefas</a>
                        </li>
                    </ul>

                    <button className="btn btn-primary">
                        Sair
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Cabecalho;