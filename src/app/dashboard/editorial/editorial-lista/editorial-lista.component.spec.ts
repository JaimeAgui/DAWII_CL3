import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialListaComponent } from './editorial-lista.component';

describe('EditorialListaComponent', () => {
  let component: EditorialListaComponent;
  let fixture: ComponentFixture<EditorialListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditorialListaComponent]
    });
    fixture = TestBed.createComponent(EditorialListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
