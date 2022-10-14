import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  form: FormGroup; 
  constructor(private fb: FormBuilder, private backend: BackendService, private router: Router, private share: DataSharingService) { 
    this.form = this.fb.group({
      nombre: [''],
      usuario: [''],
      password: [''],
      fecha_nac: [''],
      sexo: ['']


    });
  }
  ngOnInit(): void {
  }
  grabar(){
    this.backend.insertaUsuarios(this.form.controls['nombre'].value, this.form.controls['usuario'].value, this.form.controls['password'].value, this.form.controls['fecha_nac'].value, this.form.controls['sexo'].value).subscribe(x => { 
      this.irA('login');
      alert(x.message);
    });
  }

  irA(ruta: string){
    this.router.navigateByUrl('/' + ruta);
  }

}
