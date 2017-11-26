import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {

  }

  register() {
    this.dataService.register()
  }

}
