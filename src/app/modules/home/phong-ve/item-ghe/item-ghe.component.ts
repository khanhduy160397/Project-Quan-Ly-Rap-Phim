import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-item-ghe',
  templateUrl: './item-ghe.component.html',
  styleUrls: ['./item-ghe.component.scss']
})
export class ItemGheComponent implements OnInit {

  constructor() { }
  @Input() ghe;
  @Output() eventDatGhe = new EventEmitter
  dangChon:boolean = true;
  ngOnInit() {
    this.chonVe();
  }
  chonVe(){
    this.dangChon = !this.dangChon;
    let objGhe : any = {
      ghe: this.ghe,
      dangChon: this.dangChon
    }
    this.eventDatGhe.emit(objGhe);
  }
}
