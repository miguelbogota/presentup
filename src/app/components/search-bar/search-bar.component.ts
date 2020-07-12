import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  // Search form
  searchForm = this.fb.group({
    searchField: ['']
  });

  constructor(
    private fb: FormBuilder
  ) { }

  public ngOnInit(): void {
  }

  public search(): void {
    console.log(this.searchField.value);
  }

  // Getters & Setters
  get searchField(): AbstractControl { return this.searchForm.get('searchField'); }

}
