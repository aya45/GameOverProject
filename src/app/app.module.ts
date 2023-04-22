import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import{BrowserAnimationsModule}from'@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AllComponent } from './all/all.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { SortComponent } from './sort/sort.component';
import { CategoriesComponent } from './categories/categories.component';
import { GamesdetialesComponent } from './gamesdetiales/gamesdetiales.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    NotfoundComponent,
    RegisterComponent,
    AllComponent,
    PlatformsComponent,
    SortComponent,
    CategoriesComponent,
    GamesdetialesComponent


   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
