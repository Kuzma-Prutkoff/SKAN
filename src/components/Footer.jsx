import React from 'react';
import '../styles/OverallStyles.css';
import logoScan from "./img/logo_skan_footer.png";

const Footer = () => {
    return (
        <div className="container">
            <footer className="footer">
                <div className="logo">
                  <img src={ logoScan } alt="logotype" />
                </div>
                <div className="footer_text">
                    <div className="footer_address">г. Москва, Цветной б-р, 40 +7-495-771-21-11 info@skan.ru</div>
                    <div className="footer_copyright">Все права нарушены 2024</div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
