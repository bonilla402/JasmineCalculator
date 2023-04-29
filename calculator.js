window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const amountInput =  document.getElementById("loan-amount");
  const yearsInput =  document.getElementById("loan-years");
  const rateInput =  document.getElementById("loan-rate");

  amountInput.value = 1000;
  yearsInput.value = 8;
  rateInput.value = 5.8;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentValues = getCurrentUIValues();
  let montlyPayment = calculateMonthlyPayment(currentValues);
  updateMonthly(montlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let i = (values.rate/(100)/12);
  let p =  values.amount;
  let n = values.years * 12 * -1;


  let monthlyAmt =  p * i;
  let loanSpread = 1 - Math.pow(( 1 + i), n);

  if(loanSpread !== 0){
    monthlyAmt = monthlyAmt/loanSpread;
  }
  else{
    monthlyAmt = 0;
  }
    return monthlyAmt.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlySpan =  document.getElementById("monthly-payment");
  monthlySpan.innerText = monthly; 
}


function CountDecimalPlaces(stringValue){
  return stringValue.length - stringValue.indexOf(".")-1;
}