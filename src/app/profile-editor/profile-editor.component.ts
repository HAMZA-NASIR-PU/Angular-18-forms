import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.css'
})
export class ProfileEditorComponent {

  private formBuilder = inject(FormBuilder);

  profileForm = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.formBuilder.array([this.formBuilder.control('')]),
  });

  get aliases(): FormArray {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }

  onSubmit(event: Event) {
    console.log(`Is form valid: ${this.profileForm.valid}`);
    console.log(this.profileForm.value);
  }

  updateProfile() {
    // patchValue is used to update only some parts of a group. 
    this.profileForm.patchValue({
      firstName: 'Update firstName',
      address: {
        street: 'Updated address.street'
      }
    });

    //setValue si sued to complete the whole FormGroup.
  }
}
