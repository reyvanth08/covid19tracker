import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { NgxSpinnerService } from "ngx-spinner";
import { BackendServicesService } from '../services/backend-services.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface StateStats {
  loc: string;
  confirmedCasesIndian: number;
  confirmedCasesForeign: number;
  discharged: number;
  deaths: number;
}
@Component({
  selector: 'app-stat-by-indian-states',
  templateUrl: './stat-by-indian-states.component.html',
  styleUrls: ['./stat-by-indian-states.component.css']
})
export class StatByIndianStatesComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ["Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"];
  filteredOptions: Observable<string[]>;
  results;
  latestData;
  stateData = [];
  showStateData = false;
  stateStat;
  showStat = false;
  noCasesFound;
  showNoCasesFound = false;;
  dateVal  =new Date();
  showSearchBar = false;


  constructor(private backendService: BackendServicesService, private spinner: NgxSpinnerService) { }
  displayedColumns: string[] = ['loc', 'confirmedCasesIndian', 'confirmedCasesForeign', 'discharged', 'deaths'];
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatSort, { static: true }) sort: MatSort;


  
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), map(value => this._filter(value)));
    this.getStatByStates();

    this.backendService.getIndianData().then(result => {
      setTimeout(() => {
        this.spinner.hide();
      }, 5000);
      this.results = result;
      this.latestData = (this.results.data.length - 1);
      this.stateData = this.results.data[this.latestData].regional;
      this.dataSource = new MatTableDataSource(this.stateData);
      this.dataSource.sort = this.sort;
      console.log(this.stateData)
    });

  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


  getStatByStates() {
    this.spinner.show();
    this.showSearchBar = false;
    this.backendService.getIndianData().then(result => {
      setTimeout(() => {
        this.spinner.hide();
      }, 5000);
      this.results = result;
      this.latestData = (this.results.data.length - 1);
      this.stateData = this.results.data[this.latestData];
      
    });
  }

  showData() {
    this.showStateData = false;
    this.showSearchBar = false;
    this.showStat = true;
  }

  hideData() {
    this.showStat = false;
  }
  stateStatistics(state) {
    this.showNoCasesFound = false;
    this.showStat = false;
    this.showSearchBar = false;
    this.showStateData = true;
    this.backendService.getIndianData().then(result => {
      setTimeout(() => {
        this.spinner.hide();
      }, 5000);
      this.results = result;
      this.latestData = (this.results.data.length - 1);
      this.stateData = this.results.data[this.latestData].regional;
      for (let i = 0; i < this.results.data[this.latestData].regional.length; i++) {
        if (this.results.data[this.latestData].regional[i].loc === state) {
          console.log(state);
          this.stateStat = this.results.data[this.latestData].regional[i];
          console.log(this.stateStat);
        }
        else {
          this.noCasesFound = 'No cases found in ' + state;
          console.log(this.noCasesFound);
          
        }
      }
    });
  }

  showSearch() {
    this.showStat = false;
    this.showSearchBar = true;
    
  }

  hideSearch() {
    this.showSearchBar = false;
  }

}
