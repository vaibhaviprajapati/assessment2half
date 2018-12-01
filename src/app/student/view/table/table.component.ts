import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() headers: any;
  @Input() data: any[];


  constructor() { }

  ngOnInit() {
     console.log(this.headers.length);

    // if(this.data)
    // {
    //   console.log(this.data.length);
    // }
  }

}
