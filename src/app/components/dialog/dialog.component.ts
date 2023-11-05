import {Component, Inject} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  videoUrl: SafeResourceUrl;

  constructor(
    @Inject(MAT_DIALOG_DATA) private videoId: string,
    private sanitizer: DomSanitizer
  ) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${videoId}`);
  }
}
