import './App.css'
import pic from './image/吉掰卡哇.jpg'
function App() {
  

  return (
    <div id="app">
        <div id="container">
            <div id="user">

                <div id="avatar">
                    <img src={pic} alt=""/>
                </div>

                <div id="userInfo">
                    <div id="nameAndTitle">
                        <p id="title">
                            卓家全
                        </p>
                        <p>
                            學生
                        </p>
                    </div>
                    <div id="aboutUser">
                        <p> 我的興趣是打球、聽音樂
                        </p>
                        <p>我來自台中，獨自一人來台北唸書
                        </p>
                        <p>我的個性比較害羞，不善常跟人相處 
                        </p>
                    </div>
                </div>

            </div>
            <div id="edu">
                <p id="title">
                    教育
                </p>
                <p>
                    淡江大學資管系
                </p>

            </div>
            <div id="about">
                <div id="contact">
                    <p id="title">
                        Contact
                    </p>
                    <div id="contactInfo">
                        <div id="locate">
                            <p id="title">locate <i id="bi bi-geo-alt"></i></p>
                            <p>
                                卓家全
                            </p>
                            <p>
                                資訊管理學系
                            </p>
                            <p>
                                淡江大學
                            </p>
                        </div>
                        <div id="email">
                            <p id="title">Email <i id="bi bi-envelope"></i></p>
                            <p>
                                E-mail: zhuojiaquan520@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
                <div id="experiences">

                    <p id="title">
                        Experience
                    </p>

                    <div id="experience">
                        <p id="title">
                            田徑隊
                        </p>
                        台中市中正國小
                    </div>

                    <div id="experience">
                        <p id="title">
                            班長
                        </p>
                       國小三四年級
                    </div>

                    <div id="experience">
                        <p id="title">
                            風紀股長
                        </p>
                        國小五六年級
                    </div>

                    <div id="experience">
                        <p id="title">
                            吃肥皂
                        </p>
                        小時候
                    </div>

                    <div id="experience">
                        <p id="title">
                            跟同學大打出手
                        </p>
                        小學一年級
                    </div>

                    <div id="experience">
                        <p id="title">
                            出國去小琉球
                        </p>
                        小學三四年級
                    </div>

                    <div id="experience">
                        <p id="title">
                            出國去泰國
                        </p>
                        國中二年級
                    </div>

                    <div id="experience">
                        <p id="title">
                            出國去日本
                        </p>
                        大學二年級暑假
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default App
