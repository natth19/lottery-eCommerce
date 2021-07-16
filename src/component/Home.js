import './Home.css';
function Home() {

    function set2last() {
        var btnSet1 = document.getElementsByClassName(".btnSet1");
        
    }

    return(
        <div className="container-Home">
            <div className="ImgSlide">
                <img src="/images/imgSlide.png"></img>
            </div>
            <div className="LotterySearch">
                <h1>กรอกเลขล็อตเตอรี่ที่ต้องการค้นหา</h1>
                <div className="GetNumLottery">
                    <input type="tel" maxLength="1" placeholder="@"></input>
                    <input type="tel" maxLength="1" placeholder="ร"></input>
                    <input type="tel" maxLength="1" placeholder="า"></input>
                    <input type="tel" maxLength="1" placeholder="ช"></input>
                    <input type="tel" maxLength="1" placeholder="บุ"></input>
                    <input type="tel" maxLength="1" placeholder="รี"></input>
                </div>
                <div className="LotterySet">
                    <button className="btnSet1" onClick={set2last}>เลขท้าย 2 ตัว</button>
                    <button className="btnSet2">เลขท้าย 3 ตัว</button>
                    <button className="btnSet3">เลขหน้า 3 ตัว</button>
                </div>
                <div className="ButtonSearch">
                    <button className="btnDel">ลบตัวเลข</button>
                    <button className="btnSearch">ค้นหาล็อตเตอรี่</button>
                </div>
            </div>
            <div className="LotteryList">
                <div>
                    <p className="txtHeadList">เลือกเลขที่ชอบ</p>
                    <p className="line"></p>
                </div>
                <div className="SelectBtnLotSet">
                    <div className="box-sel">
                    <button className="selectAll" >ชุดทั้งหมด</button>
                    <button className="select1" >1 ใบ</button>
                    <button className="select2" >2 ใบ</button>
                    <button className="select3" >3 ใบ</button>
                    <button className="select4" >4 ใบ</button>
                    <button className="select5" >5 ใบ</button>
                    </div>
                </div>
                <div className="ListView">
                    <div className="card-gird">
                        <div className="Card-Lottery">
                            <div>
                                <img className="lottery" src="/images/Lottery.png" width="285px" max-height="141px"></img>
                            </div>
                            <div className="btn-cart">
                                <button><i class="fa fa-shopping-cart"></i>เพิ่มลงในตะกร้า</button>
                            </div>
                        </div>
                        <div className="Card-Lottery">
                            <div>
                                <img className="lottery" src="/images/Lottery.png" width="285px" max-height="141px"></img>
                            </div>
                            <div className="btn-cart">
                                <button><i class="fa fa-shopping-cart"></i>เพิ่มลงในตะกร้า</button>
                            </div>
                        </div>
                        <div className="Card-Lottery">
                            <div>
                                <img className="lottery" src="/images/Lottery.png" width="285px" max-height="141px"></img>
                            </div>
                            <div className="btn-cart">
                                <button><i class="fa fa-shopping-cart"></i>เพิ่มลงในตะกร้า</button>
                            </div>
                        </div>
                        <div className="Card-Lottery">
                            <div>
                                <img className="lottery" src="/images/Lottery.png" width="285px" max-height="141px"></img>
                            </div>
                            <div className="btn-cart">
                                <button><i class="fa fa-shopping-cart"></i>เพิ่มลงในตะกร้า</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;