import React, {Component} from "react";
import Image from "./Image.js";


class List extends Component{
  render(){
    return (

      <ol>
        <Image linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg" width="500"/>
        <li> Nasi Padang </li>
        <Image linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" width="475"/>

        <li> Sate Ayam </li>
        <Image linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" width="450"/>

        <li> Soto Lamongan </li>
        <Image linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" width="400"/>
      </ol>
    );
  }
}

export default List;
