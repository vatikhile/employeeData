import { Component, OnInit ,Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA)private data:{message:any} ) { }
msg='hiii'

  ngOnInit() {
    console.log('dialog')
  }

}
