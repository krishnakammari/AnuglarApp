import { Component, EventEmitter, Input, Output } from '@angular/core';
import { product } from '../models/product.model';

@Component({
  selector: 'app-prod-card',
  templateUrl: './prod-card.component.html',
  styleUrls: ['./prod-card.component.css']
})
export class ProdCardComponent {


  @Input() productObj:product;
  @Output() myEvent=new EventEmitter();
  
  sendDataToParent(productTitle)
  {
    //emiting data to parent
    //console.log(productTitle);
    
    this.myEvent.emit(productTitle);
  }

}
