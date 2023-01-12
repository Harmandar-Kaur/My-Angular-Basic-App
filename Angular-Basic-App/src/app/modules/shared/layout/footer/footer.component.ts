import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {VersionService} from "../../../../services/version.service";
//import {VersionService} from "../../../../../services/version.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements  OnInit {

  version: string | undefined;

  constructor(
    private versionService : VersionService
  ) {
  }


  @Input() title: string | undefined;
  ngOnInit(): void {

    this.version = this.versionService.getVersion();

    console.log(this.title);
    //this.title = "ngOnInit is called in Footer!";
    //console.log('ngOnInit is called in footer!')
  }
}
