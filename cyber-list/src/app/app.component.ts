import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'cyber-list';
  list: string[] = [];

  ngAfterViewInit(): void {
    setTimeout(() => {
      const windowList = window.cyberapp?.list;
      if (windowList) {
        this.list = [...windowList];
      }
    }, 1000);
  }
}
