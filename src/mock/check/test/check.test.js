const check = require('../check');

// mocking: 단위 테스트를 작성할 때, 해당 코드가 의존하는 부분을 가짜(mock)로 대체하는 기법

describe('Check', () => {
    let onSuccess;
    let onFail;

    beforeEach(() => {
        onSuccess = jest.fn();
        onFail = jest.fn();
    });

    it('should call onSuccess when predicate is true', () => {
        check(() => true, onSuccess, onFail);
        // expect(onSuccess.mock.calls.length).toBe(1);
        expect(onSuccess).toHaveBeenCalledTimes(1);
        expect(onFail).toHaveBeenCalledTimes(0);
        // 이 인자와 함께 호출되어야 한다.
        expect(onSuccess).toHaveBeenCalledWith('yes')
        
        
    });

    it('should call onSuccess when predicate is false', () => {
        check(() => false, onSuccess, onFail);
        // expect(onSuccess.mock.calls.length).toBe(1);
        expect(onFail).toHaveBeenCalledTimes(1);
        expect(onSuccess).toHaveBeenCalledTimes(0);
        // 이 인자와 함께 호출되어야 한다.
        expect(onFail).toHaveBeenCalledWith('no')
    });



})