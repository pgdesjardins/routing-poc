import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import * as OktaSignIn from '@okta/okta-signin-widget';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  signIn: OktaAuthService;
  widget = new OktaSignIn({
    // todo: extract to config
    baseUrl: 'https://dev-171804.okta.com'
  });

  constructor(oktaAuth: OktaAuthService, router: Router) {
    this.signIn = oktaAuth;
  }

  ngOnDestroy() {
    this.widget.remove();
  }

  ngOnInit() {
    this.widget.renderEl(
      {
        el: '#okta-signin-container'
      },
      res => {
        if (res.status === 'SUCCESS') {
          this.signIn.loginRedirect('/', { sessionToken: res.session.token });
          // Hide the widget
          this.widget.hide();
        }
      },
      err => {
        throw err;
      }
    );
  }
}
