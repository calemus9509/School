import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EspecialidadService } from '../especialidad.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-especialidad-form',
  templateUrl: './especialidad-form.component.html',
  styleUrls: ['./especialidad-form.component.css']
})
export class EspecialidadFormComponent implements OnInit {

  public frmEspecialidad: FormGroup
  public id =0
  
  constructor(private service: EspecialidadService, private activedRoute: ActivatedRoute, private toast: ToastrService){
    
    this.id = this.activedRoute.snapshot.params['id']           
    this.frmEspecialidad = new FormGroup({
      nombre: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(150)])

    })
  }

  ngOnInit(): void{

    if(this.id && this.id !=0){
      this.service.obtenerPorId(this.id).subscribe(
        result =>{
          this.frmEspecialidad.controls['nombre'].setValue(result.data.nombre)
        }
      )
    }
  }
  
  guardar(){
    if(this.frmEspecialidad.invalid){
      this.toast.warning("Debe llenar todos los campos!")
      return
    }
    let data ={
      "nombre": this.frmEspecialidad.controls['nombre'].value
    }
    this.service.guardar(data,this.id).subscribe(
      result=>{
        this.toast.success("Especialidad Guardada")
      }
    )
  }
}
