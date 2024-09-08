import { Component, OnInit } from '@angular/core';
import { SAMPLE_DATA } from './constants/proj.cns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'movieDemoApp';
  
  ngOnInit(): void {
    localStorage.setItem('favMovies','{}');
  }
}
