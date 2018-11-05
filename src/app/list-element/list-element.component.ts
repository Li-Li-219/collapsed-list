import { Component, OnInit, Input } from '@angular/core';
import { ListElement } from '../types/Element';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.scss']
})
export class ListElementComponent implements OnInit {
  @Input() item: ListElement;
  show = false;
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.show = !this.show;
  }

}
