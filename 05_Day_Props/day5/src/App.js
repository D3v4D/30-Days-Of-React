import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const MainDiv= (props) => {
    const title = props.title.toUpperCase();
    const subtitle = props.subtitle
    return (
        <div className="divStyle">
            <div className='title'>
                {title}
            </div>

            <div className='subtitle'>
                {subtitle}
            </div>

            <div className='distributed'>
                <input type='modern-text' placeholder='First Name'></input>
                <input type='modern-text' placeholder='Last Name'></input>
                <input type='modern-text' placeholder='Email'></input>
            </div>

            <div>
                <button type='modern-button' onClick={() => {
                    console.log("Subscribed")
                    alert("Successfully subscribed")
                }
                }  >Subscribe</button>
            </div>
        </div>
    )
}


const App = () => <MainDiv title={'Subscribe'} subtitle={"Sign up with your email"}/>





export default App