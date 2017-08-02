import { PanelappPage } from './app.po';

describe('panelapp App', () => {
  let page: PanelappPage;

  beforeEach(() => {
    page = new PanelappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
