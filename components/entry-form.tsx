"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/hooks/use-toast"

export default function EntryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [agreed, setAgreed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!agreed) {
      toast({
        title: "Agreement Required",
        description: "You must agree to the rules and conditions.",
        variant: "destructive",
      })
      return
    }

    if (!formData.name || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and email address.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/entries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          agreeToRules: agreed,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: "Entry Submitted!",
          description: "You're now entered for this week's drawing. Good luck!",
        })

        // Reset form
        setFormData({ name: "", email: "", phone: "" })
        setAgreed(false)
      } else {
        throw new Error(result.error || "Failed to submit entry")
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 w-full max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-semibold text-navy">Weekly Entry</h2>
      <p className="text-sm text-navy/70 mb-4">Enter your information for a chance to win this week's blessing</p>

      <div className="space-y-2">
        <Label htmlFor="name">Full Name *</Label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full"
          placeholder="Enter your full name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full"
          placeholder="Enter your email address"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number (Optional)</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className="w-full"
          placeholder="Enter your phone number"
        />
      </div>

      <div className="flex items-start space-x-2">
        <Checkbox id="agree" checked={agreed} onCheckedChange={(checked) => setAgreed(checked === true)} />
        <Label htmlFor="agree" className="text-sm leading-5">
          I agree to the{" "}
          <a href="/faq" className="underline text-coral hover:text-coral/80">
            rules and conditions
          </a>{" "}
          and confirm I am a Minnesota mom who has gifted to another mom this week.
        </Label>
      </div>

      <p className="text-xs text-navy/60 italic">
        Entries close every Sunday at noon CST. Winner announced at 5 PM on TikTok Live.
      </p>

      <Button
        type="submit"
        className="w-full bg-coral hover:bg-coral/90 text-white"
        disabled={!formData.name || !formData.email || !agreed || isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Entry"}
      </Button>
    </form>
  )
}
