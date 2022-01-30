import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpParams } from '@angular/common/http';
import { GaugeModule } from 'angular-gauge';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {MatInputModule } from '@angular/material/input'
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { DatePipe } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { NavigationComponent } from './navigation/navigation.component';
import { CardComponent } from './card/card.component';
import { AddValueFormComponent } from './add-value-form/add-value-form.component';
import { MatNativeDateModule } from '@angular/material/core'
import { MatDatepickerModule } from '@angular/material/datepicker';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    DashboardComponent,
    NavigationComponent,
    CardComponent,
    AddValueFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatIconModule,
    HttpClientModule,
    LayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    GaugeModule.forRoot(),
    MatInputModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
