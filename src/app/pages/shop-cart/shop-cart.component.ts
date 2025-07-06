import {Component, EventEmitter, HostListener, Input, OnInit, Output} from "@angular/core";
import {Book} from "../../interfaces/book";
import {ShopCartService} from "../../services/shop-cart.service";
import {Observable} from "rxjs";
import {tuiIconHumo} from "@taiga-ui/icons";
import {Router} from "@angular/router";

@Component({
  selector: 'shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.less']
})
export class ShopCartComponent implements OnInit {
  public books$: Observable<Book[]> | undefined;
  public booksCommonPrice$: Observable<number> | undefined;
  public booksAmount$: Observable<number> | undefined;
  public screenWidth: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }

  constructor(
    private readonly shopCartService: ShopCartService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.books$ = this.shopCartService.selectedBooks$.asObservable();
    this.booksCommonPrice$ = this.shopCartService.booksCommonPrice$;
    this.booksAmount$ = this.shopCartService.booksAmount$;
  }

  public reset(): void {
    this.router.navigate(['']);
  }

}
