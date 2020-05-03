import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEnterprisePage } from './edit-enterprise.page';
import { EmpresaService } from 'src/app/services/empresa.service';
import { HttpClientModule } from '@angular/common/http';
import { of, throwError } from 'rxjs';

describe('EditEnterprisePage', () => {
  let component: EditEnterprisePage;
  let fixture: ComponentFixture<EditEnterprisePage>;

<<<<<<< HEAD
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ EditEnterprisePage ],
//       imports: [IonicModule.forRoot()]
//     }).compileComponents();
=======
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ EditEnterprisePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [EmpresaService]
    }).compileComponents();
>>>>>>> cambios

    fixture = TestBed.createComponent(EditEnterprisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

<<<<<<< HEAD
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
=======
  describe('When readData() is called', () =>  {
    it('all should be fine ', () => {
      component.readData();
      expect(component.enterprise).toBeDefined();
    });
  });

  describe('When updateData() is called', () =>  {
    
    it('all should be fine ', () => {
      spyOn(component.empresaService,'updateData').and.returnValue(of({ }));
      component.updateData();
      //expect(component.toastController);
    });

    it('should handler error', () => {
      spyOn(component.empresaService,'updateData').and.returnValue(throwError({error:'Error while updating data'}));
      component.updateData();
      //expect(component.presentToast);  
    });
    
  });
  
});
>>>>>>> cambios
