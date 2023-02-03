import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  resultMessage: string = "";
  constructor(private http: HttpClient) {}

  testConnection(){
    this.http.get("http://localhost:5209/WeatherForecast", {responseType: 'text'})
      .subscribe(
      data => {
        this.resultMessage = data;
      }
    );
  }
}
