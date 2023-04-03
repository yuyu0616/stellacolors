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
                if(item === undefined && item?.url.length >= 0){
                    return "";
                }
                const splitURL = item?.url.split('/');
                const url = splitURL[splitURL.length - 1];
                return (
                    <Youtube videoId={url} opts={opts} key={url} />
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