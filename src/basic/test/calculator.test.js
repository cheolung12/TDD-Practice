const Calculator = require("../calculator");

// describe: 관련있는 테스트 그룹화
// it: calculator를 가리키는 삼인칭 주어
// 각각의 테스트는 서로 독립적이어야 한다!
// 테스트 전에 공통적으로 뭔가 준비되어야 한다면 -> beforeEach
// 각각의 테스트가 끝난다음에 해야 할 공통 마무리 작업이 있다면 -> afterEach

describe("Calculator", () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });
  it("init with 0", () => {
    const cal = new Calculator();
    expect(cal.value).toBe(0);
  });

  it("sets", () => {
    const cal = new Calculator();
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it("clear", () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it("add", () => {
    cal.set(5);
    cal.add(3);
    expect(cal.value).toBe(8);
  });

  it("add should throw an error if value is greater than 100", () => {
    expect(() => {
      cal.add(101);
    }).toThrow("Value can not be greater than 100");
  });

  it("subtract", () => {
    cal.subtract(1);
    expect(cal.value).toBe(-1);
  });

  it("multiply", () => {
    cal.set(3);
    cal.multiply(15);
    expect(cal.value).toBe(45);
  });

  describe("divides", () => {
    it("0/0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });
    it("1/0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
    it("4/4 === 1", () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});
