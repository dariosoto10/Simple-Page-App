import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  heroes:any[] = [];
  busqueda:string;

  constructor( private _activatedRoute:ActivatedRoute,
               private _heroesService:HeroesService,
               private _router:Router) {


   this._activatedRoute.params.subscribe( params => {
       this.heroes = this._heroesService.buscarHeroes(params['caracteres']);
       this.busqueda = params['caracteres'];
    });
   }

  ngOnInit() {
  }

}
