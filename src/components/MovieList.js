import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const MovieList = ({ items }) => (
    <div>
        {
            items.map((item) => (
                <div key={item.url}>
                    <Link to={item.url}>
                        <section className="section">
                            <p>{item.url}</p>
                        </section>
                    </Link>
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

export default MOvieList;