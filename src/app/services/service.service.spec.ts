import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ServiceService } from './service.service';


describe('Servicio sesiones: Login', () => {

  let injector: TestBed;
  let service: ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServiceService]
    });
    injector = getTestBed();
    service = injector.get(ServiceService);
  });

  it('validar contrasena incorrecta (corta)', async function () {
    const loginData = {
      email: 'jorge@usac.com',
      password: 'abc123'
    };
    expect(service.verificarLogin(loginData)).toBe(false);
  });

  it('validar correo incorrecto (sin dominio)', async function () {
    const loginData = {
      email: 'jorge@usac',
      password: '12345678'
    };
    expect(service.verificarLogin(loginData)).toBe(false);
  });

  it('validar contrasena simple (solo tiene numeros y letras minusculas)', async function () {
    const loginData = {
      email: 'jorge@usac.com',
      password: '123abc456'
    };
    expect(service.verificarLogin(loginData)).toBe(false);
  });

  it('validar contrasena correcta (compleja)', async function () {
    const loginData = {
      email: 'jorge@usac.com',
      password: 'abCD731jabc#'
    };
    expect(service.verificarLogin(loginData)).toBe(true);
  });

});

describe('Servicio sesiones: Registro', () => {

  let injector: TestBed;
  let service: ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServiceService]
    });
    injector = getTestBed();
    service = injector.get(ServiceService);
  });

  it('validar datos incompletos (usuario no tiene nombre)', async function () {
    const signInData = {
      email: 'jorge@gmail.com',
      username: 'jorgedly',
      password: '123#45678',
      avatar: '/assets/avatars/av-1.png'
    };
    expect(service.verificarRegistroUsuario(signInData)).toBe(false);
  });

  it('validar datos maliciosos (nombre tiene palabras sql)', async function () {
    const signInData = {
      nombre: ';select * from user;',
      email: 'jorge@gmail.com',
      username: 'jorgedly',
      password: '123#45678',
      avatar: '/assets/avatars/av-1.png'
    };
    expect(service.verificarRegistroUsuario(signInData)).toBe(false);
  });

  it('validar datos incompletos (empresa no tiene email)', async function () {
    const signInData = {
      username: 'jorgedly',
      password: '123#45678'
    };
    expect(service.verificarRegistroEmpresa(signInData)).toBe(false);
  });

});

describe('Servicio sesiones: crudProductos', () => {

  let injector: TestBed;
  let service: ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServiceService]
    });
    injector = getTestBed();
    service = injector.get(ServiceService);
  });

  it('validar agregar Producto', async function () {
    expect(service.addProduct("Apple iPad (2019)",2130.28, 1).toBe(true);
  });

  it('validar modificar Producto', async function () {
    const signInData = {
      nombre: ';select * from user;',
      email: 'jorge@gmail.com',
      username: 'jorgedly',
      password: '123#45678',
      avatar: '/assets/avatars/av-1.png'
    };
    expect(service.editProduct(signInData)).toBe(true);
  });

  it('validar eliminar Producto', async function () {
    const signInData = {
      username: 'jorgedly',
      password: '123#45678'
    };
    expect(service.deleteProduct(signInData)).toBe(false);
  });

  it('validar filtrar Producto', async function () {
    const signInData = {
      username: 'jorgedly',
      password: '123#45678'
    };
    expect(service.filterProduct(signInData)).toBe(false);
  });

  it('validar ver los Producto ', async function () {
    expect(service.existProduct()).toBe(false);
  });
});
