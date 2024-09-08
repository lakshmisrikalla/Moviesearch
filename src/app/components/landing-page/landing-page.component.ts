import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SAMPLE_DATA } from 'src/app/constants/proj.cns';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  moviesList:any = [];
  keyWordList:any = [];
  enteredKey:any = "";
  displayMenu:boolean = false;

  constructor(public router:Router,public httpSrv:HttpServiceService){}

  ngOnInit(): void {
    this.makeApiCallToFetchTrendingMovieList();
  }

  makeApiCallToFetchTrendingMovieList(){
   // API Call goes over here
   this.httpSrv.getTrendingMoviesList().subscribe((data:any)=>{
    //  this.moviesList = SAMPLE_DATA.TRENDING_DATA.results;
     this.moviesList = data.results;
    //  console.log(this.moviesList,"movie");
   });
   
  }

  onChangeInp(event:any){
    // console.log(event,"event");
    if(event.length > 0){
      // API call
      this.httpSrv.getSearchedKeywordList(event).subscribe((response:any)=>{
        // this.keyWordList = SAMPLE_DATA.KEYWORD_LIST.results;
        this.keyWordList = response.results;
        // console.log(this.keyWordList,"words");
        
       this.displayMenu = true;

      });
    }else{
      this.displayMenu = false;
    }
  }

  onClickDropDownItem(value:any){

    this.enteredKey = value;
    this.displayMenu = false;

  }


  searchMovie(){
    // API call to fetch movie by entered name
     this.httpSrv.getSearchedMoviesList(this.enteredKey).subscribe((response:any)=>{
      // this.moviesList = SAMPLE_DATA.MOVIE_SEARCH.results;
      this.moviesList = response.results;
      if(!this.moviesList || this.moviesList.length == 0){
        this.redirectToResourceNotFound();
      }
     })
    // update movieslist here
    // this.moviesList = SAMPLE_DATA.MOVIE_SEARCH.results;
    // if(!this.moviesList || this.moviesList.length == 0){
    //   this.redirectToResourceNotFound();
    // }
  }


  onClickMovie(id:any){
    return this.router.navigate(['movieDetails'],{queryParams:{id:id}});
  }

  redirectToFavMovies(){
    return this.router.navigate(['favouriteMovies']);
  }

  redirectToResourceNotFound(){
    return this.router.navigate(['notFound']);
  }




}
