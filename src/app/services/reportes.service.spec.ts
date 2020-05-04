import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { ReportesService } from './reportes.service';

describe('ReportesService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  });
  /*
  it('should return the reporte más vendido', (id) => {
    const service: ReportesService = TestBed.get(ReportesService);
    let exampleUser = {};
    let email = localStorage.getItem('correo')
    let valor : string = id;
    service.getReporteTopProductoMasVendido(valor).then(res => {
      res;
      console.log(res);
    });
    const req = httpMock.expectOne(`https://endamo-api.herokuapp.com/reporteTopProductoMasVendido`);
    expect(req.request.method).toBe('GET');
    req.flush(exampleUser);
  });  */

});
