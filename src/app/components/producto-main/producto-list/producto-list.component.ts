import { Component, OnInit } from '@angular/core';
import { faListAlt, faEye, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  faListAlt = faListAlt;
  faEye = faEye;
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;
  productos : Producto[];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.list();
    
  }

  delete(p : Producto) : void{
    swal.fire({
      title: '¿Estas seguro que desea continuar?',
      text: "El producto: " + p.nombre + " será eliminado.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) =>{
      if(result.value){
        this.productoService.delete(p).subscribe(
          result => console.log(result)
        ) 
      }
    })
  }

  list() : void{
    this.productoService.list().subscribe(result => {
      this.productos = result;
    });
  }
}
