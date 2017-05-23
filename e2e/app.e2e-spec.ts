import { MyProject2Page } from './app.po';

describe('my-project2 App', () => {
  let page: MyProject2Page;

  beforeEach(() => {
    page = new MyProject2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
