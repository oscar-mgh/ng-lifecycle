import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'product-price',
  templateUrl: './price.component.html',
  styles: ``,
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  public price: number = 0;

  public interval$?: Subscription;

  ngOnInit(): void {
    console.log('%cPrice Component: ngOnInit', 'color: #ADD3B9');

    this.interval$ = interval(1000).subscribe((value) =>
      console.log(`%cTick: ${value}`, 'color: red;')
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('%cPrice Component: ngOnChanges', 'color: #ADD3B9');
    console.log(changes);
  }

  ngOnDestroy(): void {
    console.log('%cPrice Component: ngOnDestroy', 'color: #ADD3B9');
    this.interval$?.unsubscribe();
  }
}
