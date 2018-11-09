import { Component, OnInit, OnDestroy } from '@angular/core';
//OnInit- on initialization
//OnDestroy - on destruction of the DOM.
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
// extends means that a class is adding onto another class, while implements means that a class wants to use another class.

  title: String = 'Angular Intro';
  name: String = 'Jacob';
  currentDay: any = new Date().getDay();

  days: Object = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  };

  // 11/8/2018
  languages: Object[] = [
    //had it as languages: Array = [...];
    // 'English',
    // 'Spanish',
    // 'French',
    // 'German'

    //now making an object of objects
    // {
    //   name: 'English',
    //   country: 'USA'
    // },
    // {
    //   name: 'Spanish',
    //   country: 'Spain'
    // },
    // {
    //   name: 'French',
    //   country: 'France'
    // },
    // {
    //   name: 'German',
    //   country: 'Germany'
    // }
    {
      names: ['English', 'Spanish'],
      country: 'USA'
    },
    {
      names: ['Spanish', 'Arabic'],
      country: 'Spain'
    },
    {
      names: ['French', 'Basque'],
      country: 'France'
    },
    {
      names: ['German', 'English'],
      country: 'Germany'
    }
  ];

  constructor() { }

  renderThisDay(): String {
    return this.days[this.currentDay];
  }//have the function call below the constructor, but above ngOnInit.

  ignoreLanguage(language): Boolean {
    const langToIgnore = 'English';
    return !language.names.includes(langToIgnore);
    // if (language.names.includes(langToIgnore)) return false;
  }

  renderSpokenLanguages(languages): String {
    return languages.join(', ');
  }

  ngOnInit() {
    console.log('Hello');
  }

  ngOnDestroy() {
    console.log('Goodbye');
  }

}
