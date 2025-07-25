import { Component, Input, Output , EventEmitter, SimpleChange, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child implements OnChanges {
ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
//to send parameter to parent component, we can use @Input decorator
@Input() childData: string = 'Default Child Data';
//to send data to parent we use @output decorator
@Output() childEvent: EventEmitter<string> = new EventEmitter<string>();
sayHello(){
 // console.log('Hello from Child Component');
  // Emit an event to the parent component
  this.childEvent.emit('Hello from Child Component to Parent!');
}

}
