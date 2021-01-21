document.querySelector('#loan-form').addEventListener('submit', function(e){
    // hide results
    document.querySelector('#results').style.display = 'none'
    //show loader
    document.querySelector('#loading').style.display = 'block'

    setTimeout(calculateResults, 2000)

    e.preventDefault()
});


function calculateResults() {
    // console.log('shaka shaka boom boom!')
    // UI vars
    const UIamount = document.querySelector('#amount')
    const UIinterest = document.querySelector('#interest')
    const UIyears = document.querySelector('#years')
    const UImonthlyPayment = document.querySelector('#monthly-payment')
    const UItotalPayment = document.querySelector('#total-payment')
    const UItotalInterest = document.querySelector('#total-interest')

    const principal = parseFloat(amount.value)
    console.log(amount2.value)
    const calculatedInterest = parseFloat(interest.value) / 100 / 12 // percentage per month
    const calculatedPayments = parseFloat(years.value) * 12

    // compute monthly payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayments)
    const monthly = (principal * x * calculatedInterest) / (x-1)

    if(isFinite(monthly)){
        UImonthlyPayment.value = monthly.toFixed(2)
        UItotalPayment.value = (monthly * calculatedPayments).toFixed(2)
        UItotalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2)

        // show results
        document.querySelector('#results').style.display = 'block'
        // hide loader
        document.querySelector('#loading').style.display = 'none'

    } else {
        console.log('ERROR madaffaca!')
        showError('Check numbers entered')
    }

}


function showError(error) {
    // hide results
    document.querySelector('#results').style.display = 'none'
    // hide loader
    document.querySelector('#loading').style.display = 'none'
    // create a div
    const errorDiv = document.createElement('div')
    // get position
    const card = document.querySelector('.card')
    const heading = document.querySelector('.heading')
    // add class
    errorDiv.className = 'alert alert-danger'
    // create text node and append to div
    errorDiv.appendChild(document.createTextNode(error))
    // visualize error
    card.insertBefore(errorDiv, heading)
    // clear error after 3 seconds
    setTimeout(clearError, 3000)
}

function clearError() {
    document.querySelector('.alert').remove()
}




