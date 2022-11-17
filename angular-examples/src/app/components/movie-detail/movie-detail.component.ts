import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import Movie from '../../models/movie';
import { MoviesService } from './../../services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html'
})
export class MovieDetailComponent implements OnInit {

  movie!: Movie;

  constructor(
    private readonly moviesService: MoviesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'] ?? '1';
      this.movie = this.moviesService.getMovieById(id);
    });
  }

}
