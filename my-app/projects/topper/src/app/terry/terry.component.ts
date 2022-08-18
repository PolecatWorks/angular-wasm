import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
// import * as wasm from "mywasmproject";
import { Universe } from 'mywasmproject';
import { memory, universe_cells } from 'mywasmproject/mywasmproject_bg.wasm';

import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-terry',
  templateUrl: './terry.component.html',
  styleUrls: ['./terry.component.scss']
})
export class TerryComponent implements OnInit {
  
  myUniverse!: Universe;
  myPreText: string = "beginning";

  isPaused: boolean=false;

  subscription !: Subscription;

  cellsAsRows!: Array<Uint8Array>;

  constructor() {
    this.myUniverse = Universe.new();
    const cellsPtr = this.myUniverse.cells();

    this.cellsAsRows = new Array();
    for (var row=0;row<this.height;row++) {
      this.cellsAsRows.push(new Uint8Array(memory.buffer, cellsPtr + this.width*row, this.width))
    }

  }

  public get width(): number {
    return this.myUniverse.width();
  }

  public get height(): number {
    return this.myUniverse.height();
  }

  border : number = 10;
  cell : number = 5;

  ngOnInit(): void {
    // this.mypre.nativeElement.textContent="smoke";
    // wasm.greet();
    this.myPreText = this.myUniverse.render();

    this.subscription = timer(0,10).pipe(
      switchMap(async () => {
        if (!this.isPaused) {
          this.myUniverse.tick();
        }
      })
    ).subscribe(
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
