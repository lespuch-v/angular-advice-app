import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  apiData: any;


  getNewAdvice(){
    console.log("Button clicked!")
    this.http.get('https://api.adviceslip.com/advice').subscribe((Response) => {
      this.apiData = Response;
    });
  }

  constructor(private http: HttpClient) {
    this.getNewAdvice()
  }

  ngOnInit(): void {}
}
