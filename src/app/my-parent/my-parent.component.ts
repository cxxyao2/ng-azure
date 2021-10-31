import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-my-parent',
  templateUrl: './my-parent.component.html',
  styleUrls: ['./my-parent.component.css'],
})
export class MyParentComponent implements OnInit, OnDestroy {
  timer$?: Observable<number>;
  title = 'Good parents';
  user = 'alice';
  myHero = {
    name: 'IronMan',
    age: 40,
  };
  ngUntil$: Subject<void> = new Subject<void>();
  constructor() {}

  ngOnInit(): void {
    this.timer$ = timer(100, 2000).pipe(takeUntil(this.ngUntil$));
  }

  createObservable(): void {
    const observable = new Observable((observer: Observer<string>) => {
      console.log('Text inside an observable');
      observer.next('Hello world!');
      observer.complete();
    });

    console.log('Before subscribing an Observable');

    observable.subscribe((message: any) => console.log(message));
  }

  onEvent(e: any) {
    console.log('e', e);
  }

  onClick(values: any) {
    console.log('values are', values);
  }

  ngOnDestroy() {
    this.ngUntil$?.next();
    this.ngUntil$?.complete();
  }
}
