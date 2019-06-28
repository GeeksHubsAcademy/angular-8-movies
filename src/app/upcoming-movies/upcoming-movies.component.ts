import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.scss']
})
export class UpcomingMoviesComponent implements OnInit {
  movies: Object[];
  constructor(private moviesService: MoviesService) { }//aquí inyecto el servicio moviesService al componente upcoming-movies

  ngOnInit() {
    this.moviesService.getUpcomingMovies().subscribe(res => this.movies=res.results,error=>console.log(error))
  }

}
