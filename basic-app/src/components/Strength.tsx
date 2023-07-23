import { useState,useEffect } from "react"
import React from "react";
export default function Strength(props) {
    const [strength, setStrength] = useState({name:'', color:''})

    useEffect(() => {
      const minPasswordLength = 8;
      const hasUpperCase = /[A-Z]/.test(props.password);
      const hasLowerCase = /[a-z]/.test(props.password);
      const hasDigit = /\d/.test(props.password);
      const hasSpecialChar = /[!@#$%^&*()_+\-={}:':"|,.?<>]/.test(props.password);

      let strengthCount = 0;
      if (props.password.length > minPasswordLength){
        strengthCount +=1
      }
      if (hasUpperCase){
        strengthCount +=1
      }
      if (hasLowerCase){
        strengthCount +=1
      }
      if (hasDigit){
        strengthCount +=1
      }
      if (hasSpecialChar){
        strengthCount +=1
      }

    
      if (strengthCount < 3 && props.password.length>0){
        setStrength({name:'Weak', color: 'red'})
      }
      else if (strengthCount === 3 || strengthCount === 4){
        setStrength({name:'Moderate',color:'orange'})
      }
      else if(strengthCount>4){
        setStrength({name:'Strong', color:'green'})
      }
    }, [props.password])
    
    return (
        <p style={{color:strength.color, fontSize:'20px'}}>{strength.name}</p>
    )
}