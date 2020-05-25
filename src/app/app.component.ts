import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from './share/service/theme.service';
import constants from './utils/constants/constants';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MobileService } from './share/service/mobile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public CONSTANTS = constants;

  public isDarkTheme: Observable<boolean>;
  public isMobile: boolean;

  title = this.CONSTANTS.TITLE_APP;

  constructor(
    private themeService: ThemeService,
    private mobileService: MobileService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.mobileService.setIsMobile(state.matches);
          this.isMobile = state.matches;
        } else {
          this.mobileService.setIsMobile(state.matches);
          this.isMobile = state.matches;
        }
      });

    this.isDarkTheme = this.themeService.isDarkTheme;
  }
}
