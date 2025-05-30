import { Component } from '@angular/core';
import { ControlValueAccessor, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  favouriteColorControl = new FormControl('');

  constructor() {
    // Data flow from view to model
    this.favouriteColorControl.valueChanges.subscribe((color: any) => {
      console.log(`Favourite Color: ${color}`)
    });
  }

  changeColor() {
    // Data flow from model to view. 
    this.favouriteColorControl.setValue('Red');
  }

}
