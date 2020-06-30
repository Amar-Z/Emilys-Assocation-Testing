import { Component, OnInit } from '@angular/core';
import { SendFormsService } from '../../../send-forms.service';

import { MatDialog } from '@angular/material';
import { News, Params_Get_News_By_Where_InList, Params_Get_News_category_By_OWNER_ID, Proxy } from '../../../core/services/proxy.service';

@Component({
  selector: 'app-news-field',
  templateUrl: './news-field.component.html',
  styleUrls: ['./news-field.component.css']
})
export class NewsFieldComponent implements OnInit {
  My_News: News[] = [];
  constructor(private proxy: Proxy, private dialog: MatDialog, private DataService: SendFormsService) { }

  ngOnInit(): void {
    this.fetchNews();
  }

  fetchNews() {
    const param: Params_Get_News_By_Where_InList = new Params_Get_News_By_Where_InList();
    this.proxy.Get_News_By_Where_InList(param).subscribe((data) => {
    this.My_News = data;
    console.log(this.My_News);
    });
  }

  fetchNewsCategory() {
    const para: Params_Get_News_category_By_OWNER_ID = new Params_Get_News_category_By_OWNER_ID();
    this.proxy.Get_News_category_By_OWNER_ID(para).subscribe((d) => {
      console.log(d);
    });
  }

  // sendDataAsFormBody() {
  //   this.DataService.GetNews().subscribe((res) => {
  //       console.log(res);
  //     });
  //   }
}

export class NewsDetails {
  title:  string;
  description: string;
  images: string;

}
