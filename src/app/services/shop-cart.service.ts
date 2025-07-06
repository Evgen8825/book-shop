import {Injectable, OnInit} from "@angular/core";
import {Book} from "../interfaces/book";
import {BehaviorSubject, map, Observable} from "rxjs";

@Injectable()
export class ShopCartService {
  public selectedBooks$ = new BehaviorSubject<Book[]>([]);

  constructor() {
    const books = localStorage.getItem('books');
    this.selectedBooks$.next(books ? JSON.parse(books) : []);
  }

  public addBook(book: Book) {
    const selectedBooks = this.selectedBooks$.getValue();
    this.selectedBooks$.next([...selectedBooks, book]);
    localStorage.setItem('books', JSON.stringify(this.selectedBooks$.getValue()));
  }

  public removeBook(book: Book) {
    const selectedBooks = this.selectedBooks$.getValue();
    this.selectedBooks$.next(selectedBooks.filter((book) => book.id !== book.id));
  }

  public get booksAmount$(): Observable<number> {
    return this.selectedBooks$.pipe(
      map(books => books.reduce((total, book) => ++total, 0)),
    );
  }

  public get booksCommonPrice$(): Observable<number> {
    return this.selectedBooks$.pipe(
      map(books => books.reduce((total, book) => total + book.price, 0)),
    );
  }
}
