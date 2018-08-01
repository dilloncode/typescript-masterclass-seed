interface Order {
    id: string;
    amount: number;
    currency: string;
}

interface Stripe {
    type: 'stripe';
    card: string;
    cvc: string;
}

interface Paypal {
    type: 'paypal';
    email: string;
}

type CheckoutCard = Order & Stripe;
type CheckoutPaypal = Order & Paypal;

const order: Order = {
    id: 'xj28s',
    amount: 100,
    currency: 'USD'
};

const orderCard: CheckoutCard = {
    ...order,
    type: 'stripe',
    card: '1000 2000 3000 4000',
    cvc: '123'
};

const orderPaypal: CheckoutPaypal = {
    ...order,
    type: 'paypal',
    email: 'abc@def.com'
};

type Payload = CheckoutCard | CheckoutPaypal;

function checkout(payload: Payload) {
    if  (payload.type === 'stripe') {
        console.log(payload.card, payload.cvc);
    }
    if (payload.type === 'paypal') {
        console.log(payload.email);
    }
}