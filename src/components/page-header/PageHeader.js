import "./page-header.scss";

import assets from "../../assets";

function PageHeader(props) {
  return (
    <div
      className="page-header"
      style={{ backgroundImage: `url(${assets.images.footerBg})` }}
    >
      <h2>{props.children}</h2>
    </div>
  );
}

export default PageHeader;
