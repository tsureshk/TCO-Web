import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TCO } from '../../Model//TCO';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  public tco;

  progressName = 'Information' ;

  constructor() { }

  private progressNameSource = new BehaviorSubject('Information');
  progressNameResponse$ = this.progressNameSource.asObservable();

  getTCO(): TCO {
    return this.tco;
    }

    setTCO(tcos: TCO) {
    this.tco = tcos;
    }


  setProgress(value) {
    this.progressNameSource.next(value);
  }

}
