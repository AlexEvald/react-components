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
        return isLoading ? <Loading/> :
            <main className={'tours-container'}>
                <Tours tours={tours} removeTour={removeTour}/>
            </main>
    }

    if (isLoading) {
        return <main className={'tours-container'}>
            <Loading/>
        </main>
    }

    if(tours.length === 0){
        return <main className={'tours-container'}>
            <div className="title">
                <h2>no tours left</h2>
                <div className={'underline'}></div>
                <button className={'btn'} style= {{marginTop:'2rem'}} onClick={() => fetchTours()}> refresh </button>
            </div>
        </main>;
    }


    return render();


}

export default ToursApp;