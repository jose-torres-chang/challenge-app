import { ChallengeAppPage } from './app.po';

describe('challenge-app App', function() {
  let page: ChallengeAppPage;

  beforeEach(() => {
    page = new ChallengeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
