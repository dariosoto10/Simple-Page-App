import { ProbandoPage } from './app.po';

describe('probando App', () => {
  let page: ProbandoPage;

  beforeEach(() => {
    page = new ProbandoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
