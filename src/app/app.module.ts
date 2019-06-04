import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { ProfileComponent } from './profile/profile.component';
import { ContentComponent } from './content/content.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShellComponent } from './layout/shell.component';
import { LoginComponent } from './login/login.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { OpportunityListComponent } from './clients/opportunity-list/opportunity-list.component';
import { OpportunityCardComponent } from './clients/opportunity-card/opportunity-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ProfileComponent,
    ContentComponent,
    CalculatorComponent,
    NavigationComponent,
    HeaderComponent,
    PageNotFoundComponent,
    ShellComponent,
    LoginComponent,
    OnboardingComponent,
    OpportunityListComponent,
    OpportunityCardComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
