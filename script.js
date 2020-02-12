let amt = 0;
let from = "USD";
let to = "EUR";

const setAmount = element => {
  amt = element.value;
  console.log(amt);
};

const setFromCurrency = element => {
  from = element.value;
  console.log(from);
};

const setToCurrency = element => {
  to = element.value;
  console.log(to);
};

const convert = () => {
  axios
    .get(`http://localhost:4000/test?base=${from}&symbols=${to}&amt=${amt}`)
    .then(response => {
      document.querySelector("#output").innerHTML =
        `${to} ` + response.data.amt;
    });
};
