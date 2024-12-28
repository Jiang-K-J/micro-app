import React from "react";
export default function Home() {
  return (
    <div className='home'>
      <h2>主应用</h2>
      <div>
        主应用的内容
        <p style={{fontSize:"large",color:"orange"}}>想学习qiankun，请加入qiankun交流群，群里全是大佬</p>
        <img src={`${process.env.PUBLIC_URL}/1735133402754.jpg`} />
      </div>
    </div>
  )
}