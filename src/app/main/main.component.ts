import {Component, Injectable, OnInit} from '@angular/core';

import { MainService } from '../shared/service/main-service';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {
 @Injectable()

  public id: number;
  public name: string;

  constructor(private mainService: MainService, private fb: FormBuilder) { }

  mainGroup = this.fb.group({
        id:  [{value: '', disabled: true}, Validators.min(0)],
        name: ['', Validators.minLength(3)]
  });

  ngOnInit() {
    this.getMain();
  }

  getMain() {
    this.mainService.getMain()
        .subscribe(data => data, err => console.log(err));
  }

  confirmForm() {
    console.log(this.mainGroup);
  }

}
