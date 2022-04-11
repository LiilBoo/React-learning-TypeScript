import { useState, useEffect } from 'react';


export function Timer() {


    const [timer, setTimer] = useState(1);

  
  
    useEffect(() => {
      
    
         
  
     const intervalID = setInterval(() => {
  
  
        setTimer(timer => timer + 1);
  
  
      }, 1000);
    
      return () => {
   
      clearInterval(intervalID);
      
      };
  
    }, []);
  
  
  
      return (
          
              <h1>Infinite increment with 1 second setInterval : {timer}</h1>
      );

};