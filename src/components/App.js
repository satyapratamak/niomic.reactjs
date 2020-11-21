import React, {Component} from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import List from "./List.js";



class App extends Component {
  render(){

    return (
      <div>
        <Header list="3 terbaik"/>
        <List />
        <Footer name="Makanan Nusantara" tahun="2020"/>
      </div>
    );
  }
}

export default App;
