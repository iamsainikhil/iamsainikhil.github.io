import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLoaderComponent } from './site-loader.component';

describe('SiteLoaderComponent', () => {
  let component: SiteLoaderComponent;
  let fixture: ComponentFixture<SiteLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
