import { Injectable } from '@angular/core';
import { IpcRenderer } from 'electron';
import { Observable, of, from } from 'rxjs';
import { SomethingData } from '../../../Common/SomethingData';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  public Staff :SomethingData[] = []
  private ipc: IpcRenderer | undefined;


  constructor() {
      this.Staff = [new SomethingData(1, "uno"), new SomethingData(2, "dos")] 
      if (window.require) {
        try {
          this.ipc = window.require('electron').ipcRenderer;
        } catch (e) {
          throw e;
        }
      } 
      else {
        console.warn('Electron\'s IPC was not loaded');
      }
  }

  public getSomething(): Observable<SomethingData[]> {
    //return of(this.Staff);
    let somethings = this.ipc?.invoke("/Something", "POST", new SomethingData(0, "cero"));
    if (somethings)
      return from(somethings);
    
    return from([]);

    //return from(this.ipc.invoke("my_channel", "POST", new Something(0, "cero")));
  }

}
