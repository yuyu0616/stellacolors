import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Youtube from "react-youtube";

const MovieList = ({ items }) => (
    <div>
        {
            items.map((item) => (
                <div key={item.url}>
                    <Youtube videoId={item.url} />
                </div>
            ))
        }
    </div>
)


MovieList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string,
        })
    )
}

export default MovieList;