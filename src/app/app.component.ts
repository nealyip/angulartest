import {Component, OnInit} from '@angular/core';
import {ajax} from 'rxjs/observable/dom/ajax';
import {Observable} from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title = 'app';

    constructor() {

    }

    ngOnInit(): void {
        const c = 113 + 313 + 554;
        const a = () => console.log(`ab${c}`);
        // const streamA$ = Rx.Observable.of(1, 2, 3, 4, 5);

        // Rx.Observable.fromEvent(document, 'click')
        //     .subscribe(() => console.log(arguments));

        Rx.Observable.from([1, 2, 3, 4, 5])
            .filter(x => x % 2 === 0)
            .map(x => x * x)
            .reduce((d, b) => d + b)
            .subscribe(console.log);

        Promise.resolve([1, 2, 3, 4, 5])
            .then(res => res
                .filter(x => x % 2 === 0)
                .map(x => x * x)
                .reduce((d, b) => d + b))
            .then(console.log);


        Rx.Observable.interval(500)
            .take(2)
            .map(num => num + 2)
            .subscribe(num => console.log(num));

        Rx.Observable.of('aaa', 'bbb', 'ccc')
            .flatMap(url => Rx.Observable.fromPromise(new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Math.round(Math.random() * 1000) % 2 === 0) {
                        console.log(`retrying ${url}.`);
                        reject(url);
                    } else {
                        resolve(url);
                    }
                }, Math.random() * 3000);
            })))
            .retry(4)
            .catch(err => Rx.Observable.throw('Retry too many times'))
            .flatMap(response => Rx.Observable.of(response))
            .subscribe(console.log); // like promise.all

        Rx.Observable.fromPromise(Promise.resolve('aaa'))
            .flatMap(res => Rx.Observable.fromPromise(Promise.resolve(`${res}bbb`)))
            .flatMap(res => Rx.Observable.fromPromise(Promise.resolve(`${res}ccc`)))
            .subscribe(console.log);

        // a();
        // this.http.get('/')
        //     .subscribe(res => console.log(res));

        // ajax({url: '/', responseType: 'text/html'})
        //     .subscribe();
    }
}
