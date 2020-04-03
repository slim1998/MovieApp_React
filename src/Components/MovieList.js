import React, { Component } from 'react'
import {movies} from './Data';
import StarsR from './StarsRating'
import Search from './Search'
import Modals from "./Modals";


 class MovieList extends Component {
    state={
    movies,
    search:'',
    index: 0 ,  
    stars:""
  }

 setRate = (ratestar)=>this.setState({index : ratestar })

  searchWords=(word)=>{

  this.setState({
    
    search:word.target.value,
    
  })  }
  //ajoutfilm

  addmovie=(imgurl,name,rate)=>{
    this.setState({
      movies:this.state.movies.concat({title:name,img:imgurl, rating:rate})
    })
  }
 






 
  








    render() {
    

      const listsearch =this.state.movies.filter(el =>(el.title.toUpperCase().includes(this.state.search.toUpperCase()))).filter(el=>el.rating>=this.state.index);
    
  
        return (
          <>
    
      <Search searchWord={this.searchWords} rate={this.state.index} setRate={this.setRate} />
      { listsearch.map((ele,i)=> (
            <div key = {i} className="container">
                <img className="Movi-img" src={ele.img}/>
                <p className="titles">{ele.title}</p>
                <p><StarsR count={ele.rating} /></p>
              


            </div>
           
            ))
      }
      
      <Modals addmovie={this.addmovie}/>
      
       </>      
        )
        
    }
}




export default MovieList