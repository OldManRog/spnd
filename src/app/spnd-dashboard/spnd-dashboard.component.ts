import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';
import { DatePipe } from '@angular/common';
import {
  GetAllValuesByUserIdRequest,
  GetAllValuesByUserIdResponse,
  GetSingleUserRequest,
  GetSingleUserResponse,
  SingleValue,
  SingleValueResponse,
  User,
  ValueTile,
} from '../models/models';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Subscription } from 'rxjs';
import { CommonServices as CommonService } from '../services/common-services.service';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-spnd-dashboard',
  templateUrl: './spnd-dashboard.component.html',
  styleUrls: ['./spnd-dashboard.component.scss'],
})
export class SpndDashboardComponent {
  user!: User;
  getSingleUserRequest!: GetSingleUserRequest;
  getAllValuesByUserIdResponse!: GetAllValuesByUserIdResponse;
  getAllValuesByUserIdRequest!: GetAllValuesByUserIdRequest;
  valueSub!: Subscription;
  singleValueResponseList!: Array<SingleValueResponse>;
  singleValueList: Array<SingleValue> = [];
  messageReceived!: SingleValueResponse;
  options = faGear;
  optionsMenuIsOpen: boolean = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
    private observer: BreakpointObserver,
    public datepipe: DatePipe,
    private service: CommonService,
    public modalService: ModalService
    
  ) {
    this.valueSub = this.service.getUpdate().subscribe((value) => {
      console.log('Value Observable ' + JSON.stringify(value));
      this.singleValueList.push(value);
    });
  }

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
        console.log('data  :: :: ' + response.data.length);
        response.data.forEach((singleValue) => {
          this.singleValueList.push(singleValue.value);
        });
      });
  }

openOptions(){
this.optionsMenuIsOpen = true;
console.log(this.optionsMenuIsOpen);
}

}
