import { Component, OnInit, Input } from '@angular/core';
import { SharingServiceService } from 'src/app/_core/services/sharing-service.service';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.scss']
})
export class ModalPopupComponent implements OnInit {

  constructor(private shareData : SharingServiceService) { }
  modalItem:[];
  @Input() movie;
  ngOnInit() {
    this.shareData.shareModal.subscribe(res=>{
      console.log(res);
      this.movie = res;
      console.log(this.movie);
    })
  }

}
