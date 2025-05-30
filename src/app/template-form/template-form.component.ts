import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent implements AfterViewInit {

  @ViewChild('colorInput') colorInputModel!: NgModel
  favouriteColor: string = '';

  @ViewChild('colInput') colInput!: ElementRef;

  ngAfterViewInit() {
    console.log(this.colorInputModel);

    console.log(this.colInput);

    this.colorInputModel.valueChanges?.subscribe((data: any) => { 
      console.log(data);
    });
  }

  updateColor() {
    this.favouriteColor = "RED";
  }
}
