import { useState, useContext } from "react"
import MODEL1 from '../images/model.png'
import './signIn.css'
import { 
    signInWithGooglePopUp,
    createUserDocument ,
} from "../utils/firebase"
import { UserContext } from "../context/userContext"

function SignInForm(){
    return(
        <div id="signPage">
            <LogIn></LogIn>
        </div>
    )
}

const logIn = {
    email: '',
    password:'',
}
function LogIn(){
    //const [logInField, setLogInField] = useState(logIn)
    //const {email, password} = logInField
    const {currentUser, setCurrentUser} = useContext(UserContext)

    async function googlePopUp(){
        const popup = await signInWithGooglePopUp();
        console.log(popup)
        createUserDocument(popup.user)// popup is userRef
        setCurrentUser(popup)
    }
    function showCurrent(){
        console.log(currentUser)
    }

    return (
        <div className="signIn">
            <div className="box1">
                <h1 className="test"> Log In</h1>
                <span onClick={googlePopUp} className="submitButton">Log In</span>
            </div>
            <div className='box1'>
                <h1 className="test">Create Account</h1>
                <span onClick={googlePopUp} className="submitButton">Sign Up</span>
            </div>
            <div className="dot2"></div>
            <img src={MODEL1} alt='' className="modelImg"></img>
            <button onClick={showCurrent}></button>
        </div>
    )
}

const defaultSignUp = {
    ogName: '',
    email: '',
    password: '',
}
function SignUp(){
    const [formField, setFormField] = useState(defaultSignUp)
    const {ogName, email, password} = formField
    const [num, setNum] = useState(0)

    function increase(e){
        setNum(num +1)
    }
    function changeHandler(e){
        var {name, value} = e.target // e is event recevied from input element
        console.log(name) // name is in name of item, value is item in input
        setFormField({...formField, [name]:value}) 
        // spread items for formfield with , ['email']:input values
    }

    return(
        <div className="sipnUp">
            <h1 className="test"> Sign Up</h1>
            <p>{ogName} {email} {password}</p>
            <p>{num}</p>
            <form>
                <input className="name" 
                    required placeholder="name"
                    type='text'
                    value={ogName}
                    name="ogName"
                    onChange={changeHandler}
                    >
                </input>
                <input className="email" 
                    required placeholder="email"
                    value={email}
                    name="email"
                    onChange={changeHandler}
                    type="email"
                    >
                </input>
                <input className="password" 
                    required placeholder="password"
                    value={password}
                    name="password"
                    onChange={changeHandler}
                    type="password"
                    >
                </input>
                <span className="submitButton" onClick={increase}>Submit</span>
            </form>
        </div>
    )
}

export default SignInForm;