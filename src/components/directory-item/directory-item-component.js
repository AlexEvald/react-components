import './directory-item.styles.scss';
import {useNavigate} from "react-router-dom";
import menImage from '../../assets/images/test.png';

const DirectoryItem = ({...props}) => {

    const {id, imageUrl, title, route} = props.category;
    const navigate = useNavigate();


    const onNavigateHandler = () => navigate(route);
    const image = title === 'component #1' ? menImage : imageUrl;

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