export interface OurMatchers extends jasmine.Matchers {
    not: OurMatchers;
    toHaveCssClass(expected: any): boolean;
}

const matcher: jasmine.CustomMatcherFactories = {
    toHaveCssClass: (util: jasmine.MatchersUtil, customEqualityTesters: Array<any>): jasmine.CustomMatcher => {
        return {
            compare: (actual: any, className: string): jasmine.CustomMatcherResult => {
                const pass: boolean = actual.classList.contains(className);

                let message: string = "";
                if (!pass) {
                    message = `Expected ${actual.outerHTML} to contain the CSS class "${className}"`;
                }

                const result: jasmine.CustomMatcherResult = {
                    message: message,
                    pass: pass
                };

                return result;
            }
        };
    }
};

const _global: any = <any>(typeof window === 'undefined' ? global : window);

_global.beforeEach(() => {
    jasmine.addMatchers(matcher);
});

export const expect: (actual: any) => OurMatchers = <any>_global.expect;
