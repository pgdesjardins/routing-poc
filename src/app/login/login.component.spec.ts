import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { OktaAuthService } from '@okta/okta-angular';
import { RouterTestingModule } from '@angular/router/testing';

let OktaAuthServiceSpy: jasmine.SpyObj<OktaAuthService>;

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const spy = jasmine.createSpyObj('OktaAuthService', ['getValue']);

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [LoginComponent],
        imports: [RouterTestingModule],
        providers: [{ provide: OktaAuthService, useValue: spy }]
      }).compileComponents();

      OktaAuthServiceSpy = TestBed.get(OktaAuthService);
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
