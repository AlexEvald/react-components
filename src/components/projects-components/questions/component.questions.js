import SingleQuestion from "./component.singleQuestion";
import "./questions.styles.scss";


const Questions = (props) => {
   const {questions} = props;

   return <div className='container'>
      <h3>Questions</h3>

      <section className='info'>
         {questions.map((question) => {
            return (
                <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
         })}
      </section>
   </div>
}

export default Questions;