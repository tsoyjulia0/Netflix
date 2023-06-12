import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private client: HttpClient) { }

  BASE_URL= "https://api.themoviedb.org/3";
  KEY = "08cc33bd5ae3a747598ce2ad84376e66";

  bannerApiData(): Observable<any>{
    return this.client.get(`${this.BASE_URL}/trending/all/week?api_key=${this.KEY}`)
  }

  trendingMovieApiData(): Observable<any> {
    return this.client.get(`${this.BASE_URL}/trending/movie/day?api_key=${this.KEY}`);
  }


  getSearchMovie(data: any): Observable<any> {
    console.log(data, 'movie#');
    return this.client.get(`${this.BASE_URL}/search/movie?api_key=${this.KEY}&query=${data.movieName}`);
  }

  getMovieDetails(data: any): Observable<any> {
    return this.client.get(`${this.BASE_URL}/movie/${data}?api_key=${this.KEY}`)
  }

  getMovieVideo(data: any): Observable<any> {
    return this.client.get(`${this.BASE_URL}/movie/${data}/videos?api_key=${this.KEY}`)
  }

  getMovieCast(data: any): Observable<any> {
    return this.client.get(`${this.BASE_URL}/movie/${data}/credits?api_key=${this.KEY}`)
  }


  getAdventureMovies(): Observable<any> {
    return this.client.get(`${this.BASE_URL}/discover/movie?api_key=${this.KEY}&with_genres=12`);
  }


  getAnimationMovies(): Observable<any> {
    return this.client.get(`${this.BASE_URL}/discover/movie?api_key=${this.KEY}&with_genres=16`);
  }


  getComedyMovies(): Observable<any> {
    return this.client.get(`${this.BASE_URL}/discover/movie?api_key=${this.KEY}&with_genres=35`);
  }


  getDocumentaryMovies(): Observable<any> {
    return this.client.get(`${this.BASE_URL}/discover/movie?api_key=${this.KEY}&with_genres=99`);
  }


  getScienceFictionMovies(): Observable<any> {
    return this.client.get(`${this.BASE_URL}/discover/movie?api_key=${this.KEY}&with_genres=878`);
  }

  getThrillerMovies(): Observable<any> {
    return this.client.get(`${this.BASE_URL}/discover/movie?api_key=${this.KEY}&with_genres=53`);
  }
}
