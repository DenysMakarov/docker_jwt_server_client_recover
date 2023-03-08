import '../client/src/App.css';
import {useState} from "react";
import {BrowserRouter} from 'react-router-dom'
import AppRouter from "./AppRouter";


function App() {

    const [isLogin, setIsLogin] = useState(true)
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    return (
        <div className="App">

            <div className="authorization">

                <div className='nav'>
                    <div onClick={() => setIsLogin(false)} style={{border: `1px solid ${ isLogin ? 'lightgray' : 'lightskyblue'}`}}>Registration</div>
                    <div onClick={() => setIsLogin(true)} style={{border: `1px solid ${ !isLogin ? 'lightgray' : 'lightskyblue'}`}}>Login</div>
                </div>

                {
                    !isLogin &&
                    <div className='registration-form'>
                        <label htmlFor="email">Email</label>
                        <input type="text" id='email'/>

                        <label htmlFor="email">Pass</label>
                        <input type="text" id='email'/>

                        <button>Register</button>
                    </div>
                }

                {
                    isLogin &&
                    <div className='registration-form login'>
                        <label htmlFor="email">Email</label>
                        <input type="text" id='email'/>

                        <label htmlFor="email">Pass</label>
                        <input type="text" id='email'/>

                        <button>Log in</button>
                    </div>
                }


                <BrowserRouter>

                    <AppRouter/>

                </BrowserRouter>



            </div>

        </div>
    );
}

export default App;
