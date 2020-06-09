import { Component, OnInit } from '@angular/core';
import { RESTClientService } from '../RESTService/restclient.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  user = {username:''}
  loginMessage: string;

  loginForm = new FormGroup({
    username: new FormControl('',Validators.required)
  })
  constructor(private router: Router, private fb: FormBuilder, private restClient: RESTClientService) { }

  ngOnInit(): void {
  }




  geetingJWT(){    

    this.restClient.gettingJWT().then(res =>{
      localStorage.setItem("jwt", JSON.stringify(res));
    })
  }


  login(){
    var saveItem = localStorage.getItem("jwt");
   
    var authKey = JSON.parse(saveItem)
    console.log(authKey);





    
   this.restClient.validateJWT(authKey.jwt).then(res =>{
    var jsonObject = JSON.stringify(res);
     var response = JSON.parse(jsonObject); 

     if (response.message == "invalid token"){
        this.loginMessage = "Sorry";
     }else if(authKey=="null"){
        this.loginMessage = "please get jwt";
     }else{
console.log(response)
   this.router.navigate(['/home'], { queryParams: { username: response.username} });
     }
   })

  }

  clear(){

    localStorage.removeItem("jwt");

  }



}
