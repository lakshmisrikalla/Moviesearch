import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SAMPLE_DATA } from 'src/app/constants/proj.cns';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-movie-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: ['./movie-overview.component.scss']
})
export class MovieOverviewComponent implements OnInit {

  movieDetails:any;
  isFav:boolean = false;

  constructor(private route: ActivatedRoute,private httpSrv:HttpServiceService){}

  ngOnInit(): void {
   this.route.queryParams.subscribe((response:any)=>{
    this.makeApiCallToFetchMovieDetails(response.id);
   });
  }

  makeApiCallToFetchMovieDetails(id:any){
  // Make API call for fetching movie details by ID here
  this.httpSrv.getMovieDetailsById(id).subscribe((response:any)=>{

    // this.movieDetails =  SAMPLE_DATA.MOVIE_DETAILS;
   this.movieDetails =  response;
   let data:any =  localStorage.getItem('favMovies');
   if(JSON.parse(data)[this.movieDetails.id]){
     this.isFav = true;
   }else{
    this.isFav = false;
   }
   
   
  });
  //  this.movieDetails =  SAMPLE_DATA.MOVIE_DETAILS;
  //  console.log(this.movieDetails,"movie");
  //  let data:any =  localStorage.getItem('favMovies');
  //  if(JSON.parse(data)[this.movieDetails.id]){
  //    this.isFav = true;
  //  }else{
  //   this.isFav = false;
  //  }
   
  }

  addToFavourites(){
    let temp:any = localStorage.getItem('favMovies');
    let tempObj:any = {};
    tempObj[this.movieDetails.id] = this.movieDetails;
    let obj:any = JSON.parse(temp);
    let newObj:any = {...obj,...tempObj};
    localStorage.setItem('favMovies',JSON.stringify(newObj));
    this.isFav = true;
  }

  removeFromFavourites(){
    let temp:any = localStorage.getItem('favMovies');
    let obj:any = JSON.parse(temp);
    let newObj:any ={};
    let keys:any=Object.keys(obj);
    for(let i:any=0;i<keys.length;i++){
      let tempObj:any = {};
      tempObj[keys[i]] = obj[keys[i]];
      if(keys[i] != this.movieDetails.id){
        newObj = {...newObj,...tempObj};
      }
    }
    localStorage.setItem('favMovies',JSON.stringify(newObj));
    this.isFav = false;
  }



}
