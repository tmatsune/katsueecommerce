import LOGO from '../images/logo.png'
import '../header.css'
import { Outlet, Link } from "react-router-dom";
import { Fragment } from 'react';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/userContext';
import CartClass from '../cartClass/cart';
import { signOutUser } from '../utils/firebase';

function HomePage(){
    const {currentUser, setCurrentUser} = useContext(UserContext)
    const [show, setShow] = useState(false)

    const [loggedIn, setLoggedIn] = useState(false)

     useEffect(() => {
        const data = window.localStorage.getItem("isloggedIn")
        console.log(data)
        if(data !== null){
            setLoggedIn(JSON.parse(data))
        }
    }, [])
    
    useEffect(() => {
        window.localStorage.setItem('isloggedIn', JSON.stringify(loggedIn))
        //console.log(window.localStorage.getItem("isloggedIn"))
    },[loggedIn])

    useEffect(() => {
        if(currentUser !== null){
            setLoggedIn(true)
        }
    }, [currentUser])


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
        setLoggedIn(false)
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
                    loggedIn === false ? (<Link to='/signIn'>Sign In</Link>)
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