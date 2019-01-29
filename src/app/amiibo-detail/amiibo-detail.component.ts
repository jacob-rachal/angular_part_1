import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AmiiboInterface } from '../interfaces/amiibo-interface';
import { AmiiboService } from '../services/amiibo.service';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-amiibo-detail',
  templateUrl: './amiibo-detail.component.html',
  styleUrls: ['./amiibo-detail.component.css']
})
export class AmiiboDetailComponent implements OnInit {

  amiibo: AmiiboInterface;//not an array, due to just being one.

  constructor(private amiiboService: AmiiboService, private route: ActivatedRoute) { }

  getAmiiboTail() {
    return this.route.params.subscribe( params => {
      this.getAmiibo(params.id); //return the amiibo's info
    });
  }

  getAmiibo(id: string) {
    this.amiiboService.getAmiibo(id).subscribe((amiibo) => {this.amiibo = amiibo.amiibo[0];});
    //.map((amiibo) => {
      //this.amiibo = amiibo.amiibo[0];
    //});
    //.subscribe((amiibo) => {this.amiibo = amiibo.amiibo[0];});
    // this api returns the object within a single-cell array. Take note for future reference.
  }

  ngOnInit() {
    this.getAmiiboTail();
    // console.log(this.amiibo);
  }

}
