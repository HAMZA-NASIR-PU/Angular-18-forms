import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './name-editor.component.html',
  styleUrl: './name-editor.component.css'
})
export class NameEditorComponent {
  // FormControl class track the state of the input field
  name = new FormControl('');

  updateName(){
    this.name.setValue('Nancy');
  }
}
