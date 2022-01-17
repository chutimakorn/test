import React from 'react'
import Loader from 'react-loader-spinner'


const LoadingIndicator = () => {

  return (
  
      <div style={style}>
        <Loader 
         type='ThreeDots'
          color='#009ffd'
          height={250}
          width={250}
           // timeout={3000} //3 secs
        />
      </div>
    
  )
}
const style = {
  width: "100%",
  height: "100%",
  position: "fixed",
  justifyContent: "center",
  alignItems: "center",
  top: "50%",
  left: "50%",
  display: "flex",
  transform: "translate(-50%, -50%)",
  zIndex: "1000",
  background: "#DCDCDC",
  overflow: "auto",
  background: "rgb(0, 0, 0)",
  background: "rgba(0, 0, 0, 0.4)",
};

export default LoadingIndicator
