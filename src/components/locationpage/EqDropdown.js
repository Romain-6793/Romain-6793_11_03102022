import '../../styles/locationpage/Dropdown.css'
import arrowUp from '../../assets/arrow-up.svg'
import arrowDown from '../../assets/arrow-down.svg'


function EqDropdown(props) {

    function openDropdown() {
        props.setIsEqOpen(true)
    }


    function closeDropdown() {
        props.setIsEqOpen(false)
    }

    const equipments = props.equipments

    //La valeur de render est fonction du state. Ici dans mon retour, j'ai fait une ternaire.
    //Le dropdown est ouvert ? Alors j'ai droit au détail du menu et lorsque je cliquerai sur le bouton,
    //Le state isOpen sera false. Le dropdown n'est pas ouvert ? Alors le détail du menu ne sera pas
    //rendu et lorsque je cliquerai sur ce même bouton, le state isOpen passera à true.

    return props.isEqOpen ? (
        <div className="dropdown-box">
            <button className="dropdown-button"
                onClick={() => closeDropdown()}>
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
                onClick={() => openDropdown()}>
                <span className="dropdown-title">Équipements</span>
                <img src={arrowDown} alt="flèche bas" className="arrow-down"></img>
            </button>
        </div>
    )
}

export default EqDropdown