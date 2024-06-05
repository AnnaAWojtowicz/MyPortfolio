function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="footer grid-cell-footer">
            <div className="footer-text">Copyright AnnaAWojtowicz {year}</div>
        </div>
    );
}

export default Footer;