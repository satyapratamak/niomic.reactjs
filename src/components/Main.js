import React, {Component} from "react";



class Main extends Component{

  constructor(props){
    super(props);

    this.state = {
      title:"Menu Makanan",
      title2: "Menu Minuman",
      inputValue: "",
      inputKota: "",
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
      </div>
    );
  }
}

export default Main;
