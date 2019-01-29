import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AmiiboService } from '../services/amiibo.service';
import{ AmiiboInterface } from '../interfaces/amiibo-interface';
import { PaginationService } from '../services/pagination.service';

@Component({
  selector: 'app-amiibos',
  templateUrl: './amiibos.component.html',
  styleUrls: ['./amiibos.component.css']
})
export class AmiibosComponent implements OnInit {

  amiibos: AmiiboInterface[];
  paginator: any = {}; //an object
  searchText: string;
  pagedItems: AmiiboInterface[] = [];
  shouldShowPaginator = true;

  constructor(private amiiboService: AmiiboService, private paginationService: PaginationService, private route: ActivatedRoute) { }

  getAmiibos() {
    // return this.amiibo.getAmiibos().subscribe( (res) => {
    //   // return
    //   this.amiibos = res.amiibo;
    //   this.setPage(1);
    // } );
    this.route.params.subscribe(params => {
      if (params.category) {
        this.amiiboService.getFilteredAmiibos(params.category, params.value).subscribe((amiibos) => {
          this.amiibos = amiibos.amiibo;
          this.setPage(1);
        });
      } else {
        this.amiiboService.getAmiibos().subscribe((amiibos) => {
          this.amiibos = amiibos.amiibo;
          this.setPage(1);//this is where I would want to save the page we left off on from returning from a profile.
        });
      }
    });
  }

  setPage(page: number) {
    const amiiboCount = this.amiibos.length;
    this.paginator = this.paginationService.getPaginatior(amiiboCount, page, 12);
    // (total # of items, page #, and total # of items to be rendered).
    if (page < 1 || page > this.paginator.pagesCount) {return;}
    const startIndex = this.paginator.startIndex;
    const endIndex = this.paginator.endIndex + 1;
    this.pagedItems = this.amiibos.slice(startIndex, endIndex);
  }

  setAmiibos(): AmiiboInterface[] {
    //for fixing our search bar to look over all the amiibos rather than just the ones visible on the page
    if (!this.searchText) { this.shouldShowPaginator = true; return this.pagedItems;}
    this.shouldShowPaginator = false;
    return this.amiibos;
  }

  ngOnInit() {
    this.getAmiibos();
  }
}
