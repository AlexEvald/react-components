import data from "./data"
import {useState} from "react";
import Questions from "./component.questions";
import "./questions.styles.scss";


const QuestionsApp = () => {
    const [questions,setQuestions] = useState(data)

    return <main>

        <Questions questions={questions}/>
    </main>;

}

export default QuestionsApp;