function getProcessingFee(paymentMethod) {
    let fee;
    switch (paymentMethod.toLowerCase()) {
        case 'credit':
            fee = '2% processing fee';
            break;
        case 'debit':
            fee = '1.5% processing fee';
            break;
        case 'paypal':
            fee = '3% processing fee';
            break;
        default:
            fee = 'Invalid payment method';
    }
    return fee;
}

// Example usage
const paymentMethod1 = 'credit';
console.log(`${paymentMethod1}: ${getProcessingFee(paymentMethod1)}`);

const paymentMethod2 = 'debit';
console.log(`${paymentMethod2}: ${getProcessingFee(paymentMethod2)}`);

const paymentMethod3 = 'paypal';
console.log(`${paymentMethod3}: ${getProcessingFee(paymentMethod3)}`);

const invalidMethod = 'cash';
console.log(`${invalidMethod}: ${getProcessingFee(invalidMethod)}`);