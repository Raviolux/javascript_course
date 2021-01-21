
let lo = 1
let hi = 1000
let mid = -1
let iterations = 0

while (lo != hi) {
    iterations++
    mid = Math.round((lo + hi) / 2)
    console.log(lo, hi, '->', mid)
    userResponse = prompt(` I guess ${mid}, is this too high, too low or correct? H, L or C`, 'C')
    userResponse.toLowercase()
    switch (userResponse) {
        case 'h':
            hi = mid -1
        break;
        case 'l':
            lo = mid + 1
        break;
        default:
            lo = hi // this way i end the loop
    }
    // if(confirm(`I guess ${mid}, is this too high?`)) {
        // hi = mid - 1
    // } else {
        // lo = mid + 1
    // }
}

alert(`My final guess is ${mid}, this must be it! I did it in ${iterations} iterations`)


