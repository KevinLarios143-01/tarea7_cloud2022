import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menusito',
  templateUrl: './menusito.component.html',
  styleUrls: ['./menusito.component.scss']
})
export class MenusitoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navegar(ruta: string){
    this.router.navigateByUrl('/' + ruta);
  }

}
