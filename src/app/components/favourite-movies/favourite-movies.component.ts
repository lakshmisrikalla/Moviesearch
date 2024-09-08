import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourite-movies',
  templateUrl: './favourite-movies.component.html',
  styleUrls: ['./favourite-movies.component.scss']
})
export class FavouriteMoviesComponent implements OnInit {

  moviesList:any =[];

  constructor(public router:Router){}

  ngOnInit(): void {
    let data:any = localStorage.getItem('favMovies');
    this.moviesList = Object.values(JSON.parse(data));
    if(this.moviesList.length ==0 ){
      this.redirectToResourceNotFound();
    }
  }


  onClickMovie(id:any){
    return this.router.navigate(['movieDetails'],{queryParams:{id:id}});
  }

  redirectToResourceNotFound(){
    return this.router.navigate(['notFound']);
  }
}
