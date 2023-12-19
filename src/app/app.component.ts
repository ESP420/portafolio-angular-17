import { AfterViewInit, Component, OnInit, ViewContainerRef, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map, shareReplay } from 'rxjs';
import { BooleanInput } from '@angular/cdk/coercion';
import { MatMenuModule } from '@angular/material/menu';
import { StyleManager } from './core/services/style-manager.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit, AfterViewInit {
  user!: any
  isExpanded: BooleanInput = false;
  styles = {
    darkTheme: this.styleManager.isDark,
    indigoPinkTheme: this.styleManager.isIndigoPink,
    deepPurpleAmberTheme: this.styleManager.deepPurpleAmber,
    pinkBlueGreyTheme: this.styleManager.pinkBlueGrey,
    purpleGreenTheme: this.styleManager.purpleGreen
  }
  constructor(
    private styleManager: StyleManager,
    private router: Router,
    private vref: ViewContainerRef
  ) {

  }
  ngOnInit(): void {

    this.styleManager.sideBarExpandedActivo$.subscribe((mode: any) => this.isExpanded = mode);
    /* this.authService.activeUser$.subscribe(user => this.user = user) ;  */
  }
  ngAfterViewInit() {

  }
  setSideBarMode(expanded: BooleanInput) {
    this.styleManager.changeSideBarExpanded(expanded)
  }
  toggleBlueSkyTheme() {
    this.styleManager.removeThemes();
  }
  toggleDarkTheme() {
    this.styleManager.toggleDarkTheme();
    this.styles.darkTheme = !this.styles.darkTheme;
  }
  toggleIndigoPinkTheme() {
    this.styleManager.toggleIndigoPinkTheme();
    this.styles.indigoPinkTheme = !this.styles.indigoPinkTheme;
  }
  togglePurpleAmberTheme() {
    this.styleManager.toggleDeepPurpleAmberTheme();
    this.styles.indigoPinkTheme = !this.styles.indigoPinkTheme;
  }
  toggleBlueGreyTheme() {
    this.styleManager.togglePinkBlueGreyTheme();
    this.styles.pinkBlueGreyTheme = !this.styles.pinkBlueGreyTheme;
  }
  togglePurpleGreenTheme() {
    this.styleManager.togglePurpleGreenTheme();
    this.styles.indigoPinkTheme = !this.styles.indigoPinkTheme;
  }
  toggleGrayTheme() {
    this.styleManager.toggleGrayTheme();
    this.styles.indigoPinkTheme = !this.styles.indigoPinkTheme;
  }
}