import { BooleanInput } from '@angular/cdk/coercion';
import { Injectable } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StyleManager {
  isDark = false;
  isIndigoPink = false
  deepPurpleAmber = false
  pinkBlueGrey = false
  purpleGreen = false
  isGray = false
  constructor() { }

  setAllFalse() {
    this.isDark = false;
    this.isIndigoPink = false
    this.deepPurpleAmber = false
    this.pinkBlueGrey = false
    this.purpleGreen = false
    this.isGray = false
  }
  removeThemes() {
    this.removeStyle('dark-theme');
    document.body.classList.remove('dark-theme');
    this.removeStyle('indigo-pink-theme');
    document.body.classList.remove('indigo-pink-theme');
    this.removeStyle('deeppurple-amber-theme');
    document.body.classList.remove('deeppurple-amber-theme');
    this.removeStyle('pink-blueGrey-theme');
    document.body.classList.remove('pink-blueGrey-theme');
    this.removeStyle('purple-green-theme');
    document.body.classList.remove('purple-green-theme');
    this.removeStyle('gray-theme');
    document.body.classList.remove('gray-theme');
    this.setAllFalse()
  }
  public toggleDarkTheme() {
    if (this.isDark) {
      this.removeStyle('dark-theme');
      document.body.classList.remove('dark-theme');
      this.setAllFalse()
      this.isDark = false;
    } else {
      this.removeThemes();
      const href = 'dark-theme.css';
      this.getLinkElementForKey('dark-theme').setAttribute('href', href);
      document.body.classList.add('dark-theme');
      this.isDark = true;
    }
  }
  public toggleIndigoPinkTheme() {
    if (this.isIndigoPink) {
      this.removeStyle('indigo-pink-theme');
      document.body.classList.remove('indigo-pink-theme');
      this.setAllFalse()
      this.isIndigoPink = false;
    } else {
      this.removeThemes();
      const href = 'indigo-pink-theme.css';
      this.getLinkElementForKey('indigo-pink-theme').setAttribute('href', href);
      document.body.classList.add('indigo-pink-theme');
      this.isIndigoPink = true;
    }
  }
  toggleDeepPurpleAmberTheme() {
    if (this.deepPurpleAmber) {
      this.setAllFalse()
      this.removeStyle('deeppurple-amber-theme');
      document.body.classList.remove('deeppurple-amber-theme');
      this.deepPurpleAmber = false;
    } else {
      this.removeThemes();
      const href = 'deeppurple-amber-theme.css';
      this.getLinkElementForKey('deeppurple-amber-theme').setAttribute('href', href);
      document.body.classList.add('deeppurple-amber-theme');
      this.deepPurpleAmber = true;
    }
  }
  togglePinkBlueGreyTheme() {
    if (this.pinkBlueGrey) {
      this.setAllFalse()
      this.removeStyle('pink-blueGrey-theme');
      document.body.classList.remove('pink-blueGrey-theme');
      this.pinkBlueGrey = false;
    } else {
      this.removeThemes();
      const href = 'pink-blueGrey-theme.css';
      this.getLinkElementForKey('pink-blueGrey-theme').setAttribute('href', href);
      document.body.classList.add('pink-blueGrey-theme');
      this.pinkBlueGrey = true;
    }
  }
  togglePurpleGreenTheme() {
    if (this.purpleGreen) {
      this.setAllFalse()
      this.removeStyle('purple-green-theme');
      document.body.classList.remove('purple-green-theme');
      this.purpleGreen = false;
    } else {
      this.removeThemes();
      const href = 'purple-green-theme.css';
      this.getLinkElementForKey('purple-green-theme').setAttribute('href', href);
      document.body.classList.add('purple-green-theme');
      this.purpleGreen = true;
    }
  }
  toggleGrayTheme() {
    if (this.isGray) {
      this.setAllFalse()
      this.removeStyle('gray-theme');
      document.body.classList.remove('gray-theme');
      this.isGray = false;
    } else {
      this.removeThemes();
      const href = 'gray-theme.css';
      this.getLinkElementForKey('gray-theme').setAttribute('href', href);
      document.body.classList.add('gray-theme');
      this.isGray = true;
    }
  }
  removeStyle(key: string) {
    const existingLinkElement = this.getExistingLinkElementByKey(key);
    if (existingLinkElement) {
      document.head.removeChild(existingLinkElement);
    }
  }
  /* To get the link element for a given key, we first try to find an existing link element with that key using the getExistingLinkElementByKey method. If such an element is found, we return it. Otherwise, we create a new link element with the given key using the createLinkElementWithKey method and return that. */
  private getLinkElementForKey(key: string) {
    return this.getExistingLinkElementByKey(key) || this.createLinkElementWithKey(key);
  }

  private getExistingLinkElementByKey(key: string) {
    return document.head.querySelector(
      `link[rel="stylesheet"].${this.getClassNameForKey(key)}`
    );
  }
  /*  This method creates a new link element with the given key and returns it. */
  private createLinkElementWithKey(key: string) {
    const linkEl = document.createElement('link');
    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.classList.add(this.getClassNameForKey(key));
    document.head.appendChild(linkEl);
    return linkEl;
  }
  //To get the class name for a given key, the function getClassNameForKey concatenates the string style-manager- with the input key. 
  private getClassNameForKey(key: string) {
    return `style-manager-${key}`;
  }
  //CONTROL BOOL FOR SCREAM CHANGE 

  private modeSidebar = new BehaviorSubject<MatDrawerMode>("side");
  ActiveMode$ = this.modeSidebar.asObservable();
  changeModeSidebar(mode: MatDrawerMode) {
    this.modeSidebar.next(mode);
  }
  private sideBarExpanded = new BehaviorSubject<BooleanInput>(false);
  sideBarExpandedActivo$ = this.sideBarExpanded.asObservable();
  changeSideBarExpanded(mode: BooleanInput) {
    this.sideBarExpanded.next(mode);
  }
}

