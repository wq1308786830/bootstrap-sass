import { BootstrapSassPage } from './app.po';

describe('bootstrap-sass App', () => {
  let page: BootstrapSassPage;

  beforeEach(() => {
    page = new BootstrapSassPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
