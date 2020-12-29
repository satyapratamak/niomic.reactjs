import React, {Component} from "react";
import menuMakananFood from "./lib/Food";


const menuMakanan = [
  {
    nama: "Opor",
    harga: 10000,
  },
  {
    nama: "Coto Makassar",
    harga: 15000,
  },
  {
    nama: "Rendang",
    harga: 20000,
  },
  {
    nama: "Gulai Kakap",
    harga: 25000,
  },
];



class Main extends Component{

  constructor(props){
    super(props);

    this.state = {
      title:"Menu Makanan",
      title2: "Menu Minuman",
      inputValue: "",
      inputKota: "",
      menuMakanan: [
        {
          nama: "Mie Ayam",
          harga: 10000,
        },
        {
          nama: "Bakso",
          harga: 15000,
        },
        {
          nama: "Mie Ayam Bakso",
          harga: 20000,
        },
        {
          nama: "Soto",
          harga: 25000,
        },
      ],
    }

    this.ubahData = this.ubahData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /*ubahData(){
    this.setState({title:"Pilih Menu"})
  }*/

  ubahData(){
    this.setState( (state, props) => {
      return {
        title: state.title2,
        title2: state.title
      };

    });

  }

  handleChange(value, e){
    //this.setState({[value]:e.target.value});

    this.setState((state, props) => {

      return {
        [value] : e.target.value
      }
    })

    /**/
    console.log(e.target.value);
  }

  render(){

    return (

      <div>
        <h3> {this.state.title} </h3>
        <h2> {this.state.title2} </h2>
        <button onClick={this.ubahData}> UBAH DATA </button>
        <br/>
          <br/>
        <input
            type="text"
            value={this.state.inputValue}
            onChange={e=>this.handleChange("inputValue", e)}
            placeholder="Nama"/>
        <input
            type="text"
            value={this.state.inputKota}
            onChange={e=>this.handleChange("inputKota", e)}
            placeholder="Kota"/>

        {
          this.state.menuMakanan.map( (value, index) => {
            return(
              <div key={index}>
                <p> No : {index+1} </p>
                <p> Menu Makanan : {value.nama} </p>
                <p> Harga : {value.harga} </p>
              </div>
            );
          })
        }

        {
          this.props.menuMakanan.map( (value, index) => {
            return(
              <div key={index}>
                <p> No : {index+1} </p>
                <p> Menu Makanan : {value.nama} </p>
                <p> Harga : {value.harga} </p>
              </div>
            );
          })
        }

        {
          menuMakanan.map( (value, index) => {
            return(
              <div key={index}>
                <p> No : {index+1} </p>
                <p> Menu Makanan : {value.nama} </p>
                <p> Harga : {value.harga} </p>
              </div>
            );
          })
        }

        {
          menuMakananFood.map( (value, index) => {
            return(
              <div key={index}>
                <p> No : {index+1} </p>
                <p> Menu Makanan : {value.nama} </p>
                <p> Harga : {value.harga} </p>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Main;
