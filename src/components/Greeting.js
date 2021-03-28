import React from 'react'

const Greeting = () => {
    const today = new Date();
    const hr = today.getHours();
    if(hr>5 && hr<12){
        return(
            <p>Hello Good Morning</p>
        )
    }
    else if(hr>12 & hr<18){
        return(
            <p>Hello Good Afternoon</p>
        )
    }
    else if(hr===18){
        return(
            <p>Hello Good Evening</p>
        )
    }
    else {
        return(
            <p>Hello Good Night</p>
        )
    }
}

export default Greeting
