import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WorldStatComponent } from './world-stat/world-stat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StatByCountryComponent } from './statistics/stat-by-country/stat-by-country.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { NgxSpinnerModule } from "ngx-spinner";
import { MatExpansionModule } from '@angular/material/expansion';
import { AboutComponent } from './about/about.component';
import { BackendServicesService } from './services/backend-services.service';
import { StatByIndianStatesComponent } from './stat-by-indian-states/stat-by-indian-states.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FormControl } from '@angular/forms';
const appRoutes: Routes = [
  { path: 'world-stat', component: WorldStatComponent },
  { path: 'covid19', component: MainPageComponent },
  { path: 'stat-by-country', component: StatByCountryComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/covid19', pathMatch: 'full' },
  { path: 'stat-by-states', component: StatByIndianStatesComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    WorldStatComponent,
    MainPageComponent,
    PageNotFoundComponent,
    StatByCountryComponent,
    AboutComponent,
    StatByIndianStatesComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatAutocompleteModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    NgbModule,
    MatInputModule,
    AutoCompleteModule,
    MatFormFieldModule,
    NgxSpinnerModule,
    MatExpansionModule,
    MatSortModule,
    MatTableModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BackendServicesService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
