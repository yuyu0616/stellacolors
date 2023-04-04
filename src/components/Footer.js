import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/biglogo.png";
import twitter from "../img/social/twitter.png";
import youtube from "../img/social/youtube.png";
import tiktok from "../img/social/tiktok.png";
import live from "../img/social/live.png";

const Footer = () => {
  
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="StellaColors"
            style={{ width: "14em", height: "10em" }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        メンバー紹介
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        イベント情報
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        グッズ情報
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        新着情報
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/movie">
                        動画
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="tiktok" href="https://tiktok.com/stellacolors">
                  <img
                    src={tiktok}
                    alt="tiktok"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="youtube" href="https://www.youtube.com/@StellaColors">
                  <img
                    src={youtube}
                    alt="youtube"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="live" href="https://www.twitcasting.tv/stellacolors_u">
                  <img
                    src={live}
                    alt="live"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
