import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructAnimeComponent } from './struct-anime.component';

describe('StructAnimeComponent', () => {
  let component: StructAnimeComponent;
  let fixture: ComponentFixture<StructAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructAnimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
