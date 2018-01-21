import { Component } from '@angular/core';
import { fakeConversation } from './modules/fakedata/conversation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  conversation = fakeConversation;
  config: {
    iterationid?: string,
    input?: string,
    output?: string,
    map?: any
  } = {
      iterationid: '_ID',
      input: 'INPUT',
      map: {
        CONFIDENCE: (item) => {
          return parseFloat(item).toFixed(2);
        },
        INPUT: (item) => {
          return item.toUpperCase();
        }
      }
    }
}
