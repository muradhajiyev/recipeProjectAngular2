import { Recipe } from "./recipes/recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "./shared/ingredient.model";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();

    recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is simply a test',
            'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
            [
                new Ingredient('Meat',1),
                new Ingredient('French Fries', 20)
            ]
    ),
        // new Recipe('A Test Recipe',
        //  'This is simply a test',
        //  'http://images.media-allrecipes.com/images/75131.jpg',
        //  [
        //     new Ingredient('Buns',2),
        //     new Ingredient('Meat',1)
        // ])
      ];

      constructor(private slService: ShoppingListService) {
          
      }

      setRecipes(recipes: Recipe[]) {
            console.log(recipes);
            this.recipes = recipes;
            this.recipesChanged.next(this.recipes.slice());
      }

      getRecipes () {
          return this.recipes.slice();
      }

      getRecipe(index: number) {
          return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
            this.slService.addIngredients(ingredients);
      }
      
}