import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import ItemList from "../components/ItemList";
import MovieList from "../components/MovieList";

import Layout from "../components/Layout";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  whatsnew,
  movies,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      <FullWidthImage img={heroImage} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <section style={{ width: "50%", boxSizing: "border-box", padding: 8, }} className="section section--gradient">
          <div
            style={{
              margin: 16,
              padding: 16,
              boxSizing: "border-box",
              backgroundColor: "rgba(255,255,255,0.7)"
            }}
            className="container">
            <p
              style={{
                fontSize: 32,
                fontWeight: "bold",
                color: "white"
              }}
            >What's new</p>
            <ItemList items={whatsnew.item} />
          </div>
        </section>
        <section style={{ width: "50%", boxSizing: "border-box", padding: 8 }} className="section section--gradient">
          <div
            style={{
              margin: 16,
              padding: 16,
              boxSizing: "border-box",
              backgroundColor: "rgba(255,255,255,0.7)"
            }}
            className="container">
            <p
              style={{
                fontSize: 32,
                fontWeight: "bold",
                color: "white"
              }}
            >動画</p>
            <MovieList items={movies} />
          </div>
        </section>
      </div>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  whatsnew: PropTypes.shape({
    item: PropTypes.array,
  }),
  movies: PropTypes.array,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        whatsnew={frontmatter.whatsnew}
        movies={frontmatter.movies}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        whatsnew {
          item {
            text
            link
          }
        }
        movies {
          url
        }
      }
    }
  }
`;
