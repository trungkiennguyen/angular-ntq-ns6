import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserDisplayComponent implements OnInit {
  @Input() userName: string;
  name: string = 'You can write your own custom pipes.';
  arr: number[] = [1,5,6,7,2,3,10,8,9];

  constructor() { }

  ngOnInit() {
  }

}
