import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  
  f:Array<File> =[];

  handleFileInput(files: FileList) {
    let i=0;
    while(files.item(i))
    {
      this.f.push(files.item(i));
      i=i+1;
    }
    console.log(this.f);
    
  }
}
