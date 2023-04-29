
it('should calculate the monthly rate correctly', function() {
  // ...
  const values = {
    amount: 1500.5,
    years: 5.5,
    rate: 3.7
  };
  expect(calculateMonthlyPayment(values)).toEqual('25.16');
});

it('should calculate the monthly rate correctly', function() {
  // ...
  const values = {
    amount: 200000,
    years: 10,
    rate: 10
  };
  expect(calculateMonthlyPayment(values)).toEqual('2643.01');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: Math.random()*1000,
    years: Math.random()*10,
    rate: Math.random()*10
  };
  expect(CountDecimalPlaces(calculateMonthlyPayment(values))).toEqual(2);
  
});

/// etc
