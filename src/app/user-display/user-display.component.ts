import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserDisplayComponent implements OnInit {
  @Input() userName: string;

  constructor() { }

  ngOnInit() {
  }

}
