const math = require('../src/math');
let { multiplicar, dividir } = require('../src/math');
//const  = math;

test("testar a chamada da função subtrair", () => {
  math.subtrair = jest.fn();

  math.subtrair();
  expect(math.subtrair).toHaveBeenCalled();
});

test("multiplicar com return default 10", () => {
  multiplicar = jest.fn().mockReturnValue(10);

  multiplicar();
  expect(multiplicar).toHaveBeenCalled();
  expect(multiplicar()).toBe(10);
});

test("testa return da soma com parametros ", async () => {
  // spy(saveInMemory) how function works
  const mockSum = jest.spyOn(math, "somar");

  // mockResolvedValue === expected value from async function
  mockSum.mockResolvedValue(5);

  mockSum(2, 3);
  expect(mockSum).toHaveBeenCalled();
  expect(mockSum).toHaveBeenCalledTimes(1);
  expect(mockSum).toBeCalledWith(2, 3);
  await expect(mockSum(2, 3)).resolves.toBe(5); // resolves 4 async
});

test("testa return da divisão com parametros", () => {
  mockDivide = jest.spyOn(math, "dividir");
  mockDivide.mockReturnValue(15); // all other calls (default)
  mockDivide.mockReturnValueOnce(2); // 1 call
  mockDivide.mockReturnValueOnce(5); // 2 call

  expect(mockDivide(4, 2)).toBe(2);
  expect(mockDivide).toHaveBeenCalled();
  expect(mockDivide).toBeCalledTimes(1);
  expect(mockDivide).toHaveBeenCalledWith(4, 2);

  expect(mockDivide(10, 2)).toBe(5);
  expect(mockDivide).toHaveBeenCalled();
  expect(mockDivide).toBeCalledTimes(2);
  expect(mockDivide).toHaveBeenCalledWith(10, 2);

  expect(mockDivide(30, 2)).toBe(15);
  expect(mockDivide).toHaveBeenCalled();
  expect(mockDivide).toHaveBeenCalledTimes(3);
  expect(mockDivide).toHaveBeenCalledWith(30, 2);
});

test('função subtrai com implementation e restore', () => {
  const mockSubtrair = jest.spyOn(math, "subtrair");
  mockSubtrair.mockImplementation((a, b) => a * b);
  mockSubtrair.mockReturnValue(20);

  expect(mockSubtrair(10, 2)).toBe(20);
  expect(mockSubtrair).toHaveBeenCalled();
  expect(mockSubtrair).toHaveBeenCalledTimes(2);
  expect(mockSubtrair).toHaveBeenCalledWith(10, 2);

  mockSubtrair.mockRestore();
  mockSubtrair.mockReturnValue(8);

  expect(mockSubtrair(10, 2)).toBe(8);
  expect(mockSubtrair).toHaveBeenCalled();
  expect(mockSubtrair).toHaveBeenCalledTimes(1);
  expect(mockSubtrair).toHaveBeenCalledWith(10, 2);
});