import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { ActivatedRoute } from '@angular/router';
import { faUser,faHotdog, faMoneyBillAlt, faBookmark, faGenderless } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-producto-card',
  templateUrl: './producto-card.component.html',
  styleUrls: ['./producto-card.component.css']
})
export class ProductoCardComponent implements OnInit {

  faUser=faUser;
  faHotdog = faHotdog;
  faMoneyBillAlt = faMoneyBillAlt;
  faBookmark = faBookmark;
  faGenderless = faGenderless;

  producto : Producto;

  constructor(private productoService : ProductoService,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.productoService.retrieve(params['id']).subscribe(
            result => this.producto = result
          )
        }
    });
  }

}
