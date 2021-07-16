
import './Header.css';
function Header() {

    function myFunction(){
    var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
    }
    return(
        
        <div className="Header">
                <div className="NavHeader">
                    <div className="LogoHeader">
                        <img src="/images/logo.png"></img>
                    </div>
                    <div className="TextHeadCenter">
                        <p>@ ร า ช บุ รี</p>
                    </div>
                    
                    <a  className="icon" onClick={myFunction}>
                        {/* <i class="fa fa-bars"></i> */}
                        <img src="/images/ic-burker.png"></img>
                    </a>
            </div>
            <div id="myLinks">
                    <a href="#login"><img src="/images/on-off-button.png"></img>เข้าสู่ระบบ</a>
                    <a href="#regis"><img src="/images/clipboard.png"></img>สมัครสมาชิก</a>
                    <a href="#another"><img src="/images/ic-we.png"></img>ตัวแทน</a>
                    <a href="#report"><img src="/images/emergency-call.png"></img>ร้องเรียน</a>
                </div>
        </div>

    );
}

export default Header;