
import '../../styles/homepage/Gallery.css'
import Location from './Location'
import { useState, useEffect } from 'react'
import kasa from '../../datas/datas.json'





function Gallery() {
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(kasa)
    }, [])

    console.log(data)

    return (
        <div className="gallery-container">
            {data.map(({ id, title }) =>
                <Location
                    key={id}
                    id={id}
                    title={title}
                />

            )}
        </div>
    )
}

export default Gallery

// Ici je suis allé chercher mes locations dans mon tableau propTest (il y en a 6), dans ce tableau,
// j'ai les propriétés "id" et "cost" que j'ai mis en props/paramètres de mon map qui parcourt tout
// propTest, j'ai nommé mes props, de la même façon que les propriétés existantes.
// Gallery étant l'élément parent de Location, c'est donc ici que je définis mes props.