import React, {Component} from "react";



class Main extends Component{

  constructor(props){
    super(props);

    this.state = {
      title:"Menu Makanan",
      title2: "Menu Minuman",
      inputValue: "Nasi Padang Nusantara"
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

  handleChange(e){
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
            onChange={this.handleChange} />
      </div>
    );
  }
}

export default Main;
