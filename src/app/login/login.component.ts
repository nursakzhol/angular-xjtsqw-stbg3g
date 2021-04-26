import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // @ts-ignore
  formGroup: FormGroup;
  constructor(private auth: AuthService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.initForm();
  }
  // tslint:disable-next-line:typedef
  initForm(){
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  // tslint:disable-next-line:typedef
  loginProcess(){
    if (this.formGroup?.valid){
      this.auth.login(this.formGroup.value).subscribe(result => {
        if (result.success){
          console.log(result);
          alert(result.message);
        } else {
          alert(result.message);
        }
      });
    }
  }
}
