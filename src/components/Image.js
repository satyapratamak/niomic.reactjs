import React, {Component} from "react";


class Image extends Component{

  render(){
    return(
      <img
        src={this.props.linkgambar}
        alt="gambar-makanan"
        width={this.props.width}
      />
    );
  }
}

export default Image;
