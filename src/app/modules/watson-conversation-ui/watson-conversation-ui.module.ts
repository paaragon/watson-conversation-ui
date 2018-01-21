import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatsonConversationUiComponent } from './watson-conversation-ui.component';
import {MatTabsModule, MatCheckboxModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatCheckboxModule,
    BrowserAnimationsModule
  ],
  declarations: [
    WatsonConversationUiComponent
  ],
  exports: [
    WatsonConversationUiComponent
  ]
})
export class WatsonConversationUiModule { }
