import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../Css/FooterStyle.css';


const Footer = () => {
    return(
        <>
        <footer>
            <div className="container container-flex" >
                <div className="icons">
                    <InstagramIcon className="icon"/>
                    <LinkedInIcon className="icon"/>
                    <FacebookIcon className="icon"/>
                    <TwitterIcon className="icon"/>
                </div>
                <div className="line">
                    <hr/>
                    <hr/>
                </div>
                <div className="copyright">
                    <p> All rights reserved &copy; </p>
                    <p> MADE WITH LOVE by Picky </p>
                </div>
            </div>
        </footer>
        </>
    )
};

export default Footer;