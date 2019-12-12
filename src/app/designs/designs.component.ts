import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-designs',
  templateUrl: './designs.component.html',
  styleUrls: ['./designs.component.scss']
})
export class DesignsComponent implements OnInit {
  logos: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getLogos().then(res=>{
      console.log(res)
    });
  }
  getLogos(){
    return this.http.get('assets/logos.json', { responseType: 'json'}).toPromise().then((store: any)=>{
      this.logos = store.logo;
    });
  }

}
