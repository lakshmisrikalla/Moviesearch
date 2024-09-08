import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteMoviesComponent } from './components/favourite-movies/favourite-movies.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MovieOverviewComponent } from './components/movie-overview/movie-overview.component';
import { ResourceNotFoundComponent } from './components/resource-not-found/resource-not-found.component';

const routes: Routes = [{
  path:'movies',
  component:LandingPageComponent
},
{
  path:'movieDetails',
  component:MovieOverviewComponent
}, 
{
  path:'favouriteMovies',
  component:FavouriteMoviesComponent
},
{
  path:'notFound',
  component:ResourceNotFoundComponent
},
{
  path: '',
  redirectTo: 'movies',
  pathMatch: 'full',
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
