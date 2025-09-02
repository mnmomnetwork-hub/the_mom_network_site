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
# --- added for dev to satisfy import ---
import os
import stripe
stripe.api_key = os.getenv("STRIPE_SECRET_KEY","")

def start_stripe_checkout(price_id, success_url, cancel_url, customer_email=None):
    """
    Creates a Stripe Checkout Session for a recurring price.
    Use mode='payment' if your price is one-time.
    """
    params = {
        "mode": "subscription",
        "line_items": [{"price": price_id, "quantity": 1}],
        "success_url": success_url,
        "cancel_url": cancel_url,
        "allow_promotion_codes": True,
    }
    if customer_email:
        params["customer_email"] = customer_email
    return stripe.checkout.Session.create(**params)
# --- end added ---
