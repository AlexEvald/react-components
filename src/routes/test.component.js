import {useParams} from "react-router-dom";
import {useEffect} from "react";


const TestComponent = () => {

    const {category} = useParams();

    useEffect(() => {
            console.log(category)
    },[])


    return(
            <div>Test   : {category} </div>
    )
}

export default TestComponent;