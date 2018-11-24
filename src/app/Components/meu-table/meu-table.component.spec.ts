import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuTableComponent } from './meu-table.component';

describe('MeuTableComponent', () => {
  let component: MeuTableComponent;
  let fixture: ComponentFixture<MeuTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
