import {useParams} from "react-router-dom";
import {useEffect} from "react";
import ComponentFirst from "./components/component-first";


const OrchestratorComponent = () => {

    const {category} = useParams();

    useEffect(() => {
            console.log(category)
    },[]);



    const renderCategoryContent = () => {
        switch (category) {
            case 'component1':
                return <ComponentFirst/>
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