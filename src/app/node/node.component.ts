import { Component, OnInit, Input } from '@angular/core';
import { SideNavService} from '../side-nav.service';
import { TreelistService } from '../treelist.service';

// import {Subscription} from 'rxjs';
// import {timer} from 'rxjs';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {
  @Input() node;
  selectedNodeID: string;
  nodeId: string;
  ticks = 0;
  public hideChildrenList;
  mouseDownX: string;
  mouseDownY: string;

  currentlyHoveringId: string;

  constructor(private sidenav: SideNavService, private treelistsvc: TreelistService) {
    // let timer1 = timer(0, 100);
    // timer1.subscribe(t => this.ticks = t);
    this.treelistsvc.hideChilrenToggler$.subscribe((status) => {
      this.hideChildrenList = treelistsvc.hideChildrenOfIds;
    });
    this.treelistsvc.hoverNodeToggler$.subscribe((status) => {
      this.currentlyHoveringId = treelistsvc.currentlyHoveringId;
    });
    this.hideChildrenList = [];
  }


  ngOnInit() {
  }

  shouldShowPopup(id) {
    return this.currentlyHoveringId === id;
  }

  hideChilren(id) {
    this.treelistsvc.hideNodeChilren(id);
  }

  mouseDown(nodeID: string, selectedNode, event) {
    // console.log('mouse down: ' + this.ticks);
    if (event.target.id !== 'expandbutton') {
      this.mouseDownX = event.clientX;
      this.mouseDownY = event.clientY;
    }
  }

  mouseUp(nodeID: string, selectedNode, event) {
    if (event.target.id !== 'expandbutton' && event.target.id !== 'addbutton') {
      if (this.mouseDownX === event.clientX && this.mouseDownY === event.clientY) {
        this.sidenav.setFocusNode(nodeID, selectedNode);
      } else if (selectedNode !== this.sidenav.getFocusNode()) {
        this.sidenav.setFocusNode(nodeID, selectedNode);
      }
    }
  }

  getSelectedNodeID() {
    return this.sidenav.getFocusNodeId();
  }

  mouseEnter(id, event) {
    console.log('enter');
    this.treelistsvc.setCurrentlyHoveringId(id);
  }

  mouseLeave(id, event) {
    console.log('leaving');
    this.treelistsvc.setCurrentlyHoveringId('');
  }

  nodeClicked(nodeID: string, selectedNode, event) {
    // this.sidenav.setFocusNode(nodeID, selectedNode);
    // console.log(this.ticks);
  }

  shouldHideChildren(id) {
    return this.treelistsvc.hideChildrenOfIds.includes(id);
  }

  addChild(id) {
    // console.log('add child to ' + id);
    this.treelistsvc.addChild(id);
  }
}
