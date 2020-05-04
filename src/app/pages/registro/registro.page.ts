import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  id = null;

  @ViewChild('slidePrincipal', { static: true }) slides: IonSlides;

  avatars = [
    {
      img: '/assets/avatars/av-1.png',
      seleccionado: true
    },
    {
      img: '/assets/avatars/av-2.png',
      seleccionado: false
    },
    {
      img: '/assets/avatars/av-3.png',
      seleccionado: false
    },
    {
      img: '/assets/avatars/av-4.png',
      seleccionado: false
    },
    {
      img: '/assets/avatars/av-5.png',
      seleccionado: false
    },
    {
      img: '/assets/avatars/av-6.png',
      seleccionado: false
    },
    {
      img: '/assets/avatars/av-7.png',
      seleccionado: false
    },
    {
      img: '/assets/avatars/av-8.png',
      seleccionado: false
    },
  ];

  avatarSlide = {
    slidesPerView: 3.5
  }

  isUserSlide = false;
  textButton = 'Registrar Empresa';

  loginUser = {
    email: '',
    password: ''
  }

  registerUser = {
    nombre: '',
    email: '',
    username: '',
    password: '',
    avatar: '/assets/avatars/av-1.png'
  }

  registerEmpresa = {
    username: '',
    email: '',
    password: ''
  }

  constructor(private activeRoute: ActivatedRoute,
    private service: ServiceService,
    public toastController: ToastController,
    private route: Router) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.slides.slideTo(this.id);
    this.slides.lockSwipes(true);
  }

  /*Métodos de navegación*/
  seleccionarAvatar(avatar) {
    this.avatars.forEach(av => av.seleccionado = false);
    avatar.seleccionado = true;
    this.registerUser.avatar = avatar.img;
  }

  mostrarLogin() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(2);
    this.slides.lockSwipes(true);
  }

  mostrarRegistro() {
    this.slides.lockSwipes(false);

    if (this.isUserSlide) {
      this.slides.slideTo(0);
      this.textButton = 'Registrar Empresa';
    }
    else {
      this.slides.slideTo(1);
      this.textButton = 'Registrar Usuario';
    }

    this.isUserSlide = !this.isUserSlide;
    this.slides.lockSwipes(true);
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      color: 'danger',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  /*Métodos para consumir servicios e interactuar*/
  async registrar_usuario(fRegistroUsuario: NgForm) {
    if (fRegistroUsuario.invalid)
      this.presentToast('Los datos de registro son invalidos');
    else {
      console.log('a3');
      if (this.service.verificarRegistroUsuario(this.registerUser)) {
        const valido = await this.service.registro_cliente(this.registerUser);
        if (valido)
          this.route.navigate(['/home-cliente']);
        else
          this.presentToast('El nombre de usuario no es unico');
      } else {
        this.presentToast('Los datos de registro son invalidos');
      }

    }
  }

  async registrar_empresa(fRegistroEmpresa: NgForm) {
    if (fRegistroEmpresa.invalid)
      this.presentToast('Los datos de registro son invalidos');
    else {
      if (this.service.verificarRegistroEmpresa(this.registerEmpresa)) {
        const valido = await this.service.registro_empresa(this.registerEmpresa);
        if (valido)
          this.route.navigate(['/home-empresa']);
        else
          this.presentToast('El nombre de la empresa no es unico');
      } else {
        this.presentToast('Los datos de registro son invalidos');
      }
    }
  }

  async login(fLogin: NgForm) {
    if (fLogin.invalid)
      this.presentToast('Los datos son invalidos para iniciar sesion');
    else {
      if (this.service.verificarLogin(this.loginUser)) {
        const valido = await this.service.login(this.loginUser);
        if (valido["auth"]) {
          if (valido["user"]) {
            this.loginUser.email = "";
            this.loginUser.password = "";
            localStorage.setItem('nombre', valido['nombre']);
            this.route.navigate(['/home-cliente']);
          } else
            this.route.navigate(['/menu2']);
        }
        else
          this.presentToast('El usuario o contrasena son incorrectos');
      } else {
        this.presentToast('Los datos son invalidos para iniciar sesion');
      }
    }
  }

}
