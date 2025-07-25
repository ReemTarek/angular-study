import { Component } from '@angular/core';
import { Child } from '../child/child';
@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent {
msg: string = 'Hello Parent';
parentMsg: string = '';
// This method will be called when the child emits an event
onChildEvent(event: string) {
  console.log('Received from child:', event);
  this.parentMsg = event; // Update the message with the received event
  }
}
