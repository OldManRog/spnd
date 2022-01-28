import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';
import { DatePipe } from '@angular/common';
import { GetAllValuesByUserIdRequest, GetAllValuesByUserIdResponse, GetSingleUserRequest, GetSingleUserResponse, SingleValue, SingleValueResponse, User, ValueTile } from '../models/models';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  user!: User;
  getSingleUserRequest!: GetSingleUserRequest;
  getAllValuesByUserIdResponse!: GetAllValuesByUserIdResponse;
  getAllValuesByUserIdRequest!: GetAllValuesByUserIdRequest;
  valueTiles: ValueTile[] = [];
  valueTile!: ValueTile;
  // singleValueResponse!: SingleValueResponse;

  singleValueResponseList!: Array<SingleValueResponse>;
  valueSub!: Subscription;

  // singleValueName!: string;

  id!: number;
  singleValues!: SingleValue[];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
    private observer: BreakpointObserver,
    public datepipe: DatePipe
  ) {}

  /** Based on the screen size, switch from standard to one column per row */

  ngOnInit(): void {
    this.getUserDetails();
    this.getAllValuesfromUserByUserId();
  }

  getUserDetails() {
    this.httpService
      .getSinglerUserById(this.getSingleUserRequest)
      .subscribe((response: GetSingleUserResponse) => {
        console.log('Initial User Object :: ::' + this.user);
        this.user = response.data;
        console.log('API RESPONSE :: :: ' + response.data);
        console.log('USER WITH DATA :: :: ' + this.user);
      });
  }

  getAllValuesfromUserByUserId() {
    this.valueSub = this.httpService
      .getAllValuesByUserId(this.getAllValuesByUserIdRequest)
      .subscribe((response: GetAllValuesByUserIdResponse) => {
        console.log(
          'Initial getAllValuesByUserIdResponse Object :: :: ' +
            this.getAllValuesByUserIdResponse
        );
console.log(
  'data  :: :: ' +
    response.data
);
          this.singleValueResponseList = response.data;
          response.data.forEach((res)=> {
           this.valueTiles?.push({
            cols: 1,
            rows: 1,
          });
          console.log("vslueTiles " + this.valueTiles)
          })


        }) 
      }
  
 
  }

