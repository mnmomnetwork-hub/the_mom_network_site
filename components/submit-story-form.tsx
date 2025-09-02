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

export default function SubmitStoryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    story: "",
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
        title: "Error",
        description: "Please fill out all required fields.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Story Submitted!",
        description: "Thank you for sharing your story with our community.",
      })
      setIsSubmitting(false)
      setFormData({
        name: "",
        email: "",
        title: "",
        story: "",
        allowComments: false,
        sharePublicly: false,
      })
    }, 1500)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Submit Your Story</CardTitle>
        <CardDescription>Share your experiences with The Mom Network community</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
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
              <Label htmlFor="email">Email</Label>
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
            <Label htmlFor="title">Story Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Give your story a title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="story">Your Story</Label>
            <Textarea
              id="story"
              name="story"
              placeholder="Share your experience..."
              rows={8}
              value={formData.story}
              onChange={handleChange}
              required
            />
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
              <Label htmlFor="sharePublicly">I agree to share my story publicly on The Mom Network</Label>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full bg-coral hover:bg-coral/90 text-white" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Your Story"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
