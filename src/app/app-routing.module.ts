import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { AllComponent } from './all/all.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { SortComponent } from './sort/sort.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home',  canActivate:[AuthGuard], component:HomeComponent},
  {path:'all',canActivate:[AuthGuard],component:AllComponent},
  {path:'platforms',canActivate:[AuthGuard],component:PlatformsComponent},
  {path:'sort',canActivate:[AuthGuard],component:SortComponent},
  {path:'categories',canActivate:[AuthGuard],component:CategoriesComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'**', component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
