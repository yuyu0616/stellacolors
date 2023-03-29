import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Youtube from "react-youtube";

const opts = {
    height: 180,
    width: 320
}

const MovieList = ({ items }) => (
    <div
        style={{
            display: "flex",
            flexDirection: "column"
        }}
    >
        {
            items.map((item) => {
                const splitURL = item?.url.split('/');
                const url = splitURL[splitURL.length - 1];
                return (
                <div
                    style={{
                        padding: 1,
                        border: `1px solid #dcdcdc`
                    }}
                    key={url}>
                    <Youtube videoId={url} opts={opts} />
                </div>
                );
            })
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