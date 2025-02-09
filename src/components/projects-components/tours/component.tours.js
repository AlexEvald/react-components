import Tour from "./component.tour";


const Tours = (props) => {
    const { tours, removeTour } = props;
   return (

       <section>
           <div className={'title'}>
               <h2>Our Tours</h2>
               <div className={'title-underline'}></div>
           </div>

           <div>
               {tours.map(tour => {
                   return <Tour key = {tour.id}  tour={tour} removeTour={removeTour}/>
               })}
           </div>
       </section>

   );


}


export default Tours;