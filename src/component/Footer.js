import './Footer.css';
function Footer() {

    return( 
        <div className="Footer">
            <div className="menu-footer">
                <a>
                    <img src="/images/ic-home.png" className="menu-home"></img>
                    <span>หน้าแรก</span>
                </a>
                <a>
                    <img src="/images/ic-user.png" className="menu-user"></img>
                    <span>ข้อมูลสมาชิก</span>
                </a>
                <a>
                    <img src="/images/ic-history.png" className="menu-his"></img>
                    <span>ประวัติการซื้อ</span>
                </a>
                <a>
                    <img src="/images/ic-cart.png" className="menu-cart"></img>
                    <span>ตะกร้า</span>
                </a>
                <a>
                    <img src="/images/ic-company.png" className="menu-company"></img>
                    <span>เกี่ยวกับเรา</span>
                </a>
            </div>
        </div>
    );
}
export default Footer;