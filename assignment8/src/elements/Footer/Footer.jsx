import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='faq'> 
            <div className="question">
                <h2>Q: What is the difference between "State" and "Props" ??</h2>
                <p>Ans: Props are used to send any data or function to child Components. Props are not changeable. On other hand State  is used to store data about Components.States are changeable or can be updated.</p>
            </div>
            <div className="question">
                <h2>Q: How UseState Hook works ??</h2>
                <p>Ans: UseState hook returns 2 things the state where the updated data of a component can be stored and another is the setState function which sets the updated value to the state.</p>
            </div>
            <div className="question">
                <h2>Q: What useEffect do beside the loading of data ??</h2>
                <p>Ans: There is many use of this useEffect hook. It can carry on its working procedure after data loading such as data saving in database. Working on user input.It can call a function to end the work. </p>
            </div>
            <div className="question">
                <h2>Q: How React works ??</h2>
                <p>Ans: React is javascript library used to build user interface. It uses JSX to edit javascript and HTML simultaneously.In every state there is a state is assigned which is used to track any change of the component and saved to the virtual DOM</p>
            </div>
        </div>
    );
};

export default Footer;