const siteForm = document.querySelector('.site-form')
const height = document.querySelector('.height')
const weight = document.querySelector('.weight')

siteForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let bmi = weight.value / ((height.value ) ** 2)

    document.querySelector('.result').innerHTML = "Your Bmi is " + bmi.toFixed(2)
    
    if (bmi < 18.5) {
        alert("Siz ozg'insiz")
    } else if (18.5 < bmi && 24.9 > bmi) {
        alert("Siz normalsiz")
    } else if (25 < bmi && 29.9 > bmi) {
        alert("Siz semizsiz")
    } else {
        alert("Siz juda ham semizsiz")
    }

    height.value = ''
    weight.value = ''
})
