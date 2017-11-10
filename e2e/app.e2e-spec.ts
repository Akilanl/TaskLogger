import { TaskLoggerPage } from './app.po';

describe('task-logger App', function() {
  let page: TaskLoggerPage;

  beforeEach(() => {
    page = new TaskLoggerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
