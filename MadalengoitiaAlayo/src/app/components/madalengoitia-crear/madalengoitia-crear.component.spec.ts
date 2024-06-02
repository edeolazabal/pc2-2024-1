import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadalengoitiaCrearComponent } from './madalengoitia-crear.component';

describe('MadalengoitiaCrearComponent', () => {
  let component: MadalengoitiaCrearComponent;
  let fixture: ComponentFixture<MadalengoitiaCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MadalengoitiaCrearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MadalengoitiaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
