import { TransparencyPortalPage } from './app.po';

describe('transparency-portal App', function() {
  let page: TransparencyPortalPage;

  beforeEach(() => {
    page = new TransparencyPortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
