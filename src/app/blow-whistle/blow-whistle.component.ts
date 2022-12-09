import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith, tap, filter } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { CountryInfo, UtilService } from '../services/util.service';
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-blow-whistle',
  templateUrl: './blow-whistle.component.html',
  styleUrls: ['./blow-whistle.component.css']
})
export class BlowWhistleComponent implements OnInit {

  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tags: string[] = ['gov'];
  tagsCtrl = new FormControl(this.tags.toString());
  countryCtrl = new FormControl();
  storyCtrl = new FormControl();
  titleCtrl = new FormControl();
  publisherEthCtrl = new FormControl('', [Validators.pattern(/^0x[a-fA-F0-9]{40}$/)]); // for other addresses https://gist.github.com/MBrassey/623f7b8d02766fa2d826bf9eca3fe005
  filteredTags: Observable<string[]> | undefined;
  allTags: string[] = ['Breaking', 'Government', 'Private',]; // etc.
  countryFilteredOptions: Observable<CountryInfo[]> | undefined

  @ViewChild('tagInput') tagInput!: ElementRef<HTMLInputElement>;
  
  constructor(private utilService: UtilService) {
    this.filteredTags = this.tagsCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => tag ? this._filterTags(tag) : this.allTags.slice())
    );

    this.countryFilteredOptions = this.countryCtrl?.valueChanges.pipe(
      filter(v => v != null),
      // tap(value => console.log('--', value)),
      startWith(''),
      map(value => (typeof value === 'string' ? value : `${value.name}`)),
      map(name => (name ? this._filterCountries(name) : this.utilService.countries.slice())), // not sure what the .slice() is doing
    );
  }

  ngOnInit(): void {
    console.log('process', process.env);
    console.log('environment', environment);
  }

  countryDisplayFn(location: string): string {
    return location;
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
    
    this.utilService.createNewStory({
      story: this.storyCtrl.value,
      title: this.titleCtrl.value,
      tags: this.tagsCtrl.value,
      location: this.countryCtrl.value,
      publishingEthAddress: this.publisherEthCtrl.value
    }).subscribe((res) => {
      console.log('res', res);
      
    }, (err) => {
      console.log('err', err);
      this.utilService.showNotification(err.error?.error?.reason)
      
    })
  }

  confirmEthAddress(): void {
    this.utilService.getEthAddressFromMetaMaskBrowserPlugin()
    // this.utilService.useEtherScan()
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
    this.tagsCtrl.setValue(this.tags.toString());
  }

  _filterTags(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allTags.filter(tag => tag.toLowerCase().includes(filterValue));
  }

}
