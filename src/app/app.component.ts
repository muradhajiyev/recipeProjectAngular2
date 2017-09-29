import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBAneQ4e67Zf4bArmG5oupIU3_b_YTmMU0",
      authDomain: "ng-recipe-book-908e3.firebaseapp.com",
    })
  }

  onNavigate(feature: string) {
    console.log(feature);
    this.loadedFeature = feature;
  }
}
