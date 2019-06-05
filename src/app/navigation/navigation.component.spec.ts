import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationComponent } from './navigation.component';
import { RouterTestingModule } from '@angular/router/testing';
import { OktaAuthService } from '@okta/okta-angular';

let OktaAuthServiceSpy: jasmine.SpyObj<OktaAuthService>;

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  const spy = jasmine.createSpyObj('OktaAuthService', ['getValue']);

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [NavigationComponent],
        imports: [RouterTestingModule],
        providers: [{ provide: OktaAuthService, use: spy }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
