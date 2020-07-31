import { Component, OnInit, AfterViewInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit, AfterViewInit {

    constructor() { }
    ngAfterViewInit(): void {

        // var _aside = document.querySelectorAll('.sidenavbar');
        // var aside = (<any>window).M.Sidenav.init(_aside, null);


        // console.log((<any>window).$('#dropdownMenuUser'));
        jQuery.noConflict();
        (<any>window).$('.sidenav').sidenav();
        (<any>window).$(".ddMU").dropdown();
        // (<any>window).$('#dropdownMenuUser').dropdown();

        // $(document).ready(function(){
            // (<any>window).$('.sidenav').sidenav();
        // });
    }

    ngOnInit(): void {
    }

}
