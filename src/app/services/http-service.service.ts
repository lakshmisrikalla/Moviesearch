import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }


  getTrendingMoviesList(){
    let url:any = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
    return this.http.get<any>(url);
  }

  getSearchedKeywordList(keyword:any){
    let url:any = 'https://api.themoviedb.org/3/search/keyword?query='+keyword+'&page=1';
    return this.http.get<any>(url);
  }
  
  getSearchedMoviesList(movieName:any){
    let url:any = 'https://api.themoviedb.org/3/search/movie?query='+movieName+'&include_adult=false&language=en-US&page=1';
    return this.http.get<any>(url);
  }

  getMovieDetailsById(id:any){
    let url:any = 'https://api.themoviedb.org/3/movie/'+id+'?language=en-US';
    return this.http.get<any>(url);
  }



}
