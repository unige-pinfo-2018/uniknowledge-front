import { UniKnowledge2Page } from './app.po';

describe('UniKnowledge App', () => {
    let page: UniKnowledge2Page;

    beforeEach(() => {
        page = new UniKnowledge2Page();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to app!');
    });
});
