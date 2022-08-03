import { Injectable } from '@angular/core';
import { interval, take, Observable, map } from 'rxjs';

@Injectable({
   providedIn: 'root',
})
export class DataService {
   private readonly ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

   constructor() {}

   public getNumbers(): Observable<number> {
      return interval(1000).pipe(take(this.ALPHABET.length));
   }

   public getLetters(): Observable<string> {
      return interval(1000).pipe(
         map((index) => this.ALPHABET[index]),
         take(this.ALPHABET.length)
      );
   }
}
