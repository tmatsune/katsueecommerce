import LOGO from '../images/logo.png'
import '../header.css'
import { Outlet, Link } from "react-router-dom";
import { Fragment } from 'react';
import { useContext, useState } from 'react';
import { UserContext } from '../context/userContext';
import CartClass from '../cartClass/cart';
import { signOutUser } from '../utils/firebase';

function HomePage(){
    const {currentUser, setCurrentUser} = useContext(UserContext)
    const [show, setShow] = useState(false)

    function toggle(){
        if(show === false){
            setShow(true)
        }else{
            setShow(false)
        }
    }
    async function signOut(){
        const response = await signOutUser()
        console.log(response)
        setCurrentUser(null)
    }

    return(
        <Fragment>
        <header>
            <img src={LOGO} className="logo" alt=''></img>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/shop'>SHOP</Link></li>
                <li>
                    {
                    currentUser === null ? (<Link to='/signIn'>Sign In</Link>)
                     : ( <span onClick={signOut}>SIGN OUT</span>)
                     }
                </li>
                <li><span onClick={toggle}>CART</span></li>
                {
                    show ? (<CartClass></CartClass>) : (null)
                }
                
            </ul>
        </header>
        <Outlet></Outlet>
        </Fragment>

    )
}
export default HomePage