import "./Write.css";

export default function Write() {
  return (
    <div className="write">
      <img
        src=".\pictures\neom-3DPaL6XDcZE-unsplash.jpg"
        alt=""
        className="writeimg"
      />
      <form className="writeform">
        <div className="writeformgroup">
          <label htmlFor="fileinput">
            <i className=" writeicon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileinput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeinput"
            autoFocus={true}
          />
        </div>
        <div className="writeformgroup">
          <textarea
            placeholder="tell your story"
            type="text"
            className="writeinput writetext"
          ></textarea>
        </div>
        <button className="writesubmit">Publish</button>
      </form>
    </div>
  );
}
