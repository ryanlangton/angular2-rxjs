import { Angular2RxjsPage } from './app.po';

describe('angular2-rxjs App', function() {
  let page: Angular2RxjsPage;

  beforeEach(() => {
    page = new Angular2RxjsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
