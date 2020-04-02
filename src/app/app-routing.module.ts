// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';


// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CrumComponent } from './crum/crum.component';
import { ProductionComponent } from './production/production.component';
import { SolutionComponent } from './solution/solution.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'user-registration',component:UserRegistrationComponent},
  {path:'snav',component:DashboardComponent,
    children:[
     { path: 'crumb', component: CrumComponent },
     { path: 'production', component: ProductionComponent},
     { path: 'solution', component: SolutionComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
