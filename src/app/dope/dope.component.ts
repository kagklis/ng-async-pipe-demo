import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
   selector: 'app-dope',
   templateUrl: './dope.component.html',
   styleUrls: ['./dope.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DopeComponent implements OnInit {
   @Input() data$!: Observable<string | number>;
   public Number = Number;

   constructor() {}

   ngOnInit(): void {}
}
