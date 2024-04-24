import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAnnotationComponent } from './data-annotation.component';

describe('DataAnnotationComponent', () => {
  let component: DataAnnotationComponent;
  let fixture: ComponentFixture<DataAnnotationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataAnnotationComponent]
    });
    fixture = TestBed.createComponent(DataAnnotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
