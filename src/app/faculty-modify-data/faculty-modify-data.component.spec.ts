import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyModifyDataComponent } from './faculty-modify-data.component';

describe('FacultyModifyDataComponent', () => {
  let component: FacultyModifyDataComponent;
  let fixture: ComponentFixture<FacultyModifyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyModifyDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyModifyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
