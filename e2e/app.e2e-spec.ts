import { AngularDenemeYoutubeServicePage } from './app.po';

describe('angular-deneme-youtube-service App', () => {
  let page: AngularDenemeYoutubeServicePage;

  beforeEach(() => {
    page = new AngularDenemeYoutubeServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
