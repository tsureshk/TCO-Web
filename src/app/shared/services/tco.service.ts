import { TCO } from '../../Model//TCO';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TCOService {
 private tco: TCO = new TCO();

 getTCO(): TCO {
 return this.tco;
 }

 setTCO(tcos: TCO) {
 this.tco = tcos;
 }

}
