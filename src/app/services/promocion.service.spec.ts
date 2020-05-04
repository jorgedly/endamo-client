import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { PromocionService } from './promocion.service';

describe('PromocionService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  });
  
  it('should return the promocion', () => {
    const service: PromocionService = TestBed.get(PromocionService);
    let exampleUser = {};
    let email = localStorage.getItem('correo')
    service.getPromocion().subscribe(res => {
      res;
      console.log(res);
    });
    const req = httpMock.expectOne(`https://endamo-api.herokuapp.com/empresa/edit/${email}`);
    expect(req.request.method).toBe('GET');
    req.flush(exampleUser);
  });  

});
