const check = require('../check');

describe('Check', () => {
    let onSuccess;
    let onFail;

    beforeEach(() => {
        onSuccess = jest.fn();
        onFail = jest.fn();
    });

    it('should call onSuccess when predicate is true', () => {
        check(() => true, onSuccess, onFail);
        expect(onSuccess.mock.call.length).toBe(1);
    });


})