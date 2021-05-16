import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {CountriesdataService} from '../countriesdata.service';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit,OnDestroy {


  mySubscribtion:Subscription;

  myPost:any[]=[];

  constructor(private fsObj : CountriesdataService) { }

  ngOnInit(): void {
    this.mySubscribtion=this.fsObj.getPost().subscribe(
      postData=>{
        this.myPost=postData;
        //console.log(this.myPost);
        
      },
      err=>{
        console.log('error',err)
      }
    )
    
  }
  ngOnDestroy(){
    this.mySubscribtion.unsubscribe;
    
  }

  
  

}
