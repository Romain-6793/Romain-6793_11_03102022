import '../../styles/locationpage/Dropdown.css'


function Dropdown() {
    return (
        <div className="dropdown-box">
            <div className="dropdown-button">
                <label for="dropdown-check" className="dropdown-label"></label>
            </div>
            <input type="checkbox" className="dropdown-check"></input>
            <div className="data-div"></div>
        </div>
    )
}

export default Dropdown