import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { OnboardingPage } from 'src/app/pages/onboarding/onboarding.page';

import { SearchIconComponent } from './search-icon.component';

describe('SearchIconComponent', 'OnboardingPage' , () =>   {
  let component: SearchIconComponent;
  let fixture: ComponentFixture<SearchIconComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchIconComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
