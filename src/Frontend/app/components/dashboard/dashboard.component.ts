import {Component, OnInit } from '@angular/core';
import {SomethingData} from '../../../../Common/SomethingData'
import {ApiServiceService} from '../../services/api-service.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private apiService:ApiServiceService) { }

  Staff : SomethingData[] = [new SomethingData(0, 'none')]

  ngOnInit(): void {
  }

  onClick() {
     this.apiService.getSomething()
                   .subscribe(staff=>{ 
                    this.Staff=staff}
                    );
  }

}
