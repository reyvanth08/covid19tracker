import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendServicesService } from '../services/backend-services.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-world-stat',
  templateUrl: './world-stat.component.html',
  styleUrls: ['./world-stat.component.css']
})
export class WorldStatComponent implements OnInit {
  dateVal  =new Date();
  results;

  constructor(private backendService: BackendServicesService,  private spinner: NgxSpinnerService) {
  }
   

  ngOnInit() { 
    this.worldStat();
  }

  worldStat() {
    this.spinner.show();
    this.backendService.getWorldData().then(data => {
      setTimeout(() => {
        this.spinner.hide();
      }, 5000);
      this.results = data;
      console.log(data);
      
    });
  }
}
