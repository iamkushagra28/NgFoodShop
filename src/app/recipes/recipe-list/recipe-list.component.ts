import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subsribtion: Subscription;
  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subsribtion = this.recipeService.recipesChanged
    .subscribe((recipes : Recipe[]) =>
    {
      this.recipes = recipes;
    }
    );
    this.recipes = this.recipeService.getRecipes();

  }
  ngOnDestroy() {
    this.subsribtion.unsubscribe();
  }
  onNewRecipe()
  {
    this.router.navigate(['new'], {relativeTo: this.route});
  }


}
