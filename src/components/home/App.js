import React, {Component} from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
//import List from "./List.js";
import CustomInput from "./CustomInput.js";
import Top from "./Top";
import Form from "./Form"
//import Main from "./Main";



class App extends Component {
  render(){

    return (
      <div>
        <Header list="3 terbaik"/>
        <Top />
        <CustomInput />

        {
          // <Form />
          // <Main menuMakanan={
          // [
          //   {
          //     nama: "Sate Ayam",
          //     harga: 10000,
          //   },
          //   {
          //     nama: "Sate Kambing",
          //     harga: 15000,
          //   },
          //   {
          //     nama: "Sop Konro",
          //     harga: 20000,
          //   },
          //   {
          //     nama: "Iga Bakar",
          //     harga: 25000,
          //   },
          // ]
          //
          // }/>

          // <List />
        }
        <Footer name="Makanan Nusantara" tahun="2020"/>
      </div>
    );
  }
}

export default App;
