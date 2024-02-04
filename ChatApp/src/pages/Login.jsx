import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
export const Login = () => {

  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    const email = e.target[0].value;
    const password = e.target[1].value;
    

    const auth = getAuth();

    try {

      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")

    } catch (err) {

      setErr(true);

    }
  };
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">ChatApp</span>
            <span className="title">Login</span>
            <form onSubmit={handleSubmit}>
                <input type="email" className="email" placeholder='Email'/>
                <input type="password" className="password" placeholder='Password'/>
                <button>Accedi</button>
                {err && <span>Ops... qualcosa è andato storto.</span>}
            </form>
            <p>Non hai un account? <Link to="/register">Registrati</Link>.</p>
        </div>
    </div>
  )
}

export default Login;