import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      name: 'Home',
      url: 'menu2/menu/lista_productos'
    },
    {
      name: 'Promociones',
      url: 'promo'
    },
    {
      name: 'Reportes',
      url: 'report'
    },
    {
      name: 'Edit profile',
      url: 'menu2/menu/edit-enterprise'
    },
    {
      name: 'logout',
      url: 'logout'
    }
  ]

  selectedPath = ''

  constructor(private router: Router, private menu: MenuController) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    }) 
   }

  ngOnInit() {

  }

  changePage(page){
    if(page === 'logout'){
      localStorage.clear();
      this.router.navigate([`registro/2`]);
    }else if(page === 'Reportes'){
      this.router.navigate([`report`]);
    }else if(page === 'Promociones'){
      this.router.navigate([`promo`]);
    }else{
      this.router.navigate([page]);
    }
    
  }

}
