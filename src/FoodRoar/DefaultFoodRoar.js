import React, { useState , useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
//import './FoodRoar.css';
import { Outlet } from 'react-router-dom';
import UserContext from './utlis/UserContext';
import {Provider} from 'react-redux';
import appStore from './utlis/AppStore';

const DefaultFoodRoar = () =>{
 
    const [userName, setUserName] = useState('');
    useEffect(() =>{
        const data = {
            name : "Krishna",
        }
       setUserName(data.name)
    }, [])

    return(
        <UserContext.Provider value={{loggedInUser : userName, setUserName }}>
        <div>
        <Header/>
        <Outlet/>
        <Footer/>
        </div>
        </UserContext.Provider>
    );
}

export default DefaultFoodRoar;