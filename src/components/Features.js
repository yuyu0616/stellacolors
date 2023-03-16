import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { Link } from "gatsby";

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      item.link ? 
        <Link to={item.link}>
          <GridCard item={item} />
        </Link>
        : <GridCard item={item} />
    ))}
  </div>
);

const GridCard = ({ item }) => (
  <div key={item.text} className="column is-6">
    <section className="section">
      <div className="has-text-centered">
        <div
          style={{
            width: "240px",
            display: "inline-block",
          }}
        >
          <PreviewCompatibleImage imageInfo={item} />
        </div>
      </div>
      <p>{item.text}</p>
    </section>
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
