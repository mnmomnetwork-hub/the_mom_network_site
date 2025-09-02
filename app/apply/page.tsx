"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ApplyPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: "",
    experience: "",
    agreeToValues: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 1500)) // mock API
    alert("Application submitted successfully!")
    setFormData({
      name: "",
      email: "",
      skills: "",
      experience: "",
      agreeToValues: false,
    })
    setIsSubmitting(false)
  }

  return (
    <div className="container mx-auto py-12 px-4 max-w-2xl">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Apply to Help</h1>
        <p className="text-lg text-navy/80">Want to help grow The Mom Network? Submit your info below.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-xl shadow-md p-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="skills">How can you help?</Label>
          <Textarea id="skills" name="skills" rows={4} value={formData.skills} onChange={handleChange} required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="experience">Relevant Experience (optional)</Label>
          <Textarea id="experience" name="experience" rows={3} value={formData.experience} onChange={handleChange} />
        </div>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            name="agreeToValues"
            checked={formData.agreeToValues}
            onChange={handleChange}
            required
            className="h-4 w-4 text-coral border-gray-300 rounded focus:ring-coral"
          />
          I agree to The Mom Network’s values.
        </label>

        <Button type="submit" className="w-full bg-coral hover:bg-coral/90 text-white" disabled={isSubmitting}>
          {isSubmitting ? "Submitting…" : "Submit Application"}
        </Button>
      </form>
    </div>
  )
}
