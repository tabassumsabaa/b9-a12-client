
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import useAxiosOpen from "../Hooks/useAxiosOpen";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const axiosOpen = useAxiosOpen();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = ( email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password); 
    }

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
            if (currentUser) {
                const userInfo = { email: currentUser.email};
                axiosOpen.post("/jwt", userInfo )
                .then(res =>{
                    if (res.data.token) {
                        localStorage.setItem('access-token', res.data.token);
                    }
                })
            }
            else{
                localStorage.removeItem('access-token');
            }
            
        });
        return () =>{
            return unsubscribe();
        }
    }, [axiosOpen])

    const authInfo = {
        user, loading, createUser, signIn, logOut, googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;