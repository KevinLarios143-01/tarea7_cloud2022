import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosItem } from 'src/app/models/UsuariosItem';
import { BackendService } from 'src/app/services/backend.service';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  usuarios: Array<UsuariosItem>;
  constructor(private fb: FormBuilder, private backend: BackendService, private share: DataSharingService ,private router: Router) {
    this.usuarios = [];
    this.form = new FormGroup({
      usuario: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }
  get usuario(): AbstractControl {
    return this.form.get('usuario')!;
  }

  get password(): AbstractControl {
    return this.form.get('password')!;
  }

  ngOnInit(): void {
  }
  navegar(ruta: string){
    this.router.navigateByUrl('/' + ruta);
  }

  ingresous(){
    this.backend.getUsuarios(this.form.controls['usuario'].value, this.form.controls['password'].value).subscribe(x => {
      if (typeof(Storage) !== 'undefined') {
        localStorage.setItem("token", x.key);
        this.share.changeLogin(this.form.controls["usuario"].value);
        this.router.navigateByUrl("/menusin")
      } else {
        alert("Su browser no soporta localstorage");
      }
    });
  }

}
