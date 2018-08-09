import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-adding-visit',
  templateUrl: './adding-visit.component.html',
  styleUrls: ['./adding-visit.component.css']
})
export class AddingVisitComponent implements OnInit {

  constructor() { }
  myform: FormGroup;
  ngOnInit() {
  }


  createNewVisit() {}
}
