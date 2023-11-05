import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../components/dialog/dialog.component";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }
  openDialog(videoId: string): void {
    this.dialog.open(DialogComponent, {
      width: '560px',
      data: videoId
    });
  }
}
