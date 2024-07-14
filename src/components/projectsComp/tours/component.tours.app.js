import {useEffect, useState} from "react";
import Loading from "./component.tours.loading";
import Tours from "./component.tours";


const ToursApp = () => {
    const url = 'https://www.course-api.com/react-tours-project'
    const [isLoading,setIsLoading] = useState(true);
    const [tours,setTours] = useState([]);

    useEffect(() =>{
        fetchTours();
    }, []);


    const fetchTours = async () => {
        setIsLoading(true);

        try{
            const response = await fetch(url);
            const data = await response.json();
            setTours(data);

        }catch (error){
            console.log(error);
        }

        setIsLoading(false);

    }

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => (tour.id !== id));
        setTours(newTours);
    }

    const render= () => {
        return isLoading ? <Loading/> : <Tours tours={tours} removeTour={removeTour}/>
    }


    return render();


}

export default ToursApp;