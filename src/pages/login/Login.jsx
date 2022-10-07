import{useContext, useState} from "react";
import "./login.scss";
import React from "react";
import { signInWithEmailAndPassword  } from "firebase/auth";
import{auth} from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


const Login = () => {
  
  const [error, setError] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")
  const navigate = useNavigate();  
 
  const{dispatch} = useContext(AuthContext);


  const handlelogin = (e) =>{
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    dispatch({type:'login',payload:user});
    navigate("/");
  })
  .catch((error) => {
    setError(true);
  });
  };
  return (
    <div className="Login">
      <form onSubmit={handlelogin}>
        <input type="email" placeholder="email" onChange={e=>setEmail(e.target.value)} />
        <input type="password" placeholder="password" onChange={e=>setpassword(e.target.value)}/>
        <button type="sumbit">login</button>
        {error && <span>Contraseña incorrecta</span>}
      </form>
    </div>
  )
}

export default Login