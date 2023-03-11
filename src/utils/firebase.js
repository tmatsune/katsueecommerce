import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
 } from "firebase/auth"
import {
    getFirestore,
    doc, // allow to get documents in firestore database
    getDoc, // get doc data instance
    setDoc, // set data
    collection, // allow to get collection refrence
    writeBatch, //
    query, 
    getDocs,
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD87FImyvo54GnpP4n4ldYsFB0M0v8iFrk",
  authDomain: "katsuedb.firebaseapp.com",
  projectId: "katsuedb",
  storageBucket: "katsuedb.appspot.com",
  messagingSenderId: "613056421526",
  appId: "1:613056421526:web:b2a81cbfd727caea45ecb7"
};

// ------------------initlialize FIREBASE -------------------//
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()//class
provider.setCustomParameters({
    prompt: "select_account" //force to select account
});

export const auth = getAuth()

export const signInWithGooglePopUp = () => 
signInWithPopup(auth, provider); // has to be anonymous function

export const dataBase = getFirestore() // allows to get access to database

// ------------------ CREATE USERS -------------------//
export const createUserDocument = async(userAuth) => {

    const userDocRef = doc(dataBase, 'users', userAuth.uid)//uid is unique code for user
    //console.log(userDocRef)
    const userSnapShot = await getDoc(userDocRef)
    //console.log(userSnapShot)
    //console.log(userSnapShot.exists())
    // if user data ! exists, create item in collection 
    if(userSnapShot.exists() === false){
        const {displayName, email} = userAuth
        const createdAt = new Date()
        console.log("here")
        try{
            await setDoc(userDocRef, {
               displayName,
               email,
               createdAt,
            })
        }catch(error){
            console.log(error)
        }
    }
    // if user data exists, return userdocref
    if(userSnapShot.exists()){
        return userDocRef
    }
}
// -------------------------- Sign Out --------------------------//
export const signOutUser = async () => await signOut(auth)

// -------------------------- DB STORAGE --------------------------//
// collectionKey = categories key, objectsToAdd=actual documents to add json/list[dict]
export const addCollection = async (collectionKey, objectsToAdd) => { 
    const collectionReference = collection(dataBase, collectionKey);
    const batch = writeBatch(dataBase)

    objectsToAdd.forEach(item => {
        const documentReference = doc(collectionReference, item.title.toLowerCase());
        batch.set(documentReference, item)
    })
    await batch.commit();
    console.log("done")
}
export const getProducts = async () => { //enter database and name of collection
    const collectionReference = collection(dataBase, 'shirts')
    const query1 = query(collectionReference); //gives obect that can get snapshot
    const query1SnapShot = await getDocs(query1)
    const items = []
    query1SnapShot.forEach(item => {
        items.push(item.data())
    })
    return items
    
}
