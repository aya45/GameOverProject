import { Component } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService , private _Router:Router)
  {
if(localStorage.getItem('userToken') !==null){
_Router.navigate(['/home'])
}
  }
isloading:boolean = false;
apiError:string = '';
  loginForm:FormGroup = new FormGroup({


    email:new FormControl(null , [Validators.required , Validators.email]),
    password:new FormControl(null , [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),


  });

  handleLogin(loginForm:FormGroup)
  {
    this.isloading = true;
    if(loginForm.valid)
    {

      this._AuthService.login(loginForm.value).subscribe({
        next:(resposne)=>{

          if(resposne.message ==='success')
          {
            localStorage.setItem('userToken',resposne.token);
            this._AuthService.decodeUserData();
            this.isloading = false;
            this._Router.navigate(['/home'])
          }

        },
        error:(err)=>
        {

          this.isloading = false;
          this.apiError = err.error.errors.msg;

        }

      })
    }
  }


}
