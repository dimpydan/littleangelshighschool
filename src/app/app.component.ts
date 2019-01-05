import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'littleangels';
  currentUser: User;

  constructor(private http: HttpClient, 
    private router: Router,
        private authenticationService: AuthenticationService
    ) { 
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }

  public sendSms():Promise<any>{



let headersoptions = new 
Headers({

'Content-Type':
'application/json',

'Access-Control-Allow-Origin':"*"

//'Authorization': 'Bearer ' + token

});



// let requestoptions = new RequestOptions({headers:{:"*"}});



let apiurl="https://app.indiasms.com/sendsms/sendsms.php?username=immanual&password=outlook1&type=TEXT&sender=Angels&mobile=9030832522&message=Testing%20HTTP%20API";

return 
this.http.get(apiurl).toPromise().then((data)=>{

console.log(data);

}).catch(err=>{

console.log(err);

});

}

}
