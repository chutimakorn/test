import MenuBar from '../Components/menuBar'
import Request from '../Components/request'
import Screen1 from '../Components/screen1'
import Screen2 from '../Components/screen2'
import Screen3 from '../Components/screen3'
import Screen4 from '../Components/screen4'
import liff from '@line/liff';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { CheckRequestStatus } from "../API/API_FUNC";
import {
    setRoute,
    setOwnRequest,
    setUser
} from "../Redux/Actions/route";




const Main = () => {

    const [idToken, setIdToken] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [Name, setName] = useState("");
    const [showMenu, setShowMenu] = useState(false);

    const { routeName } = useSelector(
        (state) => state
    );
    const dispatch = useDispatch();
    const initLine = () => {
        liff.init({ liffId: '1656323976-B3v9pmvg' }, () => {
            if (liff.isLoggedIn()) {
                runApp();
            } else {
                liff.login();
            }
        }, err => console.error(err));

        // let response = await CheckRequestStatus('test');
   
        // if(response === null){
        //     dispatch(setRoute("Request", "", ""));
        // }else{
        //     if (response.result !== null) {
        //         console.log("request", response.result)
        //         if (response.result.sR_Status === "A") {
        //             dispatch(setRoute("Screen1", "", ""));
        //             dispatch(
        //                 setOwnRequest({
        //                     email: response.result.sR_E_Mail,
        //                     citizen: response.result.sR_Citizen,
        //                     idNumber: response.result.sR_ID_Number,
        //                     share: response.result.sR_Numofshare,
        //                     name: response.result.sR_Name,
        //                     surname: response.result.sR_Surname,
        //                     mobile: response.result.sR_Mobile,
        //                     status: response.result.sR_Status
        //                 })
        //             );
        //             setShowMenu(true);
        //         } else {
        //             dispatch(setRoute("Request", "", ""));
        //             dispatch(
        //                 setOwnRequest({
        //                     email: response.result.sR_E_Mail,
        //                     citizen: response.result.sR_Citizen,
        //                     idNumber: response.result.sR_ID_Number,
        //                     share: response.result.sR_Numofshare,
        //                     name: response.result.sR_Name,
        //                     surname: response.result.sR_Surname,
        //                     mobile: response.result.sR_Mobile,
        //                     status: response.result.sR_Status
        //                 })
        //             );
                    
        //         }
    
    
        //     } else {
                
        //         dispatch(setRoute("Request", "", ""));
    
        //     }
        // }
       

    }

    const runApp = async () => {
        const idToken = liff.getIDToken();
        setIdToken(idToken);

        liff.getProfile().then(profile => {
            console.log(profile);
            setDisplayName(profile.displayName);

            dispatch(setUser({
                lineID:profile.userId,
                lineToken:idToken
            }));
            

        }).catch(err => console.error(err));

        let response = await CheckRequestStatus('test');
   
        if(response === null){
            dispatch(setRoute("Request", "", ""));
        }else{
            if (response.result !== null) {
                console.log("request", response.result)
                if (response.result.sR_Status === "A") {
                    dispatch(setRoute("Screen1", "", ""));
                    dispatch(
                        setOwnRequest({
                            email: response.result.sR_E_Mail,
                            citizen: response.result.sR_Citizen,
                            idNumber: response.result.sR_ID_Number,
                            share: response.result.sR_Numofshare,
                            name: response.result.sR_Name,
                            surname: response.result.sR_Surname,
                            mobile: response.result.sR_Mobile,
                            status: response.result.sR_Status
                        })
                    );
                    setShowMenu(true);
                } else {
                    dispatch(setRoute("Request", "", ""));
                    dispatch(
                        setOwnRequest({
                            email: response.result.sR_E_Mail,
                            citizen: response.result.sR_Citizen,
                            idNumber: response.result.sR_ID_Number,
                            share: response.result.sR_Numofshare,
                            name: response.result.sR_Name,
                            surname: response.result.sR_Surname,
                            mobile: response.result.sR_Mobile,
                            status: response.result.sR_Status
                        })
                    );
                    
                }
    
    
            } else {
                
                dispatch(setRoute("Request", "", ""));
    
            }
        }
    }


    


    useEffect(() => {


        initLine();
    }, []);


    return (

        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', flex: 1 }}>

            <div style={{ flex: 1, backgroundColor: '#e9ecef' }}>
            <img src={displayName}/>:{displayName}
            </div>
            <div style={{ textAlign: 'center', margin: 20, marginBottom: 5, flex: 20, flexDirection: 'column', display: 'flex' }}>
                {/* <Request /> */}
                {/* <Profile /> */}
                {routeName === "Request" && <Request />}
                {routeName === "Screen1" && <Screen1 />}
                {routeName === "Screen2" && <Screen2 />}
                {routeName === "Screen3" && <Screen3 />}
                {routeName === "Screen4" && <Screen4 />}
            </div>
            {showMenu === true ? (<div style={{ flex: 1 }}>
                <MenuBar />
            </div>) : (<></>)}
            {/* <div style={{ flex: 1 }}>
                <MenuBar />
            </div> */}

        </div>


    )

}


export default Main