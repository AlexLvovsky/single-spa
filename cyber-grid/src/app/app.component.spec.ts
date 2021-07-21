import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GridDataService } from "./services/grid-data.service";
import { MockUserGridService } from "./services/mock-grid-data.service";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: GridDataService, useClass: MockUserGridService }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
