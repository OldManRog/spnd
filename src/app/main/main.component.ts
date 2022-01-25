import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  GetSingleUserRequest,
  GetSingleUserResponse,
  User,
} from 'src/app/models/models';
import { HttpService } from 'src/app/services/http.service';

import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  user!: User;
  request!: GetSingleUserRequest;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  id!: number;
  currentTime!: Date;
  date!: Date;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
    private observer: BreakpointObserver,
    public datepipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.getUserDetails();
    this.getTime();
   
  }

  getUserDetails() {
    this.httpService
      .getSinglerUserById(this.request)
      .subscribe((response: GetSingleUserResponse) => {
        console.log('Initial User Object' + this.user);
        this.user = response.data;
        console.log('API RESPONSE' + response.data);
        console.log('USER WITH DATA' + this.user);
      });
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }

  getTime():void {
    this.date = new Date();
    this.datepipe.transform(this.date, 'yyy-MM-dd');
  }
}
