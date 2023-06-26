import { Component, OnInit } from '@angular/core';
import { Editorial } from '../editorial';
import { EditorialService } from '../editorial.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editorial-lista',
  templateUrl: './editorial-lista.component.html',
  styleUrls: ['./editorial-lista.component.scss']
})
export class EditorialListaComponent implements OnInit{
  editorial: Editorial[] = [];
  displayedColumns: string[] = ['id', 'nombre'];

  constructor(
    private editorialService: EditorialService,
    private route: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
    this.editorialService.listarEditoriales()
    .subscribe((data) =>{
      this.editorial = data
    })
  }
}
