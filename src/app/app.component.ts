import { Component, ViewChild, OnInit} from '@angular/core';
import { SideNavService } from './side-nav.service';

import { MatSidenav } from '@angular/material';

import data from '../assets/DatabaseLayout.json';
import { TreelistService } from './treelist.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';

  public treeLists = [];
  public currentlySelectedTree;
  public currentlySelectedTreeId;
  @ViewChild('mySideNav') public myNav: MatSidenav;


  constructor (private sidenav: SideNavService, private treelistsvc: TreelistService) {

    this.sidenav.sideNavToggler$.subscribe((status) => {
      if (status) {
        this.openSideNav();
      } else {
        this.closeSideNav();
      }
    });

    this.treelistsvc.treeToggler$.subscribe((status) => {
      this.currentlySelectedTree = treelistsvc.currentlySelectedTree;
      this.currentlySelectedTreeId = treelistsvc.currentlySelectedTreeId;
      this.treelistsvc.clearHiddenChildren();
    });

    for (const c of data.children) {
      const alist = [];
      alist.push(c);
      this.treeLists.push([alist]);
    }

    this.treelistsvc.setCurrentlySelectedTree(this.treeLists[0]);
    this.currentlySelectedTree = treelistsvc.currentlySelectedTree;
    this.currentlySelectedTreeId = this.currentlySelectedTree[0][0].id;

  }

  differentTreeSelected(t) {
    if (this.currentlySelectedTree !== t) {
      this.treelistsvc.setCurrentlySelectedTree(t);
      this.closeSideNav();
      this.sidenav.clearFocusNode(null, null);
    }

  }

  openSideNav() {
    this.myNav.open();
  }

  closeSideNav() {
    this.myNav.close();
  }

}
