import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 public textHover:boolean=true;
  public personaldetails=[];
  constructor(private data: DataService) { }

  ngOnInit() {
     this.data.getData().subscribe((data) => {
         this.personaldetails = Array.from(Object.keys(data), k=>data[k]);
         console.log(this.personaldetails);
      });
	  console.log(this.textHover);
  }
}