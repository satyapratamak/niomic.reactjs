import React, {Component} from "react";



class Main extends Component{

  constructor(props){
    super(props);

    this.state = {
      title:"Menu Makanan"
    }

    this.ubahData = this.ubahData.bind(this);
  }

  ubahData(){
    this.setState({title:"Pilih Menu"})
  }

  render(){
    return (

      <div>
        <h3> {this.state.title} </h3>
        <button onClick={this.ubahData}> UBAH DATA </button>
      </div>
    );
  }
}

export default Main;
