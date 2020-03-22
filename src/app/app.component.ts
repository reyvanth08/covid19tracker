import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private spinner: NgxSpinnerService) {
    this.spinner.show();
    
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
  }

  isMenuCollapsed;
  title = 'covID19';
}
