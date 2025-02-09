import {Link, Outlet} from "react-router-dom";
import {Fragment} from "react";
import {ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import './navigation.styles.scss';
const Navigation = () => {



    return (
        <Fragment>
            <div className={'navigation'}>
                <Link className={'logo-container'} to={'/'}>
                    <CrwnLogo className={'logo'}/>
                </Link>
            </div>
            <div className="separator"></div>
            <Outlet/> {/* Outlet this replaces the located component from the nested Router elements*/}
        </Fragment>
    )
}

export default Navigation;