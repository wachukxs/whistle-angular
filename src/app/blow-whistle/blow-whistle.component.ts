import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith, tap, filter } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { CountryInfo, UtilService } from '../services/util.service';

@Component({
  selector: 'app-blow-whistle',
  templateUrl: './blow-whistle.component.html',
  styleUrls: ['./blow-whistle.component.css']
})
export class BlowWhistleComponent implements OnInit {

  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagsCtrl = new FormControl();
  countryCtrl = new FormControl();
  filteredTags: Observable<string[]>;
  tags: string[] = ['gov'];
  allTags: string[] = ['Breaking', 'Government', 'Private',]; // etc.
  countryFilteredOptions: Observable<CountryInfo[]> | undefined

  @ViewChild('tagInput') tagInput!: ElementRef<HTMLInputElement>;
  
  constructor(private utilService: UtilService) {
    this.filteredTags = this.tagsCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filterFruits(fruit) : this.allTags.slice()));

      this.countryFilteredOptions = this.countryCtrl?.valueChanges.pipe(
        filter(v => v != null),
        // tap(value => console.log('--', value)),
        startWith(''),
        map(value => (typeof value === 'string' ? value : `${value.name}`)),
        map(name => (name ? this._filterCountries(name) : this.utilService.countries.slice())), // not sure what the .slice() is doing
      );
  }

  ngOnInit(): void {

  }

  countryDisplayFn(location: CountryInfo): string {
    return location && location.name ? location.name : '';
  }

  clearCountryAutocomplete(event: Event, trigger: MatAutocompleteTrigger): void {
    event.preventDefault();
    this.countryCtrl?.setValue('');
    trigger.openPanel()
  }

  countryOptSel(evt: MatAutocompleteSelectedEvent) {
    console.log('??', evt.option.value);    
  }



  _filterCountries(name: string): CountryInfo[] {
    const filterValue = name.toLowerCase();

    // we should include .iso etc.
    return this.utilService.countries.filter(option => `${option.name} ${option?.iso_code_2} ${option?.aka_name}`.toLowerCase().includes(filterValue));
  }

  saveDraft(): void {
    console.log('saving draft...');
    
  }

  publishStory(): void {
    console.log('publishing...');
  }

  addTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add a tag
    if (value) {
      this.tags.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.tagsCtrl.setValue(null);
  }

  removeTag(fruit: string): void {
    const index = this.tags.indexOf(fruit);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  tagsSelected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.viewValue);
    this.tagInput.nativeElement.value = '';
    this.tagsCtrl.setValue(null);
  }

  _filterFruits(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allTags.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

}
