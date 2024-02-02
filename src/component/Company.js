import React from 'react';

const Company = () => {
  return (
    <div>
      <div className='container' style={{margin: "20px auto", textAlign: "center", borderBottom: "1px solid #d8d8d8"}}>
        <div className='row underNav'>
          <img alt='' src='img/Fresh_Hand_Making.png' style={{width: "400px", height:"50px", margin:" 75px auto"}}/>
        </div>
        <div className='row' style={{fontSize: "25px", fontWeight: "700", margin:"30px"}}>
          <h3>회사소개</h3>
        </div>
        <div className='row' style={{fontSize: "25px", fontWeight: "650", color: "#981b1e", lineHeight: "40px"}}>
          <p>국내 디저트케익의 선두 기업</p>
          <br></br>
        </div>
        <div className='row' style={{fontSize: "20px", lineHeight: "40px"}}>
          <p>A Romantic Taste Since 2000</p>
        </div>
        <div className='row' style={{lineHeight: "24px",}}>
          <p>프리미엄급 원재료와 최고의 기술력, 모던한 디자인의 World Class 제품을 보다 많은 고객들께</p>
          <p>서비스하여 한정적으로 소비되어 지던 트렌드화된 하나의 Promotion Food인 케익을 새로운 "식문화"의 개념으로</p>
          <p>승화시켜 대한민국 디저트문화의 대표 아이템으로 선도해 나가고 있습니다.</p>
        </div>
        <div className='row'>
          <div style={{margin: "50px auto", width: "1000px", height: "320px"}}>
            <img alt='' src='img/Company/company-mark01.png' style={{width: "320px", height: "320px",float: "left"}}/>
            <img alt='' src='img/Company/company-mark02.png' style={{width: "320px", height: "320px",margin: "0 auto"}}/>
            <img alt='' src='img/Company/company-mark03.png' style={{width: "320px", height: "320px",float: "right"}}/>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row' style={{height: "150px", paddingTop: "50px"}}>
          <img alt='' src='img/Company/business_strategy.jpg' style={{height:"50px", width:"400px", margin: "0 auto"}}/>
        </div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
      </div>

    </div>
  );
};

export default Company;