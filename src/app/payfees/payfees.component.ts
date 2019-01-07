import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessagingService } from '../_services/messaging.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {payfees} from '../_models/payfees'
@Component({
  selector: 'app-payfees',
  templateUrl: './payfees.component.html',
  styleUrls: ['./payfees.component.css'],
  providers: [MessagingService]
})
export class PayfeesComponent implements OnInit {

  attendanceForm: FormGroup;
    submitted = false;
    loading = false;

    model = new payfees(18, '', '', '','','','');
    newHero() {
      this.model = new payfees(42, null,null,null,null,null,null);
    }
    constructor(private formBuilder: FormBuilder, private _messagingService:MessagingService,  private router: Router) { 
      this.newHero();
    }

    ngOnInit() {
        this.attendanceForm = this.formBuilder.group({
            name: ['', Validators.required],
            phone: ['', Validators.required],
            totalfees: ['', Validators.required],
            amountpaid: ['', Validators.required],
            balanceamount: ['', Validators.required],
            date: ['', Validators.required]
            
        });
    }

    get f() { return this.attendanceForm.controls; }

    onSubmit() {
      this.submitted = true;
     

      // stop here if form is invalid
      if (this.attendanceForm.invalid) {
          return;
      }
      this.loading = true;
      var message="Dear parent  Student Name "+this.attendanceForm.value.name +" Total Fees "+this.attendanceForm.value.totalfees+ "Amount paid" +this.attendanceForm.value.amountpaid+
    "Balance Amount" +this.attendanceForm.value.balanceamount+ "Thank you for paying Little Angels High School Velgode";

      this._messagingService.sendSms(this.attendanceForm.value.phone,message).then(resp=>{
        console.log(resp);
       
      })
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.attendanceForm.value))
      this.loading = false;
     this.newHero();
      
      
      
 
  }

 

}
