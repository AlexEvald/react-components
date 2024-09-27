import './directory-item.styles.scss';
import {useNavigate} from "react-router-dom";
import menImage from '../../assets/images/test.png';
import reviewImage  from '../../assets/images/reviews.png';
import toursImage  from '../../assets/images/Tours.png';

const DirectoryItem = ({...props}) => {

    const {id, imageUrl, title, route} = props.category;
    const navigate = useNavigate();


    const onNavigateHandler = () => navigate(route);

    const imageFacoty = (title) =>{
        switch(title){
            case 'component #1':
                return menImage;
                break;
            case 'Reviews':
                return reviewImage;
                break;
            case 'Tours':
                return toursImage;
                break;
            default:
                return imageUrl;
                break;
        }

    }

    const image = imageFacoty(title);


    return (

        <div className={'directory-item-container'} key={id} onClick={onNavigateHandler}>
            <div className={'background-image'} style={{
                backgroundImage: `url(${image})`
            }}/>
            <div className={'body'}>
                <h2>{title}</h2>
                <p>Jump in</p>
            </div>
        </div>
    )

}

export default DirectoryItem