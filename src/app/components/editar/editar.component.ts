import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Comic } from 'src/app/models/Comic';
import { BackendService } from 'src/app/services/backend.service';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  form: FormGroup; 
  comicsActual: Comic;
  usuarin: string="";
  usuarinvari: string="";
  constructor(private fb: FormBuilder, private backend: BackendService, private router: Router, private data: DataSharingService) { 
    this.comicsActual = new Comic(0,"","","","","");
    this.form =  this.fb.group({
      nombre: [''],
      yimpress: [''],
      sinopsis: [''],
      editorial: ['']

    });
    this.data.currentComics.subscribe(x => {
      this.form = this.fb.group({
        nombre: [x.nombre],
        yimpress: [x.yimpress],
        sinopsis: [x.sinopsis],
        editorial: [x.editorial]
  
      });
      this.usuarinvari=x.usuario;
      this.comicsActual = x;
    });
  }

  navegar(ruta: string){
    this.router.navigateByUrl('/' + ruta);
  }

  ngOnInit(): void {
    this.data.currentLogin.subscribe(x => this.usuarin = x);
  }

  editar(){
    let comics: Comic = new Comic(this.comicsActual.id, this.form.controls['nombre'].value, this.form.controls['yimpress'].value, this.form.controls['sinopsis'].value, this.form.controls['editorial'].value, this.usuarinvari);
    this.backend.editarComics(comics).subscribe(x => {
      this.navegar('consulta');
      alert(x.message);
    });
  }

}
