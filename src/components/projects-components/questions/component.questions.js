import SingleQuestion from "./component.singleQuestion";
import "./questions.styles.scss";
import {useState} from "react";


const Questions = (props) => {
   const {questions} = props;
   const [openedId, setOpenedId] = useState(null);

   return <div className='container'>
      <h3>Questions</h3>

      <section className='info'>
         {questions.map((question) => {
            return (
                <SingleQuestion key={question.id} openedId={openedId} setOpenedId={setOpenedId} {...question}></SingleQuestion>
            );
         })}
      </section>
   </div>
}

export default Questions;