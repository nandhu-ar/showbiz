import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'showbiz-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  selectedIndex = 1;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

}
