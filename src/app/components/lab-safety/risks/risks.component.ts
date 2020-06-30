import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-risks',
  templateUrl: './risks.component.html',
  styleUrls: ['./risks.component.css']
})
export class RisksComponent implements OnInit {
  FirstImg : '../../../assets/img/RisksPart(1).png';
  ScndImg : '../../../assets/img/RisksPart(2).png';
  ThrdImg : '../../../assets/img/RisksPart(3).png';
  constructor() { }

  ngOnInit(): void {
  }

}
