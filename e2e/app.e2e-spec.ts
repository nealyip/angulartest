import { HelloAotPage } from './app.po';

describe('hello-aot App', () => {
  let page: HelloAotPage;

  beforeEach(() => {
    page = new HelloAotPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
