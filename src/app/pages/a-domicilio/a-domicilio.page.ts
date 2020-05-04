import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-domicilio',
  templateUrl: './a-domicilio.page.html',
  styleUrls: ['./a-domicilio.page.scss'],
})
export class ADomicilioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mandar(pais, depMun, dirCasa){
    console.log(pais.value, depMun.value, dirCasa.value);
  }

}
