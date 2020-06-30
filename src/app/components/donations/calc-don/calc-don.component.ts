import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-calc-don',
  templateUrl: './calc-don.component.html',
  styleUrls: ['./calc-don.component.css']
})
export class CalcDonComponent implements OnInit {
X: number;
Y: number;
Result: number;
currentBtn: number;
FirstDiv: boolean;
SecondtDiv: boolean;
ThirdDiv: boolean;
FourthDiv: boolean;
  constructor(private router : Router) { }

  ngOnInit(): void {
    this.FirstDiv = false;
    this.SecondtDiv = false;
    this.ThirdDiv = false;
    this.FourthDiv = false;
  }

  onCalc(){
    var roundNb ;
roundNb =  Math.round((this.Y * 0.34 /100) * 100).toFixed(2);
this.X = roundNb;
this.FourthDiv = true;
this.FirstDiv = false;
this.SecondtDiv = false;
this.ThirdDiv = false;

  }

  showDivF(divVal: number){
    var roundNb ;
    this.currentBtn = divVal;
roundNb =  Math.round((divVal * 0.34 /100) * 100).toFixed(2);
    this.Result = roundNb;
this.FirstDiv = true;
this.SecondtDiv = false;
this.ThirdDiv = false;
this.FourthDiv = false;
  }

  showDivS(divVal: number){
    var roundNb ;
    this.currentBtn = divVal;
roundNb =  Math.round((divVal * 0.34 /100) * 100).toFixed(2);
    this.Result = roundNb;
    this.SecondtDiv = true;
    this.FourthDiv = false;
    this.FirstDiv = false;
    this.ThirdDiv = false;
      }

      showDivT(divVal: number){
        var roundNb ;
        this.currentBtn = divVal;
roundNb =  Math.round((divVal * 0.34 /100) * 100).toFixed(2);
        this.Result = roundNb;
        this.ThirdDiv = true;
        this.FourthDiv = false;
        this.FirstDiv = false;
        this.SecondtDiv = false;
          }
        }
