import {Component, HostListener, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, combineLatest, map, Observable, startWith, tap} from "rxjs";
import {Book} from "../../interfaces/book";
import { groupBy } from "lodash";
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {ShopCartService} from "../../services/shop-cart.service";
import {BooksService} from "../../services/books.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  public books$: Observable<any> | undefined;

  public screenWidth: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private shopCartService: ShopCartService,
    private booksService: BooksService,
  ) { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;

    this.booksService.search(null);
    this.booksService.setCategory(null);

    this.books$ = this.http.get<Book[]>('assets/books.json').pipe(
      map((books: Book[]) =>
        Object.entries(groupBy(books, 'category'))
          .map(([category, books]) => ({ category, books })),
      ),
    );

    this.screenWidth = window.innerWidth;
  }

  public showCategory(category: string | null): void {
    this.booksService.setCategory(category);
    this.router.navigate(['category']);
  }

  public showBook(book: Book): void {
    this.booksService.setBook(book);
    this.router.navigate(['book']);
  }

  public selectBook(book: Book): void {
    this.shopCartService.addBook(book);
  }
}
