import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreepaneComponent } from './treepane/treepane.component';
import { NodeComponent } from './node/node.component';

import {MatSidenav} from '@angular/material';

import { MatSlideToggleModule,
  MatMenuModule, MatButtonModule, MatIconModule,
  MatCardModule, MatSidenavModule, MatSliderModule, MatCheckboxModule, MatTabsModule } from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavcontentComponent } from './sidenavcontent/sidenavcontent.component';


@NgModule({
  declarations: [
    AppComponent,
    TreepaneComponent,
    NodeComponent,
    SidenavcontentComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatCheckboxModule,
    FormsModule,
    MatTabsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
