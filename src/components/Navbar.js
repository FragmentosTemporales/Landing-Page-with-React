const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary col-12">
            <div className="container-fluid ml-4">
                <a className="navbar-brand " href="#">@FragmentosTemporales</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Collabs
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Google</a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="#">Samsung</a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="#">Tesla</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Contact
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="https://github.com/FragmentosTemporales">Github</a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="https://www.linkedin.com/in/fragmentostemporales/">Linkedin</a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="https://www.instagram.com/_domador_de_ovnis_/">Instagram</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;