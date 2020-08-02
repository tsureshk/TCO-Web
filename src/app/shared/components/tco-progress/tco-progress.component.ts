import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-tco-progress',
  templateUrl: './tco-progress.component.html',
  styleUrls: ['./tco-progress.component.scss']
})
export class TcoProgressComponent implements OnInit {

  progressName ;

  constructor(private local:LocalService) { 
  }

  ngOnInit() {

    this.local.progressNameResponse$.subscribe(res => {
      this.progressName = res;
    });

  }

}
