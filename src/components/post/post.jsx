import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        src=".\pictures\anthony-tran-3TCrqSnSHeU-unsplash.jpg"
        alt="post_picture"
        className="postimg"
      />
      <div className="postinfo">
        <div className="postcategories">
          <span className="postcategory">Music</span>
          <span className="postcategory">Life</span>
          <span className="postcategory">Friendship</span>
          <span className="postcategory">Family</span>
        </div>
        <span className="posttitle">i love you to the moon and back</span>
        <hr />
        <span className="postdate">1 hour ago</span>
      </div>
      <p className="postdesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam tenetur cum
        veniam perspiciatis asperiores harum sapiente unde quaerat amet aliquam
        iure quas quo reiciendis magni mollitia, atque, saepe veritatis
        consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nam tenetur cum veniam perspiciatis asperiores harum sapiente unde
        quaerat amet aliquam iure quas quo reiciendis magni mollitia, atque,
        saepe veritatis consequatur? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nam tenetur cum veniam perspiciatis asperiores harum
        sapiente unde quaerat amet aliquam iure quas quo reiciendis magni
        mollitia, atque, saepe veritatis consequatur? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Nam tenetur cum veniam perspiciatis
        asperiores harum sapiente unde quaerat amet aliquam iure quas quo
        reiciendis magni mollitia, atque, saepe veritatis consequatur?
      </p>
    </div>
  );
}
