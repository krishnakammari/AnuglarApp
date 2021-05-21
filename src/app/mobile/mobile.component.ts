import { Component, OnInit } from '@angular/core';
import {product} from '../models/product.model';
import {MobilesdataService} from '../mobilesdata.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  mobiles:product[]=[];
  constructor(private obj:MobilesdataService){}

  ngOnInit(){
    this.mobiles=this.obj.getMobilesData();
  }
  
    list=[];
    counter:number=0;
    getDataFromChild(productTitleImport)
    {
      this.list.push(productTitleImport);
      this.counter++;
    }

}
