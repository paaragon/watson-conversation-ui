import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatsonConversationUiComponent } from './watson-conversation-ui.component';

describe('WatsonConversationUiComponent', () => {
  let component: WatsonConversationUiComponent;
  let fixture: ComponentFixture<WatsonConversationUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatsonConversationUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatsonConversationUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
