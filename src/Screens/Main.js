import MenuBar from '../Components/menuBar'
import Request from '../Components/request'
import liff from '@line/liff';
import React,{ useState,useEffect } from 'react'





const Main = () => {

    const [idToken, setIdToken] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [Name, setName] = useState("");


    const initLine = () => {
        liff.init({ liffId: '1656323976-B3v9pmvg' }, () => {
            if (liff.isLoggedIn()) {
                runApp();
            } else {
                liff.login();
            }
        }, err => console.error(err));
    }

    const runApp = () => {
        const idToken = liff.getIDToken();
        setIdToken(idToken);

        liff.getProfile().then(profile => {
            console.log(profile);
            setDisplayName(profile.displayName);
         

        }).catch(err => console.error(err));
    }


    const scanQr = () => {
        const result = liff.scanCode();
        setName(result);
        console.log('scan',result);
    }


    useEffect(() => {


        initLine();
    }, []);


    return (

        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', flex: 1 }}>

            <div style={{ flex: 1, backgroundColor: '#e9ecef' }}>
                {Name}:{displayName}
            </div>

            <Request onclick={scanQr()} name={Name}/>


            <div style={{ flex: 1 }}>
                <MenuBar />
            </div>

        </div>


    )

}


export default Main