function calculateTip() {
  const billAmt = $('#total').val();
  const tipAmt = $('#service').val();
  let splitBill = $('#people').val();

  if (billAmt === '') {
    alert('Please enter bill amount!');
  }

  if (splitBill === '' || splitBill <= 1) {
    splitBill = 1;
    $('#each').hide();
  } else {
    $('#each').show();
  }

  let total = (billAmt * tipAmt) / splitBill;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
  $('#tip').text(total);

  $('#tip-div').show()
}

$(document).ready(function () {
  $('#tip-div').hide();
})

$('#calculate-btn').on('click', function(event) {
  event.preventDefault();
  console.log('Button was clicked')
  calculateTip();
})

