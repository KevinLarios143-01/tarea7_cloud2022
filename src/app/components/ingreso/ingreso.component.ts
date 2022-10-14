import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.scss']
})
export class IngresoComponent implements OnInit {

  form: FormGroup; 
  usuarin: string="";
  constructor(private fb: FormBuilder, private backend: BackendService, private router: Router, private share: DataSharingService) { 
    this.form = this.fb.group({
      nombre: [''],
      yimpress: [''],
      sinopsis: [''],
      editorial: ['']

    });
  }
  ngOnInit(): void {
    this.share.currentLogin.subscribe(x => this.usuarin = x);
  }
  navegar(ruta: string){
    this.router.navigateByUrl('/' + ruta);
  }
  grabar(){
    this.backend.insertaComics(this.form.controls['nombre'].value, this.form.controls['yimpress'].value, this.form.controls['sinopsis'].value, this.form.controls['editorial'].value, this.usuarin).subscribe(x => {
      this.navegar('consulta');
      alert(x.message);
    });
  }
}
