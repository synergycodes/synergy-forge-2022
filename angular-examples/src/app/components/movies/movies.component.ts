import { Component, OnInit } from '@angular/core';
import Movie from '../../models/movie';
import { MoviesService } from './../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit {

  movies: Array<Movie> = [];

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.movies = this.moviesService.getMovies();
  }

}
