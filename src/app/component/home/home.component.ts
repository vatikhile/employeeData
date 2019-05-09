import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { ServiceService } from '../../core/httpService/service.service'

export interface PeriodicElement {
  name: string;
  weight: number;



}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  private employee: any[];


  constructor(private dialog: MatDialog, private service: ServiceService) {

    this.service.getEmployee().subscribe((res: any[]) => {
      console.log("res", res);
      this.employee = res;
      console.log(this.employee)

    });
  }

  ngOnInit() {


  }
  openDialog() {


    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
  
    this.dialog.open(DialogBoxComponent, dialogConfig);


  }
}
