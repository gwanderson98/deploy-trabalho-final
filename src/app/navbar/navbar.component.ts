import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private navService: NavbarService ) { }

  url_actual;

  ngOnInit(): void {
    this.url_actual = window.location.pathname;
    console.log("URL = ", this.url_actual)
  }
  resultData:Object;

  getResult(value){
    this.navService.getResultSearch(value).subscribe(data => {
      console.log(data);
      document.getElementById('resultados').style.display = '';
      this.resultData = data;
    });
  }

}
