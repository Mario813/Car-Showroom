import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';


@Component({
  selector: 'app-listaveicoli',
  templateUrl: './listaveicoli.component.html',
  styleUrls: ['./listaveicoli.component.css']
})
export class ListaveicoliComponent {

  pagesArray: boolean[] = [true, false];

  displayContact(task: boolean[]) {
    task[0] = false;
    task[1] = true;
    this.eventTask.emit(task);
  }

  @Output()
  eventTask = new EventEmitter<boolean[]>();


  displayMain(task: boolean[]) {
    task[0] = true;
    task[1] = false;
    this.eventTask.emit(task);
  }  

}
