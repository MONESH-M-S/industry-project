import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  value?: Observable<any>;
  connection: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private db: AngularFireDatabase) {}

  getValues() {
    this.value = this.db.list('FirebaseIOT').valueChanges();
  }

  getUpdatedValues() {
    return this.value;
  }

  updateConnectionStatus(state: boolean) {
    this.connection.next(state);
  }
}
