import React from "react"
import img4 from "D://Projects/React/website1/website1/src/img/img4.jpg"
import Image from 'react-bootstrap/Image'
import img3 from "D://Projects/React/website1/website1/src/img/img3.webp"
import "./HomeImg.css"
import Home from "./Home"

const HomeImg = () =>
{
    return(
        <>
            {/* <Image src={img4} fluid></Image> */}
            <div className="image">

      {/* <img src={img4} alt="" /> */}
      <Image height="20em" src={img4} fluid></Image>
      
      <h2>Personal portfolio<br />SSG Online</h2>
      

</div>
        </>
    )
}

export default HomeImg;