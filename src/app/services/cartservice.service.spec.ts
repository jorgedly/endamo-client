import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CartserviceService } from 'src/app/services/cartservice.service';

describe('Servicio agregar Carrito', () => {

    let injector: TestBed;
    let service: CartserviceService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [CartserviceService]
        });
        injector = getTestBed();
        service = injector.get(CartserviceService);
    });

    it('validar_carrito', async function () {
        expect(service.isNotEmpty()).toBe(true);
    });

    it('validar_servicioADomicilio', async function () {
        expect(service.verificarRealizarADomicilio("Guatemala", "Guatemala", "Guatemala", "12 usac")).toBe(true);
    });

    it('validar_RealizacionDeTransacciones', async function () {
        expect(service.llenarRealizarTransaccion("7174128", "Carlos XD")).toBe(true);
    });

    it('validar_Productos', async function () {
        const data = {
            producto: 1,
            cantidad: 1
        };
        expect(service.addToCart(data)).toBe(9);
    });

    it('validar_OpcionSeleccionadoFiltrado', async function () {
        expect(service.search("precio")).toBe("precio");
    });
});

