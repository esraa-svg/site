import React, { Component } from 'react';
import axios from 'axios';
import Home from './home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import NotFound from './notfound';
import Movies from './movies';
import Tv from './tv';
import Navbar from './Navbar';

class App extends Component {
  state = { 
    movies:[],
    tv:[],
   }
  getTrending = async(mediaType)=>
  {
  let {data} = await  axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=f1aca93e54807386df3f6972a5c33b50`)
this.setState({[mediaType]:data.results}); 
 
}
  componentDidMount(){
this.getTrending('movies');
this.getTrending('tv');
  }
  render() { 
    let{movies,tv}=this.state;
    return (  
      <>
      <Navbar/>
      <div className="container py-5">
        <Switch>
        <Route path="/home" render={(props)=> <Home{...props} trendingmovies={movies} trendingtv={tv}/>}/> 
        <Route path="/movies" component={Movies}/>
        <Route path="/tv" component={Tv}/>
        <Route path="/notfound" component={NotFound}/>
        <Redirect from="/"  exact to="/home"/>
        <Redirect to ="/notfound"/>
        </Switch>
      
      </div>
    
      
      </>
      
    );
  }
}
 
export default App;