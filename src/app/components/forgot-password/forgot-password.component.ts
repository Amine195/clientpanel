import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email:string;

  constructor(
    private authService:AuthService,
    private router:Router,
    private flashMessagesService:FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.authService.resetPassword(this.email)
    .then((res) => {
      this.flashMessagesService.show('Message has been send', { cssClass:'alert-success', timeout:4000});
      this.router.navigate(['/forgot'])
    })
    .catch((err) => {
      this.flashMessagesService.show(err.message, { cssClass:'alert-danger', timeout:4000});
      this.router.navigate(['/forgot'])
    });
  }

}
