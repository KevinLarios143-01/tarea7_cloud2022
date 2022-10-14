import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comic } from 'src/app/models/Comic';
import { BackendService } from 'src/app/services/backend.service';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  comics: Comic[];
  usuarin: string="";
  
  constructor(private backend: BackendService, private router: Router, private data: DataSharingService) {
    this.comics = [];
   }

  ngOnInit(): void {
    this.data.currentLogin.subscribe(x => this.usuarin = x);
    this.backend.getComics().subscribe(x => {
      this.comics = x.comics;
    });
  }

  navegar(ruta: string){
    this.router.navigateByUrl('/' + ruta);
  }

  editar(comics: Comic){
    this.data.setComics(comics);
    this.router.navigateByUrl('/editar');
  }

  borrar(comics: Comic){
    this.backend.borrarComics(comics).subscribe(x => {
      if(x.status == 1){
        this.backend.getComics().subscribe(x => {
          this.comics = x.comics;
        });
      }
      alert(x.message);
    });
  }
}
