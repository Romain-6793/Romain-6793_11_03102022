import '../../styles/locationpage/Dropdown.css'
import { useState } from 'react'
import arrowUp from '../../assets/arrow-up.svg'
import arrowDown from '../../assets/arrow-down.svg'


function DescDropdown(props) {

    const equipments = props.equipments

    //J'utilise useState pour déclarer mon état de base qui est true. J'ai en premier élément de ma const
    //isOpen qui est le booléen, et et 2ème élément, setIsOpen, qui est la fonction de mise à jour
    // de ce booléen

    const [isOpen, setIsOpen] = useState(true)


    //La valeur de render est fonction du state. Ici dans mon retour, j'ai fait une ternaire.
    //Le dropdown est ouvert ? Alors j'ai droit au détail du menu et lorsque je cliquerai sur le bouton,
    //Le state isOpen sera false. Le dropdown n'est pas ouvert ? Alors le détail du menu ne sera pas
    //rendu et lorsque je cliquerai sur ce même bouton, le state isOpen passera à true.

    return isOpen ? (
        <div className="dropdown-box">
            <button className="dropdown-button"
                onClick={() => setIsOpen(false)}>
                <span className="dropdown-title">Équipements</span>
                <img src={arrowUp} alt="flèche haut" className="arrow-up"></img>
            </button>
            <div className="data-div">
                <ul className="equipments-text">{equipments.map((equipment, index) => (
                    <li className="equipment" key={index}>{equipment}</li>
                ))}</ul>
            </div>
        </div>
    ) : (
        <div className="dropdown-box">
            <button className="dropdown-button"
                onClick={() => setIsOpen(true)}>
                <span className="dropdown-title">Équipements</span>
                <img src={arrowDown} alt="flèche bas" className="arrow-down"></img>
            </button>
        </div>
    )
}

export default DescDropdown