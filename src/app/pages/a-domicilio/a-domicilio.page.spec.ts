import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ADomicilioPage } from './a-domicilio.page';

describe('ADomicilioPage', () => {
  let component: ADomicilioPage;
  let fixture: ComponentFixture<ADomicilioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ADomicilioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ADomicilioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
