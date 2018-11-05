import { LIST_DATA_MOCK_RESPONSE } from './list.data.mock';
import { Component, OnInit, Input } from '@angular/core';
import { ListElement } from '../types/Element';
import { SpecialElement } from '../types/Element';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  itemList:ListElement[];
  specialElement: SpecialElement;
  constructor() { }

  ngOnInit() {
    this.itemList = LIST_DATA_MOCK_RESPONSE.itemList;
    this.specialElement = LIST_DATA_MOCK_RESPONSE.special;
  }


}