import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OpportunityListComponent } from './opportunity-list.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('OpportunityListComponent', () => {
  let component: OpportunityListComponent;
  let fixture: ComponentFixture<OpportunityListComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [OpportunityListComponent],
        imports: [RouterTestingModule]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
