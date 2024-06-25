

const Tours = (props) => {
    const { tours } = props;
   return (

       <div>
           {tours.map(tour => {
               return <div>{tour.name}</div>
           })}
       </div>
   );



}




export default Tours;