import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JimenezCrearComponent } from './jimenez-crear.component';

describe('JimenezCrearComponent', () => {
  let component: JimenezCrearComponent;
  let fixture: ComponentFixture<JimenezCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JimenezCrearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JimenezCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
