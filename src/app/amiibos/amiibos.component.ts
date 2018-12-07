import { Component, OnInit } from '@angular/core';

import { AmiiboService } from '../services/amiibo.service';
import{ AmiiboInterface } from '../interfaces/amiibo-interface';


@Component({
  selector: 'app-amiibos',
  templateUrl: './amiibos.component.html',
  styleUrls: ['./amiibos.component.css']
})
export class AmiibosComponent implements OnInit {

  amiibos: AmiiboInterface[];

  constructor(private amiibo: AmiiboService) { }

  getAmiibos() {
    return this.amiibo.getAmiibos().subscribe( (res) => {
      return this.amiibos = res.amiibo;
    } );
  }

  ngOnInit() {
    this.getAmiibos();
  }

}
