import { Component, OnInit } from '@angular/core';
import { GridDataService } from "./services/grid-data.service";
import { User } from "./models/user.model";

@Component({
  selector: 'app-grid',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'username'];
  data: User[] = [];
  title = 'cyber-grid';

  constructor(private dataService: GridDataService) {
  }

  ngOnInit(): void {
    this.dataService.getUsers()
      .subscribe(values => {
        this.data = values;
      });
  }

}
