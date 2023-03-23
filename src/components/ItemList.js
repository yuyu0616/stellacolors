import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const ItemList = ({ items }) => (
    <div>
        {
            items.map((item) => (
                <div key={item.text}>
                    <Link to={item.link}>
                        <section className="section">
                            <p>{item.text}</p>
                        </section>
                    </Link>
                </div>
            ))
        }
    </div>
)


ItemList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            link: PropTypes.string,
        })
    )
}

export default ItemList;