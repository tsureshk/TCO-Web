import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LocalService } from '../../shared/services/local.service';
import { TCO } from '../../Model//TCO';
import { TCOService } from '../../shared/services/tco.service';
import { ClientInput } from '../../Model/ClientInput';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  tco: TCO;
  clientInput: ClientInput;

  constructor(private route: Router , private local: LocalService, private tcoservice: TCOService) { }

  ngOnInit() {
  this.tco = this.tcoservice.getTCO();
  console.log(this.tco);
  this.clientInput = this.tco.clientInput;
  }

  goToLogin() {
    this.tcoservice.setTCO(this.tco);
    this.local.setProgress('Client');
    this.route.navigateByUrl('home/login');
  }

}
