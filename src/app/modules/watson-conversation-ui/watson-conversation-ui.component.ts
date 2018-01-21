import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'watson-conversation-ui',
  templateUrl: './watson-conversation-ui.component.html',
  styleUrls: ['./watson-conversation-ui.component.scss']
})
export class WatsonConversationUiComponent implements OnInit {

  private _conversation: any[] = [];

  @Input('reverse')
  reverse: boolean = false;

  @Input('conversation')
  set conversation(conversation) {

    if(this.reverse){

      this._conversation = conversation.reverse();
    }else{
      
      this._conversation = conversation;
    }

    this._hiddenFields = JSON.parse(localStorage.getItem('hiddenFields')) || [];

    if (this._conversation.length > 0) {

      this._fields = Object.keys(this._conversation[0]).filter((field) => {

        return this._hiddenFields.indexOf(field) === -1;

      }).sort();
    }
  }

  private _selectedIteration: any;

  private _fields: any[] = [];
  private _hiddenFields: any[] = [];

  @Input('config')
  public config: {
    iterationid: string,
    input: string,
    output: string
  } = {
      iterationid: '_ID',
      input: 'INPUT',
      output: 'OUTPUT'
    }

  constructor() { }

  ngOnInit() {
  }

  viewIterationDetails(iteration) {
    this._selectedIteration = iteration;
  }

  isSelectedIteration(id: string) {
    return this._selectedIteration && id === this._selectedIteration[this.config.iterationid];
  }

  hideField(field) {

    const fieldIndex = this._fields.indexOf(field);
    this._fields.splice(fieldIndex, 1);

    this._hiddenFields.push(field);
    this._hiddenFields.sort();

    console.log(this._hiddenFields);

    localStorage.setItem('hiddenFields', JSON.stringify(this._hiddenFields));
  }

  showField(field) {

    const fieldIndex = this._hiddenFields.indexOf(field);
    this._hiddenFields.splice(fieldIndex, 1);

    this._fields.push(field);
    this._fields.sort();

    localStorage.setItem('hiddenFields', JSON.stringify(this._hiddenFields));
  }

}
