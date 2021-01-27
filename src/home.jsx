import React, { Component } from 'react';
class Home extends Component {
    state = {  }
    render() { 
        let{ trendingmovies,trendingtv}=this.props;
        return (
          <>
            <div className="row">
              <div className="col-md-4 py-5">
                <div className="brdr w-25 mb-3"></div>
                <h3>Trending <br/>Movies  to watch now<br/></h3>
                <p className="py-3">Most movies watched by days</p>
                <div className="brdr w-100 mt-3">
               
                </div>
              
              </div>
              {trendingmovies.slice(0,10).map((movie) => 
                <div  key={movie.id}className="col-md-2">
                  <div className="movie">
                    <img src={'https://image.tmdb.org/t/p/w500/'+movie.poster_path} className="w-100" alt="" />
                    <h4 className="py-2 h6">{movie.title}{movie.name}</h4>
                    <div className="vote position-absolute">{movie.vote_average}</div>
                  </div>
                </div>
              )}
               <div className="col-md-4 py-4">
                <div className="brdr w-25 mb-3"></div>
                <h3>Trending <br/>Movies  to watch now<br/></h3>
                <p className="py-3">Most movies watched by days</p>
                <div className="brdr w-100 mt-3">
               
                </div>
              
              </div>
              {trendingtv.slice(0,10).map((movie) => 
                <div  key={movie.id}className="col-md-2">
                  <div className="movie">
                    <img src={'https://image.tmdb.org/t/p/w500/'+movie.poster_path} className="w-100" alt="" />
                    <h4 className="py-2 h6">{movie.title}{movie.name}</h4>
                    <div className="vote position-absolute">{movie.vote_average}</div>
                  </div>
                </div>
              )}
            </div>
            
          </>

        );
    }
}
 
export default Home;
