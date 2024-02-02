import React, { useState } from 'react';
import MainProduct from './MainProduct';
import mainData from './../db/Main1';
import { Button } from 'react-bootstrap';
import axios from 'axios';


const MainProductList = () => {
  let style1 = {
    marginTop: "50px",
    width: "1200px",
    height: "auto", 
    margin: " 0 auto",
  }
  
  let [count,setCount] = useState(1);
  let [bread,setBread] = useState(mainData);

  return (
    <div style={style1}>
      <div className='contaner'>
        <div className='row'>
          {bread.map((ele,i) => {
            return <MainProduct bread={bread[i]} i={i} key={bread[i].id}/>
          })}
        </div>
        <div style={{textAlign: "center"}}>
          <Button
            variant='outline-success'
            style={{margin: " 20px 0"}}
            count={count}
            onClick={() => {
              if(count == 1){
                axios
                  .get ("https://JongHoonKim1004.github.io/FirstReactData/Main2.json")
                  .then((result) => {
                    let copy2 = [...bread,...result.data];
                    setBread(copy2);
                    setCount(count + 1);
                    console.log(result);
                    console.log(bread);
                  })
              }
              else if(count == 2){
                axios
                  .get ("https://JongHoonKim1004.github.io/FirstReactData/Main3.json")
                  .then((result) => {
                    let copy3 = [...bread,...result.data];
                    setBread(copy3);
                    setCount(count + 1);
                    console.log(result);
                    console.log(bread);
                  })
              }
              else if(count == 3){
                axios
                  .get ("https://JongHoonKim1004.github.io/FirstReactData/Main4.json")
                  .then((result) => {
                    let copy4 = [...bread,...result.data];
                    setBread(copy4);
                    setCount(count + 1);
                    console.log(result);
                    console.log(bread);
                  })
              }
              else {
                alert("마지막 상품입니다.");
              }
            }}
          >상품 더 보기</Button>
        </div>
      </div>
    </div>
  );
};

export default MainProductList;