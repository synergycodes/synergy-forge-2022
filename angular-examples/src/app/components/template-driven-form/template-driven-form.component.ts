import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import ContactForm from 'src/app/models/contact-form.interface';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {

  @ViewChild('form', {static: false})
  form!: NgForm;

  categories: string[] = [
    'issue', 'advertisement', 'cv'
  ];

  formData: ContactForm = {
    year: 2022
  };

  onSubmit() {
      if (this.form.valid) {
        console.log({...this.formData});
        this.form.reset();
      }
  }
}
