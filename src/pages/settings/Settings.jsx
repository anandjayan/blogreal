import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingswrapper">
        <div className="settingstitle">
          <span className="settingsupdatetitle">Update your account</span>
          <span className="settingsdeletetitle">Delete account</span>
        </div>
        <form className="settingsform">
          <label>Profile picture</label>
          <div className="settingspp">
            <img
              src=".\pictures\tudose-madalin-5d2zLSbeiD8-unsplash.jpg"
              alt=""
            />
            <label htmlFor="fileinput">
              <i className="settingsppicon fa-regular fa-image"></i>
            </label>
            <input type="file" id="fileinput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Anandu" />
          <label>Email</label>
          <input type="email" placeholder="anandu@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingssubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
