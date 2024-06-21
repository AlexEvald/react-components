import './category.style.scss'
import {useParams} from "react-router-dom";
import {Fragment, useEffect, useState} from "react";

const Category = () => {

    //i am getting the url param
    const {category} = useParams();



    //products && , we add that because in the first time we are fetching data and the code is trying to run synchronously, and we are fetching async
    return(
        <Fragment>
            <h2 className={'category-title'}>{category.toUpperCase()}</h2>
            <div className={'category-container'}>
                   TESTTING !!!
            </div>
        </Fragment>

    )

}

export default Category;