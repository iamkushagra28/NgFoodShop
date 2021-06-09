import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    // recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'Penne Pasta',
            'A super-cheesy pasta - Just Awesome',
            'https://lilluna.com/wp-content/uploads/2017/10/penne-pasta-resize-1.jpg',
            [
                new Ingredient('Pasta', 1),
                new Ingredient('Cheese', 1),
                new Ingredient('Olive', 12)
            ]),
        new Recipe(
            'Veg Burger',
            'What else you need to say?',
            'https://www.indianhealthyrecipes.com/wp-content/uploads/2016/02/veg-burger-recipe-1.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Panneer', 12)
            ])
      ];
      constructor(private slService: ShoppingListService) {}
    getRecipes() {
        return this.recipes.slice();
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
    getRecipe(index: number)
    {
        return this.recipes[index];
    }

    addRecipe(recipe : Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
    deleteRecipe(index: number)
    {
        this.recipes.splice(index,1)
        this.recipesChanged.next(this.recipes.slice());
    }
}
