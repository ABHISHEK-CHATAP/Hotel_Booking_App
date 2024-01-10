import "./featured.css";

const Features = () => {
  return (
    <>
      <div id="featured">
        <div className="featuredItem">
          <img
            src="https://static.toiimg.com/thumb/width-600,height-400,msid-105557412.cms"
            className="featuredImage"
          />
          <div className="featuredTitles">
            <h2>Dublin</h2>
            <h2>123 properties</h2>
          </div>
        </div>
        {/* ----------------- */}
        <div className="featuredItem">
          <img
            src="https://static.toiimg.com/thumb/width-600,height-400,msid-82001512.cms"
            className="featuredImage"
          />
          <div className="featuredTitles">
            <h2>Austin</h2>
            <h2>23 properties</h2>
          </div>
        </div>
        {/* ------------------- */}
        <div className="featuredItem">
          <img
            src="https://images.wsj.net/im-890997?size=1.5005861664712778&width=600&height=400"
            className="featuredImage"
          />
          <div className="featuredTitles">
            {" "}
            <h2>Reno</h2>
            <h2>12 properties</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
