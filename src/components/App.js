import React, {Component} from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import List from "./List.js";
import Top from "./Top";
import Main from "./Main";



class App extends Component {
  render(){

    return (
      <div>
        <Header list="3 terbaik"/>
        <Top />
        <Main />
        <List />
        <Footer name="Makanan Nusantara" tahun="2020"/>
      </div>
    );
  }
}

export default App;
