"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { CreditCard, Landmark, Wallet } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function DonationForm() {
  const [donationAmount, setDonationAmount] = useState("25")
  const [isCustomAmount, setIsCustomAmount] = useState(false)
  const [customAmount, setCustomAmount] = useState("")
  const [isRecurring, setIsRecurring] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleAmountChange = (value: string) => {
    setDonationAmount(value)
    setIsCustomAmount(value === "custom")
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const finalAmount = isCustomAmount ? customAmount : donationAmount

    if (
      !finalAmount ||
      (isCustomAmount && (Number.parseFloat(customAmount) <= 0 || isNaN(Number.parseFloat(customAmount))))
    ) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid donation amount.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Thank you for your donation!",
        description: `Your ${isRecurring ? "recurring" : "one-time"} donation of $${finalAmount} has been processed.`,
      })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Make a Donation</CardTitle>
        <CardDescription>Support The Mom Network with your contribution</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <Tabs defaultValue="credit-card">
            <TabsList className="grid grid-cols-3">
              <TabsTrigger value="credit-card">
                <CreditCard className="h-4 w-4 mr-2" />
                Credit Card
              </TabsTrigger>
              <TabsTrigger value="paypal">
                <Wallet className="h-4 w-4 mr-2" />
                PayPal
              </TabsTrigger>
              <TabsTrigger value="venmo">
                <Landmark className="h-4 w-4 mr-2" />
                Venmo
              </TabsTrigger>
            </TabsList>
            <TabsContent value="credit-card" className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="card-number">Card Number</Label>
                <Input id="card-number" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Name on Card</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
            </TabsContent>
            <TabsContent value="paypal" className="pt-4">
              <p className="text-center py-6">
                You will be redirected to PayPal to complete your donation after clicking "Donate".
              </p>
            </TabsContent>
            <TabsContent value="venmo" className="pt-4">
              <p className="text-center py-6">
                You will be redirected to Venmo to complete your donation after clicking "Donate".
              </p>
            </TabsContent>
          </Tabs>

          <div className="space-y-4">
            <Label>Donation Amount</Label>
            <RadioGroup
              defaultValue="25"
              onValueChange={handleAmountChange}
              value={donationAmount}
              className="grid grid-cols-3 gap-4"
            >
              <div>
                <RadioGroupItem value="10" id="amount-10" className="peer sr-only" />
                <Label
                  htmlFor="amount-10"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-coral [&:has([data-state=checked])]:border-coral"
                >
                  $10
                </Label>
              </div>
              <div>
                <RadioGroupItem value="25" id="amount-25" className="peer sr-only" />
                <Label
                  htmlFor="amount-25"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-coral [&:has([data-state=checked])]:border-coral"
                >
                  $25
                </Label>
              </div>
              <div>
                <RadioGroupItem value="50" id="amount-50" className="peer sr-only" />
                <Label
                  htmlFor="amount-50"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-coral [&:has([data-state=checked])]:border-coral"
                >
                  $50
                </Label>
              </div>
              <div>
                <RadioGroupItem value="100" id="amount-100" className="peer sr-only" />
                <Label
                  htmlFor="amount-100"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-coral [&:has([data-state=checked])]:border-coral"
                >
                  $100
                </Label>
              </div>
              <div>
                <RadioGroupItem value="250" id="amount-250" className="peer sr-only" />
                <Label
                  htmlFor="amount-250"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-coral [&:has([data-state=checked])]:border-coral"
                >
                  $250
                </Label>
              </div>
              <div>
                <RadioGroupItem value="custom" id="amount-custom" className="peer sr-only" />
                <Label
                  htmlFor="amount-custom"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-coral [&:has([data-state=checked])]:border-coral"
                >
                  Custom
                </Label>
              </div>
            </RadioGroup>

            {isCustomAmount && (
              <div className="space-y-2">
                <Label htmlFor="custom-amount">Custom Amount ($)</Label>
                <Input
                  id="custom-amount"
                  type="number"
                  min="1"
                  step="0.01"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                />
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="recurring"
              checked={isRecurring}
              onCheckedChange={(checked) => setIsRecurring(checked === true)}
            />
            <Label htmlFor="recurring">Make this a recurring monthly donation</Label>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full bg-coral hover:bg-coral/90 text-white" disabled={isSubmitting}>
            {isSubmitting
              ? "Processing..."
              : `Donate ${isCustomAmount ? (customAmount ? `$${customAmount}` : "") : `$${donationAmount}`} ${isRecurring ? "Monthly" : ""}`}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
