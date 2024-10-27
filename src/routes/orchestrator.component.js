import {useParams} from "react-router-dom";
import {useEffect} from "react";
import ComponentFirst from "./components/component-first";
import ToursApp from "../components/projects-components/tours/component.tours.app";
import Reviews from "../components/projects-components/reviews/component.reviews.app";
import QuestionsApp from "../components/projects-components/questions/component.questions.app";


const OrchestratorComponent = () => {

    const {category} = useParams();

    useEffect(() => {
            console.log(category)
    },[]);



    const renderCategoryContent = () => {
        switch (category) {
            case 'component1':
                return <ComponentFirst/>
            case 'tours':
                return <ToursApp/>;
            case 'reviews':
                return <Reviews/>
            case 'questions':
                return <QuestionsApp/>;
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