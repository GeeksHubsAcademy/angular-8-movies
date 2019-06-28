import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service' //importo el servicio de movies
@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {
private movies:Object[]; //creamos una array de objetos de movies donde guardaremos las movies y utilizaremos en el html para pintarlos.
  constructor( private moviesService:MoviesService) { } //inyecto el servicio como dependencia del componente Popular Movies

  ngOnInit ():void {//es el equivalente a ComponentDidMount
    this.moviesService.getPopularMovies().subscribe(value=>this.movies=value.results,error=>console.log(error));
  }
}
