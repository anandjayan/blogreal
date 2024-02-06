import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebaritem">
        <span className="sidebartitle">About Me</span>
        <img
          className="sidebarimg"
          src="./pictures/pro.jpg"
          alt="profilepicture"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          laborum in asperiores vitae neque eius tempore harum, sequi
          praesentium tenetur, alias, quod tempora? Et facere eum quo accusamus
          tenetur cumque.
        </p>
      </div>

      <div className="sidebaritem">
        <span className="sidebartitle">Categories</span>
        <ul className="sidebarlist">
          <li className="sidebarlistitem">Life</li>
          <li className="sidebarlistitem">Music</li>
          <li className="sidebarlistitem">Style</li>
          <li className="sidebarlistitem">Sports</li>
          <li className="sidebarlistitem">Cinema</li>
          <li className="sidebarlistitem">Tech</li>
          <li className="sidebarlistitem">Friendship</li>
          <li className="sidebarlistitem">Family</li>
        </ul>
      </div>

      <div className="sidebaritem">
        <span className="sidebartitle">Follow Us</span>
        <div className="sidebarsocialcontainer">
          <i class="sidebaricon fa-brands fa-facebook"></i>
          <i class="sidebaricon fa-brands fa-pinterest"></i>
          <i class="sidebaricon fa-brands fa-instagram"></i>
          <i class="sidebaricon fa-brands fa-twitter"></i>
        </div>
      </div>
    </div>
  );
}
