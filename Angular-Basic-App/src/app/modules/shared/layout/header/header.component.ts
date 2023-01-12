import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {VersionService} from "../../../../services/version.service";
//import {VersionService} from "../../../../../services/version.service";

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})

export class HeaderComponent implements OnInit {

  @Input() title: string | undefined;

  array = [1, 2, 3, 4, 5];

  version: string | undefined;

  constructor(
    private versionService: VersionService
  ) {
  }
  ngOnInit(): void {
    console.log(this.title);
    this.version = this.versionService.getVersion();
    //this.title = "ngOnInit is called in Header!";
    //console.log('ngOnInit is called in Header!')
  }

  capitalText = 'capital text';
  isoDate = '2023-01-09T14:17:00.000Z';

  amount = 99;
  num = 56.78;

  birthday : Date = new Date(  1999,  7,  27);
}
