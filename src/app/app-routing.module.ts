import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { ContentComponent } from './content/content.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShellComponent } from './shell/shell.component';
import { LoginComponent } from './login/login.component';
import { OnboardingComponent } from './onboarding/onboarding.component';

const routes: Routes = [
  { path: '', redirectTo: '/clients', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'onboarding', component: OnboardingComponent },
  {
    path: 'clients',
    component: ShellComponent,
    children: [
      {
        path: '',
        component: ClientsComponent
      }
    ]
  },
  {
    path: 'content',
    component: ShellComponent,
    children: [
      {
        path: '',
        component: ContentComponent
      }
    ]
  },
  {
    path: 'calculator',
    component: ShellComponent,
    children: [
      {
        path: '',
        component: CalculatorComponent
      }
    ]
  },
  {
    path: 'profile',
    component: ShellComponent,
    children: [
      {
        path: '',
        component: ProfileComponent
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
