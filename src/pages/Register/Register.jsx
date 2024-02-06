import "./Register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="Register">
      <span className="Registertitle">Register</span>
      <form className="Registerform">
        <label>Email</label>
        <input
          className="Registerinput"
          autofocus
          type="email"
          placeholder="Enter your Email"
        />
        <label>Username</label>
        <input
          className="Registerinput"
          autofocus
          type="text"
          placeholder="Enter Username"
        />
        <label>Password</label>
        <input
          className="Registerinput"
          type="password"
          placeholder="Enter your Password"
        />
        <button className="Loginbutton">Regsiter</button>
      </form>
      <button className="Registerloginbutton">
        <Link to="/login" className="link">
          Login
        </Link>
      </button>
    </div>
  );
}
