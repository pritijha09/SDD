import { Component, OnInit } from '@angular/core';
import { CoreHttpService } from '../core/services/coreHttpServices/core-http.service';
import { Login } from '../models/common.model';
import { Router } from '@angular/router';
import { NotificationService } from '../core/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public loginPayload: Login = new Login();
  constructor(private coreHttp: CoreHttpService, private route:Router, private notifyService : NotificationService) { }

  ngOnInit(): void {
  }

  /** Method to logging user */
  onSubmit() {
    this.coreHttp.post('user/login', this.loginPayload).subscribe(res => {
      if(res.status === 200) {
        this.notifyService.showError("Something is wrong")
        localStorage.setItem('token', res.response.token);
        this. route. navigate(['/user-management']);
      }
      console.log(res.response);
    }, error=> {
      console.log(error);
      this.notifyService.showError(error.message)
    })
  }

}
