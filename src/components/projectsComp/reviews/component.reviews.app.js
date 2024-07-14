import people from './data';
import {useState} from "react";
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from "react-icons/fa";
import './reviews.styles.scss';


const Reviews = () => {

    const [index, setIndex] = useState(0);
    const {name, job, image, text} = people[index];

    const checknumber = (number) => {
        if (number < 0) {
            return people.length - 1;
        }
        if (number > people.length - 1) {
            return 0;
        }
        return number;
    }


    const nextPerson = () => {
        setIndex((currentIndex) => {
                const newIndex = currentIndex + 1;
                return checknumber(newIndex);
            }
        );
    }

    const prevPerson = () => {
        setIndex((currentIndex) => {
                const newIndex = currentIndex - 1;
                return checknumber(newIndex);
            }
        );
    }
    const randomPerson = () => {
        let randomIndex = Math.floor(Math.random() * people.length);
        setIndex(randomIndex);
    }


    console.log(name);
    return (
        <main className={'reviews-container'}>
            <article className={'review'}>
                <div className={'img-container'}>
                    <img src={image} alt={name} className={'person-img'}/>
                    <span className={'quote-icon'}>
                        <FaQuoteRight/>
                    </span>
                </div>
                <h4 className={'author'}>{name}</h4>
                <p className={'job'}>{job}</p>
                <p className={'info'}>{text}</p>
                <div className={'btn-container'}>
                    <button className={'prev-btn'} onClick={() => prevPerson()}>
                        <FaChevronLeft/>
                    </button>
                    <button className={'next-btn'} onClick={() => nextPerson()}>
                        <FaChevronRight/>
                    </button>
                </div>
                <button className={'btn btn-hipster'} onClick={() => randomPerson()}>
                    suprise me
                </button>
            </article>

        </main>

    )
}

export default Reviews;