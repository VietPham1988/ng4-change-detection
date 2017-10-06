import { ChangeDetectionResearchPage } from './app.po';

describe('change-detection-research App', () => {
  let page: ChangeDetectionResearchPage;

  beforeEach(() => {
    page = new ChangeDetectionResearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
