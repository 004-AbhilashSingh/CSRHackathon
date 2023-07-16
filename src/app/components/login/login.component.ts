import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() placeholder?:String
  @Input() logintype?:String
  @Input() submiturl?:String
}
