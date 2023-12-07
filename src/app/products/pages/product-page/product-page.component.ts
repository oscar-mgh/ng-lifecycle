import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'product-page',
  templateUrl: './product-page.component.html',
  styles: ``,
})
export class ProductPageComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  public isProductVisible: boolean = true;
  public currentPrice: number = 13;

  constructor() {
    console.log('%cProduct Component: Constructor', 'color: steelblue');
  }

  ngOnInit(): void {
    console.log('%cProduct Component: ngOnInit', 'color: steelblue');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('%cProduct Component: ngOnChanges', 'color: steelblue');
    console.log(changes);
  }
  ngDoCheck(): void {
    console.log('%cProduct Component: ngDoCheck', 'color: steelblue');
  }
  ngAfterContentInit(): void {
    console.log('%cProduct Component: ngAfterContentInit', 'color: steelblue');
  }
  ngAfterContentChecked(): void {
    console.log('%cProduct Component: ngAfterContentChecked', 'color: steelblue');
  }
  ngAfterViewInit(): void {
    console.log('%cProduct Component: ngAfterViewInit', 'color: steelblue');
  }
  ngAfterViewChecked(): void {
    console.log('%cProduct Component: ngAfterViewChecked', 'color: steelblue');
  }
  ngOnDestroy(): void {
    console.log('%cProduct Component: ngOnDestroy', 'color: steelblue');
  }

  increasePrice() {
    this.currentPrice++;
  }
}
