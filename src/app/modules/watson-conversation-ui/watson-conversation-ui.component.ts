import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'watson-conversation-ui',
  templateUrl: './watson-conversation-ui.component.html',
  styleUrls: ['./watson-conversation-ui.component.scss']
})
export class WatsonConversationUiComponent implements OnInit {

  private _conversation: any[] = [];
  private _originalConversation: any[] = [];
  private _config: {
    iterationid?: string,
    input?: string,
    output?: string,
    map?: any
  } = {
      iterationid: '_ID',
      input: 'INPUT',
      output: 'OUTPUT'
    };
  private _reverse: boolean = false;


  @Input('details')
  details: boolean = true;

  @Input('reverse')
  set reverse(reverse) {
    this.updateComponentInitialization(this._originalConversation, this._config, reverse);
  }

  @Input('conversation')
  set conversation(conversation) {

    this.updateComponentInitialization(conversation, this._config, this._reverse);
  }

  @Input('config')
  set config(config) {

    this.updateComponentInitialization(this._originalConversation, config, this._reverse);
  }

  private _selectedIteration: any;

  private _fields: any[] = [];
  private _hiddenFields: any[] = [];

  @ViewChild('containerDiv')
  private el: ElementRef;

  constructor() { }

  ngOnInit() {
    this.updateComponentInitialization(this._conversation, this._config, this._reverse);
  }

  viewIterationDetails(iteration) {
    this._selectedIteration = iteration;
  }

  isSelectedIteration(id: string) {
    return this._selectedIteration && id === this._selectedIteration[this._config.iterationid];
  }

  hideField(field) {

    const fieldIndex = this._fields.indexOf(field);
    this._fields.splice(fieldIndex, 1);

    this._hiddenFields.push(field);
    this._hiddenFields.sort();

    localStorage.setItem('hiddenFields', JSON.stringify(this._hiddenFields));
  }

  showField(field) {

    const fieldIndex = this._hiddenFields.indexOf(field);
    this._hiddenFields.splice(fieldIndex, 1);

    this._fields.push(field);
    this._fields.sort();

    localStorage.setItem('hiddenFields', JSON.stringify(this._hiddenFields));
  }

  updateComponentInitialization(conversation, config, reverse) {

    this._reverse = reverse;
    this._originalConversation = conversation;

    if (this._reverse) {

      this._conversation = this._originalConversation.reverse();
    } else {

      this._conversation = this._originalConversation;
    }

    Object.assign(this._config, config);

    this._hiddenFields = JSON.parse(localStorage.getItem('hiddenFields')) || [];

    if (this._conversation.length > 0) {

      if (this._config && this._config.map) {

        this._conversation = this._conversation.map((iteration) => {

          Object.keys(this._config.map).forEach(item => {

            iteration[item] = this._config.map[item](iteration[item]);
          });
          return iteration;
        });
      }

      if (this.details) {

        this._fields = Object.keys(this._conversation[0]).filter((field) => {

          return this._hiddenFields.indexOf(field) === -1;

        }).sort();
      }
    }
  }
}
