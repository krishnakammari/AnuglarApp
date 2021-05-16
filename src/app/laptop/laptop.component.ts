import { Component, OnInit } from '@angular/core';
import {product} from '../models/product.model';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent  {

  products:product[]=[

    {
      productTitle:"Technology-2",
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
      productImage:"https://apicms.thestar.com.my/uploads/images/2020/08/24/831125.jpg"
    },
    {
      productTitle:"Technology-5",
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
      productImage:"https://wallpaperaccess.com/full/4755970.jpg"
    },

    {
    productTitle:"Technology-1",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://youmatter.world/app/uploads/sites/2/2019/11/tech-planet.jpg"
    },
    
    
    {
    productTitle:"Technology-3",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://itconsultingindubai.files.wordpress.com/2016/03/choosing-a-technology-solution.jpg"
    },
    
    {
    productTitle:"Technology-4",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://itconsultingindubai.files.wordpress.com/2016/03/choosing-a-technology-solution.jpg"
    },
    
    
    
    {
    productTitle:"Technology-6",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5577975.jpg"
    }
    ];

  

}
