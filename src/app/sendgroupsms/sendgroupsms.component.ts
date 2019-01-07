  import { Component, OnInit } from '@angular/core';

import { Hero }    from '../_models/hero';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessagingService } from '../_services/messaging.service';

@Component({
  selector: 'app-sendgroupsms',
  templateUrl: './sendgroupsms.component.html',
  styleUrls: ['./sendgroupsms.component.css'],
  providers: [MessagingService]
})
export class SendgroupsmsComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  messageForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private _messagingService:MessagingService){}
  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required]
      
  });
}

get f() { return this.messageForm.controls; }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true;
  
    console.log(this.messageForm);

    // stop here if form is invalid
    if (this.messageForm.invalid) {
      return;
  }
  // this.loading = true;
  // var message="Dear parent  Student Name "+this.attendanceForm.value.name +" this is to inform you that your son/daughter was Absent today on "+this.attendanceForm.value.date+ 
  // "Little Angels high school velgode";

  this._messagingService.sendBulkSms(this.messageForm.value.phone,this.messageForm.value.message).then(resp=>{
    console.log(resp);
   
  })
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.messageForm.value))
  this.submitted = false;

 
 this.messageForm.reset();

  }

  newHero() {
    this.model = new Hero(42, '', '');
  }
}