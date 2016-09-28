import { Ng2ChatPage } from './app.po';

describe('ng2-chat App', function() {
  let page: Ng2ChatPage;

  beforeEach(() => {
    page = new Ng2ChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
