import './style.css';

import { of, Observable, interval, MonoTypeOperatorFunction, pipe } from 'rxjs';
import { tap, take, map } from 'rxjs/operators';

// export function log<T>(): (source$: Observable<T>) => Observable<T> {
//   return (source$) => source$.pipe(tap(console.log));
// }
const source$: Observable<string> = of('asd', 'asd', 'asf').pipe(take(3));

// export function identity<T>(source$:Observable<T>):Observable<T>{
//   return source$.pipe(tap(console.log));
// }
export function logWithTag<T>(tag: string): MonoTypeOperatorFunction<T> {
  return pipe(tap((value) => console.log(`${tag}:${value}`)));
}
source$.pipe(logWithTag('vishnu')).subscribe((value) => {
  console.log(`Testing :${value}`);
});

// Open the console in the bottom right to see results.
