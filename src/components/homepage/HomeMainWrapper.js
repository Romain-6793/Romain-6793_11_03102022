
import '../../styles/MainWrapper.css'
import HomeBanner from "./HomeBanner"
import Gallery from "./Gallery"

function HomeMainWrapper(props) {

    const data = props.data

    return (
        <div className="main-wrapper">
            <HomeBanner /><Gallery data={data} />
        </div>
    )

}

export default HomeMainWrapper