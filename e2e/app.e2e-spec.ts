import { NgrxChatApplicationPage } from './app.po';

describe('ngrx-chat-application App', function() {
  let page: NgrxChatApplicationPage;

  beforeEach(() => {
    page = new NgrxChatApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
