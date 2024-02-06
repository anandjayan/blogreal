import "./Singlepost.css";

export default function Singlepost() {
  return (
    <div className="singlepost">
      <div className="singlepostwrapper">
        <img
          src="./pictures/neom-_tDdlCJIwOA-unsplash.jpg"
          alt=""
          className="singlepostimg"
        />
        <h1 className="singleposttitle">
          hamare bina tumhari zindagi jhand hai
          <div className="singlepostedit">
            <i className=" singleposticon fa-solid fa-feather"></i>
            <i className=" singleposticon fa-solid fa-eraser"></i>
          </div>
        </h1>
        <div className="singlepostinfo">
          <span className="singlepostauthor">
            Author: <b>Anandu</b>{" "}
          </span>
          <span className="singlepostdate">1 hour ago</span>
        </div>
        <p className="singlepostdesc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
          suscipit quibusdam eaque quia unde consequatur, voluptate atque
          accusamus velit nulla minima vitae architecto aut, explicabo commodi
          libero error. Saepe, voluptates? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Totam suscipit quibusdam eaque quia unde
          consequatur, voluptate atque accusamus velit nulla minima vitae
          architecto aut, explicabo commodi libero error. Saepe, voluptates?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
          suscipit quibusdam eaque quia unde consequatur, voluptate atque
          accusamus velit nulla minima vitae architecto aut, explicabo commodi
          libero error. Saepe, voluptates? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Totam suscipit quibusdam eaque quia unde
          consequatur, voluptate atque accusamus velit nulla minima vitae
          architecto aut, explicabo commodi libero error. Saepe, voluptates?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
          suscipit quibusdam eaque quia unde consequatur, voluptate atque
          accusamus velit nulla minima vitae architecto aut, explicabo commodi
          libero error. Saepe, voluptates? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Totam suscipit quibusdam eaque quia unde
          consequatur, voluptate atque accusamus velit nulla minima vitae
          architecto aut, explicabo commodi libero error. Saepe, voluptates?
        </p>
      </div>
    </div>
  );
}
