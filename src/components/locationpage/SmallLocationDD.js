
import '../../styles/locationpage/LocationDropdowns.css'
import DescDropdown from './DescDropdown'
import EqDropdown from './EqDropdown'
import { useState } from 'react'


function SmallLocationDD(props) {



    const [isDesOpen, setIsDesOpen] = useState(false)
    const [isEqOpen, setIsEqOpen] = useState(false)

    const data = props.data
    const description = props.description
    const equipments = props.equipments

    return isDesOpen ? (
        <>
            <div className="dropdowns-wrapper-extended">
                <DescDropdown
                    data={data}
                    description={description}
                    isDesOpen={isDesOpen}
                    isEqOpen={isEqOpen}
                    setIsDesOpen={setIsDesOpen} />
            </div>
            <div className="small-dropdowns-wrapper">
                <EqDropdown
                    data={data}
                    equipments={equipments}
                    isDesOpen={isDesOpen}
                    isEqOpen={isEqOpen}
                    setIsEqOpen={setIsEqOpen} />
            </div>
        </>

    ) : isEqOpen ? (
        <>
            <div className="small-dropdowns-wrapper">
                <DescDropdown
                    data={data}
                    description={description}
                    isDesOpen={isDesOpen}
                    isEqOpen={isEqOpen}
                    setIsDesOpen={setIsDesOpen} />
            </div>
            <div className="eqdropdown-wrapper-extended">
                <EqDropdown
                    data={data}
                    equipments={equipments}
                    isDesOpen={isDesOpen}
                    isEqOpen={isEqOpen}
                    setIsEqOpen={setIsEqOpen} />
            </div>
        </>
    ) : (
        <>
            <div className="small-dropdowns-wrapper">
                <DescDropdown
                    data={data}
                    description={description}
                    isDesOpen={isDesOpen}
                    isEqOpen={isEqOpen}
                    setIsDesOpen={setIsDesOpen} />
            </div>
            <div className="small-dropdowns-wrapper">
                <EqDropdown
                    data={data}
                    equipments={equipments}
                    isDesOpen={isDesOpen}
                    isEqOpen={isEqOpen}
                    setIsEqOpen={setIsEqOpen} />
            </div>
        </>)
}

export default SmallLocationDD