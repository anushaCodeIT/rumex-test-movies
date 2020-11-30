import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TrendingsService {
  private apiUrl = environment.API_URL;
  private apiKey = environment.API_KEY;
  constructor(private http: HttpClient) {}

  getTodayTrendings(type: any) {
    return this.http.get(
      `${this.apiUrl}trending/${type}/day?api_key=${this.apiKey}`
    );
  }

  getTrendings(type: any) {
    return this.http.get(
      `${this.apiUrl}trending/${type}/week?api_key=${this.apiKey}`
    );
  }

  getTrendingsByPage(pageNumber: number, type: any) {
    return this.http.get(
      `${this.apiUrl}trending/${type}/week?api_key=${this.apiKey}&page=${pageNumber}`
    );
  }

  getTrendingsByPageGenre(pageNumber: number, type: any, genreId: any) {
    return this.http.get(
      `${this.apiUrl}discover/${type}?api_key=${this.apiKey}&with_genres=${genreId}&page=${pageNumber}`
    );
  }

  getCategories(type: any) {
    return this.http.get(
      `${this.apiUrl}genre/${type}/list?api_key=${this.apiKey}`
    );
  }

  getContentbyGenres(type: any, genreId: any) {
    return this.http.get(
      `${this.apiUrl}discover/${type}?api_key=${this.apiKey}&with_genres=${genreId}`
    );
  }
}
