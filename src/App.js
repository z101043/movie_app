import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Matrix",
  "oldboy",
  "star wars"

]

const movieImages = [
  "https://www.publicdomainpictures.net/pictures/160000/velka/matrix-1460603554sdB.jpg",
  "https://thumb7.shutterstock.com/thumb_large/3160826/550182499/stock-photo-abstract-polygonal-space-low-poly-dark-background-with-connecting-dots-and-lines-connection-550182499.jpg",
  "https://thumb1.shutterstock.com/thumb_large/166048158/549690838/stock-vector-cyberspace-with-blue-falling-numbers-abstract-background-549690838.jpg",
  "https://thumb1.shutterstock.com/thumb_large/381151/378418264/stock-photo-abstract-digital-science-fiction-matrix-like-background-378418264.jpg"
]

const movies = [
  {
    title:"matrix",
    poster:"https://www.publicdomainpictures.net/pictures/160000/velka/matrix-1460603554sdB.jpg"
  },
  {

    title:"matrix2",
    poster:"https://www.publicdomainpictures.net/pictures/160000/velka/matrix-1460603554sdB.jpg"
  },
  {
    title:"transport",
    poster:"https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/mNj/image/TtiT1zcGClkX-VtBlZ74DaRloQQ"
  }
]

class App extends Component {

  componentWillMount(){
    console.log("componentWillMount");
  }

   _makMovies =() =>{

  }

  componentDidMount(){


    setTimeout(() =>{
        //this.setState({greeting:"hello again!"})
        this.setState(


        )
    },5000)


    this._getMovies();
  }

  state= { }

  _getMovies = async () =>{
    const movies = await this._callApi()

    this.setState({
        movies
      }
    )
  }

  _callApi = () =>{
    return fetch("http://localhost:3000/movies.json")
    //..fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then( potato => potato.json() )
    .then(json => json.data.movies)
    .catch(err=>console.log(err))
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      console.log("csm ",movie)
    return <Movie title={movie.title} 
        poster={movie.large_cover_image} 
        key={movie.id} 
        genres={movie.genres} 
        synopsis={movie.synopsis}
        />
    })

    return movies
  }

  render() {
    console.log("render ");
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
