import { Component, OnInit } from '@angular/core';
import { Libro } from '../libros';
import { LibrosService } from '../libros.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-libros-lista',
  templateUrl: './libros-lista.component.html',
  styleUrls: ['./libros-lista.component.scss']
})
export class LibrosListaComponent implements OnInit{
  libros: Libro[] = [];
  displayedColumns: string[] = ['codigo', 'nombre', 'stock', 'editorial', 'precio'];

  constructor(
    private libroService: LibrosService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  
  ngOnInit(): void {
    this.libroService.listarLibros()
    .subscribe((data) =>{
      this.libros = data
    })
  }
}
