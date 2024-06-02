import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JimenezListarComponent } from './jimenez-listar.component';

describe('JimenezListarComponent', () => {
  let component: JimenezListarComponent;
  let fixture: ComponentFixture<JimenezListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JimenezListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JimenezListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
