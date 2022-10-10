import { Component, OnInit } from '@angular/core';
import { Destination } from './destination';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  homeTitle: string;
  imgPath: string;
  destArr: Destination[];


  constructor() { 
    this.homeTitle = "Travel Destination";
    this.imgPath = "./assets/img/";
    this.destArr = [
      new Destination(0, "Pyramid", 200, "Kairo", 3, this.imgPath + "kairo.jpg"),
      new Destination(0, "Big Ben", 200, "London", 3,this.imgPath + "london.jpg"),
      new Destination(0, "Louvree", 200, "Paris", 3, this.imgPath + "paris.jpg"),
      new Destination(0, "Kolosseum", 200, "Kairo", 3, this.imgPath + "rom.jpg"),
      new Destination(0, "Skyline", 200, "Shanghai", 3, this.imgPath + "shanghai.jpg"),
      new Destination(0, "Stephansdom", 200, "Vienna", 3, this.imgPath + "vienna.jpg")
    ]
  }

  ngOnInit(): void {
  }

}
