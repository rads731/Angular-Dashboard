import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users:Object;
  disabled=false;
  constructor(private data:DataService) { }

  ngOnInit() {
     this.data.getData().subscribe((data)=>{
        this.users=data;
        console.log(this.users);
     }); 
  }
  onSubmit(){
     this.disabled=true;
     //console.log(this.disabled,this.users.isSelected);
	 alert("button is clicked to delete the row");
  }
}
