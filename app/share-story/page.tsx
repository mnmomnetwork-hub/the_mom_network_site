"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/hooks/use-toast"

export default function ShareStoryPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    story: "",
    wishlistUrl: "",
    allowComments: false,
    sharePublicly: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.title || !formData.story) {
      toast({
        title: "Missing Information",
        description: "Please fill out all required fields.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/stories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: "Story Submitted!",
          description: "Thank you for sharing your story. We'll review it and get back to you soon.",
        })

        // Reset form
        setFormData({
          name: "",
          email: "",
          title: "",
          story: "",
          wishlistUrl: "",
          allowComments: false,
          sharePublicly: false,
        })
      } else {
        throw new Error(result.error || "Failed to submit story")
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
    <div className="container mx-auto py-12 px-4 max-w-2xl">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Share Your Story</h1>
        <p className="text-lg text-navy/80 max-w-2xl mx-auto">
          Tell us about your journey as a mom. Whether you need support or want to inspire others, your voice matters
          here.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tell Us About Yourself</CardTitle>
          <CardDescription>
            Share your story with The Mom Network community. Your story could help and inspire other mothers.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name *</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Story Title *</Label>
              <Input
                id="title"
                name="title"
                placeholder="Give your story a meaningful title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="story">Your Story *</Label>
              <Textarea
                id="story"
                name="story"
                placeholder="Share your experience, challenges, victories, or what support would mean to you..."
                rows={8}
                value={formData.story}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="wishlistUrl">Amazon Wishlist URL (Optional)</Label>
              <Input
                id="wishlistUrl"
                name="wishlistUrl"
                type="url"
                placeholder="https://amazon.com/hz/wishlist/ls/..."
                value={formData.wishlistUrl}
                onChange={handleChange}
              />
              <p className="text-xs text-navy/60">
                If you have an Amazon wishlist, you can share it here. This helps our community know how to support you.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="allowComments"
                  checked={formData.allowComments}
                  onCheckedChange={(checked) => handleCheckboxChange("allowComments", checked === true)}
                />
                <Label htmlFor="allowComments">Allow comments on my story</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="sharePublicly"
                  checked={formData.sharePublicly}
                  onCheckedChange={(checked) => handleCheckboxChange("sharePublicly", checked === true)}
                />
                <Label htmlFor="sharePublicly">
                  I agree to share my story publicly on The Mom Network (after review)
                </Label>
              </div>
            </div>

            <div className="bg-sage/10 p-4 rounded-lg">
              <p className="text-sm text-navy/80">
                <strong>Privacy Note:</strong> Your story will only be shared publicly if you check the box above. We
                review all submissions before publishing and may reach out with questions.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-coral hover:bg-coral/90 text-white" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Share Your Story"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
