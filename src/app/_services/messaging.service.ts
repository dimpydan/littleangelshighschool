import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class MessagingService{

    constructor(private http: HttpClient) {}

    public sendSms(sendto,message):Promise<any>{

        let headersoptions = new HttpHeaders({
            'Access-Control-Allow-Origin':"http://littleangelshighschool.org"
          });

        let apiurl="https://app.indiasms.com/sendsms/sendsms.php?username=immanual&password=outlook1&type=TEXT&sender=Angels&mobile="+sendto+"&message="+message;
          return this.http.get(apiurl,{headers:headersoptions}).toPromise().then((data)=>{
              console.log(data);
          }).catch(err=>{
              console.log(err);
          });
      }

      
    public sendBulkSms(sendto,message):Promise<any>{

        let headersoptions = new HttpHeaders({
            'Access-Control-Allow-Origin':"http://littleangelshighschool.org"
          });

        let apiurl="https://app.indiasms.com/sendsms/bulksms.php?username=immanual&password=outlook1&type=TEXT&sender=Angels&mobile="+sendto+"&message="+message;
          return this.http.get(apiurl,{headers:headersoptions}).toPromise().then((data)=>{
              console.log(data);
          }).catch(err=>{
              console.log(err);
          });
      }

      public sendPayfeesSms(sendto,message):Promise<any>{

        let headersoptions = new HttpHeaders({
            'Access-Control-Allow-Origin':"http://littleangelshighschool.org"
          });

        let apiurl="https://app.indiasms.com/sendsms/sendsms.php?username=immanual&password=outlook1&type=TEXT&sender=Angels&mobile="+sendto+"&message="+message;
          return this.http.get(apiurl,{headers:headersoptions}).toPromise().then((data)=>{
              console.log(data);
          }).catch(err=>{
              console.log(err);
          });
      }


}