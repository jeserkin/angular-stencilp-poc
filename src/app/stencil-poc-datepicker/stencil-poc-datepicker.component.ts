import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stencil-poc-datepicker',
  templateUrl: './stencil-poc-datepicker.component.html',
  styleUrls: ['./stencil-poc-datepicker.component.css']
})
export class StencilPocDatepickerComponent implements OnInit, AfterViewInit {

  @ViewChild('datepicker')
  veeraDatepicker: ElementRef<HTMLVeeraDatepickerElement>;

  @ViewChild('datepickerField')
  veeraDatepickerField: ElementRef<HTMLVeeraDatepickerElement>;

  veeraDatepickerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.veeraDatepickerForm = this.formBuilder.group({
      datepickerField: this.formBuilder.control('20.04.2020', [])
    });
  }

  ngAfterViewInit(): void {
    this.veeraDatepicker.nativeElement.data = [
      {
        id: 1,
        input_type: 'datepicker',
        name: 'date_from',
        value: 'Choose start date',
        predefined_value: '10/04/2020',
        i18n_monthArray: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        i18n_weekArray: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ];

    this.veeraDatepickerField.nativeElement.data = [
      {
        id: 2,
        input_type: 'datepicker',
        name: 'date_from',
        value: 'Choose start date',
        predefined_value: '20/04/2020',
        i18n_monthArray: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        i18n_weekArray: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ];
  }

  get datepickerFieldControl(): FormControl {
    return this.veeraDatepickerForm.get('datepickerField') as FormControl;
  }

  @HostListener('datePicked', ['$event.detail'])
  listenToDateChange(value: string): void {
    this.datepickerFieldControl.patchValue(value);
    this.datepickerFieldControl.updateValueAndValidity();
  }
}
