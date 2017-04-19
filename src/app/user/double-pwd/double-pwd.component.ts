import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animations/fade-in';
import { LocalDataSource } from 'ng2-smart-table';
@Component({
  selector: 'app-forget-pwd1',
  //templateUrl: './double-pwd.component.html',

  template: '<input #search class="search" type="text" placeholder="Search..." (keydown.enter)="onSearch(search.value)"><ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>',


  //styleUrls: ['./double-pwd.component.scss'],
  //animations: [fadeIn]

})
export class DoublePwdComponent { 


  ngOnInit() {


  }
  source: LocalDataSource;

  constructor() {
    this.source = new LocalDataSource(this.data);
  }

  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'id',
        search: query
      },
      {
        field: 'name',
        search: query
      },
      {
        field: 'username',
        search: query
      },
      {
        field: 'email',
        search: query
      }
    ], false);
    // second parameter specifying whether to perform 'AND' or 'OR' search 
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    }
  };

  data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    },
    // ... other rows here
    {
      id: 11,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz"
    }
  ];


}

