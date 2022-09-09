import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'showbiz-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  private width: number = 0;
  private heigth: number = 0;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.width = this.el?.nativeElement?.offsetWidth;
    this.width = this.width > 1200 ? this.width * 0.65 : this.width > 600 ? this.width *0.80 : this.width; 
    this.heigth = this.width * 0.60;
    
  }

  get ytPlayerWidth() {
    return this.width ?? 0;
  }
  
  get ytPlayerHeight() {
    return this.heigth ?? 0;
  }

}
