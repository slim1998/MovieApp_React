import React, { Component } from "react";
import {Button, Modal, FormControl} from 'react-bootstrap'

class Modals extends Component {
    state={
      newMovie:'',
      movieUrl:'',
      movierate:0,
        show:false
    }
//ajout un movieName
    movieName=(e)=>{

      this.setState({

        newMovie: e.target.value
      }); console.log(this.state.newMovie)

    }
//Movie url
moviImage=(e)=>{
  this.setState({
    movieUrl: e.target.value
  });console.log(this.state.movieUrl)
}

//movie rate

moviRate=(e)=>{
  this.setState({
    movierate: Number(e.target.value)
  })
}


savemovie=()=>{
  this.props.addmovie(this.state.movieUrl,this.state.newMovie,this.state.movierate)
 
  alert("hello") 
}

  handleShow = () =>{
    
        this.setState({
            show: !this.state.show
    })};
  render() {
    return (
      <>
        <Button variant="secondary" className="Modal-cont" onClick={this.handleShow}>
        <img className="Modal-img" src="https://cdn3.iconfinder.com/data/icons/glyph/227/Button-Add-1-512.png"/>
         
        </Button>
        <Modal className="Modal-content" show={this.state.show} onHide={this.handleShow} animation={false}>
          <Modal.Header style={{background: "#D8DEDE"}} closeButton>
            <Modal.Title style={{marginLeft: "25%"}}>Complete this input to add the movie </Modal.Title>
          </Modal.Header>

          <Modal.Body className="Modal-input" >
            
            <form >
              <label className="MN fname">The movie name:</label>
              <input className="title-input input"  placeholder=" " name='title' type='text' onChange={this.movieName}/>
              <label className="MI fname">The image of the movie</label>
              <input className="img-input input" placeholder=" " name='image' type='text' onChange={this.moviImage}/>
              <label className="MR fname" >The rate of the movie:</label>
              <input className="rating-input input" placeholder=" " name='rating' type='text'  onChange={this.moviRate}/>

              
              </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              EXIT
            </Button>
            <Button variant="primary" onClick={()=>this.savemovie()}>

              SAVE 
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default Modals