import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavcontentComponent } from './sidenavcontent.component';

describe('SidenavcontentComponent', () => {
  let component: SidenavcontentComponent;
  let fixture: ComponentFixture<SidenavcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
