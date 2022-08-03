import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
})
export class AppComponent {
   public readonly Option: typeof Option = Option;
   public selected = 'numbers';
   public data$: Observable<string | number>;

   constructor(private dataService: DataService) {
      this.data$ = dataService.getNumbers();
   }

   selectionChanged(value: Option) {
      console.log(value);
      this.data$ = value === Option.NUMBERS ? this.dataService.getNumbers() : this.dataService.getLetters();
   }
}

enum Option {
   NUMBERS = 'numbers',
   LETTERS = 'letters',
}
