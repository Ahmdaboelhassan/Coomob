import { Component, OnInit } from '@angular/core';
import { Mobile } from 'src/Models/Mobile';
import { MobileService } from 'src/Services/mobile.service';

@Component({
  selector: 'app-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.scss'],
})
export class MobileListComponent implements OnInit {
  HomeMobileList: Mobile[] = [];

  constructor(private mobileService: MobileService) {}
  ngOnInit(): void {
    this.HomeMobileList = this.mobileService.getMobileList();
  }
}
