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
        </div>
    );
}
export default Intro;

// Notes
we can destructure the functional component in two ways 