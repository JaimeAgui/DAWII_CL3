import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private route: ActivatedRoute,
    private router: Router){}

  irPaginaCalificaciones(): void{
    this.router.navigate(['calificaciones'], {relativeTo: this.route})
  }

  irPaginaHome(): void{
    this.router.navigate(['dashboard'], {relativeTo: this.route})
  }

}
