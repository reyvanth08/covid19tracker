import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BackendServicesService {
  getAPI: any;

  // tslint:disable-next-line: variable-name
  constructor(private _httpClient: HttpClient) {
    this.getAPI = environment.api;
  }

  getWorldData() {
    return new Promise(resolve => {
      // tslint:disable-next-line: max-line-length
      const headers = { 'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com', 'x-rapidapi-key': 'ec040d2f97msh7fe94baf5b6cfbfp135473jsn8102bb181b78' };
      // tslint:disable-next-line: object-literal-shorthand
      const options = { headers: headers };
      this._httpClient.get(this.getAPI.WORLDSTAT, options).subscribe((response) => {
        console.log(response);
        resolve(response);
      }, err => {
        console.log(JSON.stringify(err));
      });
    });
  }

  getCountryData(countryChosen) {
    return new Promise(resolve => {
      // tslint:disable-next-line: max-line-length
      const headers = { 'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com', 'x-rapidapi-key': 'ec040d2f97msh7fe94baf5b6cfbfp135473jsn8102bb181b78' };
      // tslint:disable-next-line: object-literal-shorthand
      // tslint:disable-next-line: object-literal-shorthand
      const options = { headers: headers };
      console.log(options);

      this._httpClient.get(this.getAPI.COUNTRYSTAT + '?country=' + countryChosen, options).subscribe((response) => {
        console.log(response);
        resolve(response);
      }, err => {
        console.log(JSON.stringify(err));
      });
    });
  }

  getIndianData() {
    return new Promise(resolve => {
      this._httpClient.get(this.getAPI.INDIANSTATISTICS).subscribe((response) => {
        console.log(response);
        resolve(response);
      }, err => {
        console.log(JSON.stringify(err));
      });
    });
  }
}
