import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { TemplateFormComponent } from './template-form.component';
import { FormsModule } from '@angular/forms';

describe('TemplateFormComponent', () => {
  let component: TemplateFormComponent;
  let fixture: ComponentFixture<TemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateFormComponent, FormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // View to Model Data Flow
  it('should update the favourite color in the component', fakeAsync(() => {
    const input = fixture.nativeElement.querySelector('input');
    input.value = 'Red';
    input.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    expect(component.favouriteColor).toEqual('Red');
  }));

  // Model to View Data Flow
  it('should update the favorite color in the input field', fakeAsync(() => { 
    component.favouriteColor = 'Blue';
    fixture.detectChanges();
    tick();
    const input = fixture.nativeElement.querySelector('input');
    expect(input.value).toBe('Blue');
  }));

});
