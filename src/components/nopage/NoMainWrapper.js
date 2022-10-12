
import "../../styles/nopage/NoPage.css"
import { Link } from "react-router-dom"

function NoMainWrapper() {
    return (
        <div className="main-wrapper">
            <div className="nopage-flex">
                <span className="err404">404</span>
                <span className="sorry">Oups! La page que vous demandez n'existe pas.</span>
                <Link to="home" className="return-home">Retourner sur la page d'accueil</Link>
            </div>
        </div>
    )
}

export default NoMainWrapper