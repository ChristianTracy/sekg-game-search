import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter } from '@angular/core';

@Component({
  selector: 'search-box',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  text: String;
  @Input() loading: Boolean;
  @Output() searchEvent = new EventEmitter<String>();
  constructor() {
    this.text = '';
  }

  inputChangeHandler(search: any) { // without type info
    this.text = search;
  }

  onSearchClickHandler(event):void {
    this.searchEvent.emit(this.text);
  }

  ngOnInit(): void {
  }

}
