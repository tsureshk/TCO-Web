import { Component } from '@angular/core';
import { TCO } from './Model/TCO';
import { TCOService } from './shared/services/tco.service';
// import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
// import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TcoWeb';

}
