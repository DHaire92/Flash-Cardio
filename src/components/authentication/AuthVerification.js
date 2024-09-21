import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react';
import {auth} from "../components/Firebase"

const AuthVerification = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user) {
                setAuthUser(user);
            }
            else
            {
                setAuthUser(null);
            }
        });

            return () => {
                listen();
            }
    }, [])

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('signed out successful')
        }).catch(error => console.log(error))
    }
    return (
        <div> 
            { authUser ? <p>{authUser.email}</p> : <p>Signed Out</p>}
            <button className="button2" onClick={userSignOut} >Sign Out</button>
        </div>
    );
};

export default AuthVerification;