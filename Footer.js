import React from "react";
import classes from './Footer.module.css';

const Footer = (props) => {
    return <div className={classes.footerBanner}>
        <div className={classes.footerHeading}>The Generics</div>
        <div>Youtube</div>
        <div>Spotify</div>
        <div>Facebook</div>
    </div>
}

export default Footer;