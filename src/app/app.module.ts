import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WatsonConversationUiModule } from './modules/watson-conversation-ui/watson-conversation-ui.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WatsonConversationUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
