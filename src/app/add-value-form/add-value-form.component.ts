import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AddValueRequest, AddValueResponse, SingleValue, ValueTile } from '../models/models';
import { CommonServices as CommonService} from '../services/common-services.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-add-value-form',
  templateUrl: './add-value-form.component.html',
  styleUrls: ['./add-value-form.component.scss'],
})
export class AddValueFormComponent implements OnInit {
  scheduleTypes: any = [1, 2, 4];
  scheduleTimes: any = ["week","year"];
  scheduleFreq = null;
  scheduleReTime = null;
  addValueReponse!: AddValueResponse;
  addValueRequest!: AddValueRequest;
  // valueForm!: FormGroup;
  valueTiles!: ValueTile[];

  constructor(
    public formBuilder: FormBuilder,
    private httpService: HttpService,
    public datepipe: DatePipe,
    private Service: CommonService
  ) {}

  ngOnInit(): void {}

  valueForm = this.formBuilder.group({
    valueName: [null],
    valueAmount: [''],
    valueReocurring: [],
    valueExp: [null],
    valueFreq: [],
    valueSchedule: []
  });

  submit() {
    console.log(this.valueForm.value.valueAmount);
    alert(JSON.stringify(this.valueForm.value));
    this.addValue();
  }

  addValue() {
    this.addValueRequest = {
      budgetFrequency: this.valueForm.value.valueFreq,
      budgetedAmount: 0,
      isFullyValued: false,
      lastUpdateAmount: 0,
      valueName: this.valueForm.value.valueName,
      valueAmount: this.valueForm.value.valueAmount,
      valueByDate: this.valueForm.value.valueExp,
      userId: 1,
    };

    this.httpService
      .addValueToUser(this.addValueRequest)
      .subscribe((response: AddValueResponse) => {
        this.valueTiles?.push({
          cols: 1,
          rows: 1,
          valueData: response.data,
        });
        this.sendMessage(response.data);
        console.log('AddValueResponse :: :: ' + JSON.stringify(response));
      });
  }

  sendMessage(value: SingleValue): void {
    this.Service.sendUpdate(value);
  }

  changeScheduleType(e: Event): void {
    console.log(this.scheduleFreq);
  }

  changeScheduleTime(e: Event): void {
    console.log(this.scheduleReTime);
  }

  // get scheduleType() {
  //   console.log(this.valueForm.get('valueFreq'));
  //   return this.valueForm.get('valueFreq');
  // }
}
