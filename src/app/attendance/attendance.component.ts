import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessagingService } from '../_services/messaging.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
  providers: [MessagingService]
})
export class AttendanceComponent implements OnInit {

  attendanceForm: FormGroup;
    submitted = false;

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

      var message="Dear parent Mr/Mrs "+this.attendanceForm.value.name +" this is to inform you that your child was not present on "+this.attendanceForm.value.date;

      this._messagingService.sendSms(this.attendanceForm.value.phone,message).then(resp=>{
        console.log(resp);
      })
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.attendanceForm.value))
  }


}
