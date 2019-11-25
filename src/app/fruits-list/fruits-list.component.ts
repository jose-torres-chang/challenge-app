import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits-list',
  templateUrl: './fruits-list.component.html',
  styleUrls: ['./fruits-list.component.css']
})
export class FruitsListComponent implements OnInit {
  fruitsList: Array<Fruit>;

  constructor() {
    this.fruitsList = [{name: 'apple', color: 'red'}, {name: 'orange', color: 'orange'}, {name: 'lemon', color: 'yellow'}]
  }

  upClick(i) {
    const newFruitsList = this.fruitsList.slice()
    let newPos, prev
    prev = newFruitsList[i - 1]
    newPos = newFruitsList[i]
    newFruitsList[i] = prev
    newFruitsList[i - 1] = newPos 
    this.fruitsList = newFruitsList
  }

  ngOnInit() {
  }

}

interface Fruit {
  name: String
  color: String
}
