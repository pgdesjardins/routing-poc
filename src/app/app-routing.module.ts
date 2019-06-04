import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { ContentComponent } from './content/content.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShellComponent } from './layout/shell.component';
import { LoginComponent } from './login/login.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import {
  OktaAuthModule,
  OktaCallbackComponent,
  OktaAuthGuard
} from '@okta/okta-angular';

// todo: extract to config
const config = {
  issuer: 'https://dev-171804.okta.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oaog5qi3qjESmUrk356'
};

export function onAuthRequired({ oktaAuth, router }) {
  // Redirect the user to your custom login page
  router.navigate(['/login']);
}

const routes: Routes = [
  { path: '', redirectTo: '/clients', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  },
  { path: 'onboarding', component: OnboardingComponent },
  {
    path: 'clients',
    canActivate: [OktaAuthGuard],
    data: {
      onAuthRequired
    },
    component: ShellComponent,
    children: [
      {
        path: '',
        component: ClientsComponent
      },
      {
        path: ':id',
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
    canActivate: [OktaAuthGuard],
    data: {
      onAuthRequired
    },
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
    canActivate: [OktaAuthGuard],
    data: {
      onAuthRequired
    },
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
  imports: [RouterModule.forRoot(routes), OktaAuthModule.initAuth(config)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
