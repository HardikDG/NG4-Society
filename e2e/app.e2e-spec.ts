import { SocietyMgtPage } from './app.po';

describe('society-mgt App', () => {
  let page: SocietyMgtPage;

  beforeEach(() => {
    page = new SocietyMgtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
