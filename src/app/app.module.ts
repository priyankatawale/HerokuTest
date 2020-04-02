import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core/';

import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatGridListModule}from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriyankaComponent } from './priyanka/priyanka.component';
import { CrumComponent } from './crum/crum.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProductionComponent } from './production/production.component';
import { SolutionComponent } from './solution/solution.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
// import { AppRoutingModule } from './app-routing/app-routing.module';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    PriyankaComponent,
    CrumComponent,
    DashboardComponent,
    LoginComponent,
    ProductionComponent,
    SolutionComponent,
    UserRegistrationComponent,
    MaterialModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatGridListModule,
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
