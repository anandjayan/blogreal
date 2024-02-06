import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="logintitle">Login</span>
      <form className="loginform">
        <label>Email</label>
        <input
          className="logininput"
          autofocus
          type="email"
          placeholder="Enter your Email"
        />
        <label>Password</label>
        <input
          className="logininput"
          type="password"
          placeholder="Enter your Password"
        />
        <button className="loginbutton">Login</button>
      </form>
      <button className="loginregisterbutton">
        <Link to="/register" className="link">
          Register
        </Link>
      </button>
    </div>
  );
}
