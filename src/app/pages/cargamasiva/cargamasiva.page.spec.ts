import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargamasivaPage } from './cargamasiva.page';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Papa } from 'ngx-papaparse';

describe('CargamasivaPage', () => {
  let component: CargamasivaPage;
  let fixture: ComponentFixture<CargamasivaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CargamasivaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [ServiceService, FileChooser, FilePath, Papa]
    }).compileComponents();


    fixture = TestBed.createComponent(CargamasivaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Test for select file', () =>  {
    it('should get the uri of the file', () => {
      
    });
  });

});

