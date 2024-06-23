import {useParams} from "react-router-dom";
import {useEffect} from "react";


const OrchestratorComponent = () => {

    const {category} = useParams();

    useEffect(() => {
            console.log(category)
    },[]);



    const renderCategoryContent = () => {
        switch (category) {
            case 'component1':
                return <div>Category one</div>;
            case 'component2':
                return <div>Category two</div>;
            default:
                return <div>Category default</div>;
        }
    };


    return(
        <div>
            {renderCategoryContent() }
        </div>
    )
}

export default OrchestratorComponent;