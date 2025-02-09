import './directory.styles.scss';
import DirectoryItem from "../directory-item/directory-item-component";

const categories = [
    {
        "id": 1,
        "title": "component #1",
        "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
        "route" : "comp/component1"
    },
    {
        "id": 2,
        "title": "component #2",
        "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
        "route" : "comp/component2"
    },
    {
        "id": 3,
        "title": "component #3",
        "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
        "route" : "comp/component3"
    },
    {
        "id": 4,
        "title": "Questions",
        "imageUrl": "",
        "route" : "comp/questions"
    },
    {
        "id": 5,
        "title": "Reviews",
        "imageUrl": "",
        "route" : "comp/reviews"
    },
    {
        "id": 6,
        "title": "Tours",
        "imageUrl": "",
        "route" : "comp/tours"
    }
]

const Directory = () => {


    return (
        <div className={'categories-container'}>
        {categories.map( (category) =>{
            return <DirectoryItem category = {category} key={category.id}/>
        })}
    </div>
    )
}

export default Directory;