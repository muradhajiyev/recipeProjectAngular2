import { Recipe } from "./recipes/recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "./shared/ingredient.model";
import { ShoppingListService } from "./shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is simply a test',
            'http://images.media-allrecipes.com/images/75131.jpg',
            [
                new Ingredient('Meat',1),
                new Ingredient('French Fries', 20)
            ]
    ),
        new Recipe('A Test Recipe',
         'This is simply a test',
         'http://images.media-allrecipes.com/images/75131.jpg',
         [
            new Ingredient('Buns',2),
            new Ingredient('Meat',1)
        ])
      ];

      constructor(private slService: ShoppingListService) {
          
      }

      getRecipes () {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
            this.slService.addIngredients(ingredients);
      }
      
}