import {Component, EventEmitter, HostListener, Input, OnInit, Output} from "@angular/core";
import {Book} from "../../interfaces/book";
import {BooksService} from "../../services/books.service";
import {Observable} from "rxjs";
import {ShopCartService} from "../../services/shop-cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.less']
})
export class BookComponent implements OnInit {
  public book$: Observable<Book | null> | undefined;

  public screenWidth: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }

  constructor(
    private booksService: BooksService,
    private shopCartService: ShopCartService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.book$ = this.booksService.currentBook$.asObservable();
  }

  public selectBook(book: Book) {
    this.shopCartService.addBook(book);
  }

  public reset(): void {
    this.booksService.setBook(null);
    this.router.navigate(['']);
  }

  public showCategory(category: string) {
    this.booksService.setCategory(category);
    this.router.navigate(['category']);
  }

}
