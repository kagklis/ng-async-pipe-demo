import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
   selector: 'app-regular',
   templateUrl: './regular.component.html',
   styleUrls: ['./regular.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegularComponent implements OnChanges, OnDestroy {
   @Input() data$!: Observable<string | number>;

   private subscription!: Subscription;
   public data!: string | number | null;

   constructor(private cdr: ChangeDetectorRef) {}

   ngOnChanges(changes: SimpleChanges): void {
      if (this.subscription) {
         this.data = null;
         this.subscription.unsubscribe();
      }
      if (changes['data$'].currentValue) {
         console.log('here');

         this.subscription = this.subscribeToData();
      }
   }

   ngOnDestroy(): void {
      this.subscription.unsubscribe();
   }

   private subscribeToData(): Subscription {
      return this.data$.subscribe((data) => {
         this.data = data;
         this.cdr.markForCheck();
      });
   }
}
