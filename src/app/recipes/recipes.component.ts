import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [ RecipeService ]
})
export class RecipesComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {

    // const myObservable = Observable.create((observer: Observer<string>) => {
    //     setTimeout(() => {
    //       observer.next('first package');
    //     }, 2000);
    //     setTimeout(() => {
    //       observer.next('second package');
    //     }, 4000);
    //     setTimeout(() => {
    //       //observer.next('this does not work');
    //       observer.complete();
    //     }, 5000);
    //     setTimeout(() => {
    //       observer.next('third package');
    //     }, 6000);
    // });
    // myObservable.subscribe(
    //   (data: string) => { console.log(data); },
    //   (error: string) => { console.log(error); },
    //   () => { console.log('completed'); }
    

  }

}
