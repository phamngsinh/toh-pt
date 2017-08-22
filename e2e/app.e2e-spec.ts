import { TohPtPage } from './app.po';

describe('toh-pt App', () => {
  let page: TohPtPage;

  beforeEach(() => {
    page = new TohPtPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
