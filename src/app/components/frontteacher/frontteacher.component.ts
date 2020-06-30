import { Component, OnInit } from '@angular/core';
import {
  Proxy, Result_Get_Teacher_By_Where, Params_Get_Teacher_By_Where,
  Teacher
} from "../../core/services/proxy.service";
@Component({
  selector: 'app-frontteacher',
  templateUrl: './frontteacher.component.html',
  styleUrls: ['./frontteacher.component.css']
})
export class FrontteacherComponent implements OnInit {
  MyTeachers: Teacher[]  = [];
  constructor(private apiCaller: Proxy) { }

  ngOnInit() {
    const params = new Params_Get_Teacher_By_Where();
    params.FIRST_NAME = '';
    params.LAST_NAME = '';

    this.apiCaller.Get_Teacher_By_Where(params).subscribe((data: Teacher[]) =>{
      alert(data);
      console.log(data);
      this.MyTeachers = data;
    });
  }

}
