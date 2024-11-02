
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {useState} from "react";
import "./questions.styles.scss";

const SingleQuestion = ({id, openedId, setOpenedId,title,info}) => {

    const [showInfo, setShowInfo] = useState(false);
    const isActive = id === openedId;
    const setToggle = () => {
        setShowInfo(!showInfo);
        setOpenedId(id);
    }

    return <article className='question'>
        <header>
            <h4>{title}</h4>
            <button className='btn' onClick={() => setToggle()}>
                {showInfo && isActive ? <AiOutlineMinus/> : <AiOutlinePlus/>}
            </button>
        </header>
        {showInfo && isActive && <p>{info}</p>}
    </article>

}

export default SingleQuestion;