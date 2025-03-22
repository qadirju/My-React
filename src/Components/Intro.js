import React from 'react';
// function Intro(){
//     return(
//         <div>
//             <h1>My Introduction to React</h1>
//             <h2>My name is Ghulam Qadir</h2>
//             </div>

//     )
// }
const Intro = (props) =>{
    console.log(props);
    return (
        <div>
            <h1>I want to see {props.name}</h1>
            <h2>My name is Ghulam Qadir</h2>
            <h2>My father name is Haji Faqeer Junejo </h2><br>
            <label> My Goals: <label>
            <input type="text"></input>
        </div>
    );
}
export default Intro;

// Notes
we can destructure the functional component in two ways 
