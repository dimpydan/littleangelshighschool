import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessagingService } from '../_services/messaging.service';

import {attendance} from '../_models/attendance';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
  providers: [MessagingService]
})
export class AttendanceComponent implements OnInit {

  attendanceForm: FormGroup;
    submitted = false;
    loading = false;
    
   
    model = new attendance(18, '', '', '');
    constructor(private formBuilder: FormBuilder, private _messagingService:MessagingService) { }

    ngOnInit() {
        this.attendanceForm = this.formBuilder.group({
            name: ['', Validators.required],
            phone: ['', Validators.required],
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
      var message="Dear parent  Student Name "+this.attendanceForm.value.name +" this is to inform you that your son/daughter was Absent today on "+this.attendanceForm.value.date+ 
      "Little Angels high school velgode";

      this._messagingService.sendSms(this.attendanceForm.value.phone,message).then(resp=>{
        console.log(resp);
       
      })
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.attendanceForm.value))
      this.loading = false;

     
     this.attendanceForm.reset();
     this.newHero();

     
  }

  newHero() {
    this.model = new attendance(42, '', '', '');
  }


}
