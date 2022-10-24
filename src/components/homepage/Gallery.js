
import '../../styles/homepage/Gallery.css'
import Location from './Location'



function Gallery(props) {

    const data = props.data
    console.log(data)



    return (
        <div className="gallery-container">
            {data.map((index) => (
                <Location data={data} title={index.title} key={index.id} />
            ))}
        </div>
    )
}

export default Gallery

// Ici je suis allé chercher mes locations dans mon tableau propTest (il y en a 6), dans ce tableau,
// j'ai les propriétés "id" et "cost" que j'ai mis en props/paramètres de mon map qui parcourt tout
// propTest, j'ai nommé mes props, de la même façon que les propriétés existantes.
// Gallery étant l'élément parent de Location, c'est donc ici que je définis mes props.