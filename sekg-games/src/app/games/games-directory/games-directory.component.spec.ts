import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesDirectoryComponent } from './games-directory.component';

describe('GamesDirectoryComponent', () => {
  let component: GamesDirectoryComponent;
  let fixture: ComponentFixture<GamesDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesDirectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
