import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter = 0;                 
  activeDecrease = false;      

  increase() {
    this.counter++;           
    this.updateActiveDecrease(); 
  }

  decrease() {
    if (this.counter > 0) {     
      this.counter--;          
      this.updateActiveDecrease(); 
    }
  }

  inactiveDecrease() {
    this.activeDecrease = !this.activeDecrease; 
  }

  private updateActiveDecrease() {
    this.activeDecrease = this.counter === 0; 
  }
}
