import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroHeading: string =  "Travel Site";
  heroText: string  =  "Find the best travel destinations.";
  heroBtnText: string =  "Learn more";
  heroBtnUrl: string =  "https://codefactory.wien";

  constructor() { }

  ngOnInit(): void {
  }

}
