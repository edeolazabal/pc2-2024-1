import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadalengoitiaListarComponent } from './madalengoitia-listar.component';

describe('MadalengoitiaListarComponent', () => {
  let component: MadalengoitiaListarComponent;
  let fixture: ComponentFixture<MadalengoitiaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MadalengoitiaListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MadalengoitiaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
