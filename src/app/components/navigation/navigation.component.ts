import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    MatSidenavModule, 
    MatToolbarModule, 
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  protected isExpanded = true;
  protected navigationElements: NavigationElement [] = [];

  ngOnInit(): void {
    this.setNavigationElements();
  }

  private setNavigationElements() { 
    this.navigationElements = [
      { name: 'Home', path: '/home'},
      { name: 'Documents', path: '/documents'}
    ];
  }
}

export interface NavigationElement {
  name: string;
  path: string;
}