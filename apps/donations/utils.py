import stripe
from django.conf import settings

stripe.api_key = settings.STRIPE_SECRET_KEY

def create_payment_intent(amount, customer_email):
    """Create a Stripe payment intent"""
    try:
        intent = stripe.PaymentIntent.create(
            amount=int(amount * 100),  # Convert to cents
            currency='usd',
            receipt_email=customer_email,
            metadata={
                'source': 'mom_network_donation'
            }
        )
        return intent
    except stripe.error.StripeError as e:
        raise Exception(f"Stripe error: {str(e)}")

def create_customer(name, email):
    """Create a Stripe customer"""
    try:
        customer = stripe.Customer.create(
            name=name,
            email=email
        )
        return customer
    except stripe.error.StripeError as e:
        raise Exception(f"Stripe error: {str(e)}")
