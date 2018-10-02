import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { user } from '../classes/user';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userarr:user[];
  dataSource = new MatTableDataSource();
  displaycolumns:string[]=['email_id','password','user_name','mobile_no','user_type','city','address'];


  constructor(private _data:UserserviceService) { }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this._data.getAllUser().subscribe(
      (data:user[])=> {
      this.userarr=data;
      this.dataSource.data=this.userarr;
    }
    );
  }

}
