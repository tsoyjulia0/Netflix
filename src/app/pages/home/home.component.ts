import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private service: MovieApiServiceService,private title:Title,private meta:Meta) {
    this.title.setTitle('Home - Netflix');
    this.meta.updateTag({name:'description',content:'watch online movies'});

  }

  bannerResult: any = [];
  trendingMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  sciencefictionMovieResult: any = [];
  thrillerMovieResult: any = [];

  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
    });
  }


  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.adventureMovie();
    this.comedyMovie();
    this.animationMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
  }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) =>{
      console.log(result, 'trendingresult#');
      this.trendingMovieResult = result.results;
    });
  }


 adventureMovie() {
   this.service.getAdventureMovies().subscribe((result) => {
     this.adventureMovieResult = result.results;
   });
  }

  documentaryMovie() {
    this.service.getDocumentaryMovies().subscribe((result) => {
      this.documentaryMovieResult = result.results;
    });
  }

  comedyMovie() {
    this.service.getComedyMovies().subscribe((result) => {
      this.comedyMovieResult = result.results;
    });
  }

 animationMovie() {
   this.service.getAnimationMovies().subscribe((result) => {
     this.animationMovieResult = result.results;
   });
  }

  sciencefictionMovie() {
    this.service.getScienceFictionMovies().subscribe((result) => {
      this.sciencefictionMovieResult = result.results;
    });
  }

  thrillerMovie() {
    this.service.getThrillerMovies().subscribe((result) => {
      this.thrillerMovieResult = result.results;
    });
  }
}
