import React, {
  Component
} from "react";

class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
      daftar:"Daftar Makanan Nusantara",
      dataList: this.props.list,
      statusRendering: false,
      date : new Date(),
    }
    this.handlePesan = this.handlePesan.bind(this); // for using props and state
    this.handleElement = this.handleElement.bind(this);
  }

  handlePesan(value, e){
    e.preventDefault();
    alert(this.state.daftar);
    alert(value);
  }

  componentDidMount(){
    console.log("Jalan : componentDidMount");
  }

  handleElement(){
    this.setState( (state, props) =>{
      return {statusRendering : !state.statusRendering};
    });
  }

  render() {
    console.log("Jalan : Render");
    return(
      <div>
        {
          this.state.statusRendering === true ?(
            <div>
              <h1> Selamat Datang</h1>
              <h2> Silakan Pilih Makanan</h2>
            </div>

          ) : (
            <div>
              <h1> Selamat Tinggal</h1>
              <h2> Jangan lupa datang kembali</h2>
            </div>
          )

        }
        <button onClick={this.handleElement}> Change </button>
      </div>
    );
    // return (
    //   <div >
    //     <h2 > Makanan Khas Indonesia </h2>
    //     <p> {this.state.daftar}</p>
    //     <p> {this.state.dataList}</p>
    //     <a href="/" onClick={(e) => this.handlePesan("Pesan dari Header", e)}> Halaman Header </a>
    //
    //   </div>
    // );
  }
}

export default Header;
