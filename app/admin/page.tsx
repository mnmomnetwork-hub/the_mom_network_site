"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

export default function AdminPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success",
        description: "Your changes have been saved.",
      })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Admin Dashboard</h1>
        <p className="text-lg text-navy/80 max-w-2xl mx-auto">
          Manage content, winners, and resources for The Mom Network.
        </p>
      </div>

      <Tabs defaultValue="winners" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="winners">Weekly Winners</TabsTrigger>
          <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
          <TabsTrigger value="sponsors">Sponsors</TabsTrigger>
          <TabsTrigger value="downloads">Downloads</TabsTrigger>
        </TabsList>

        <TabsContent value="winners" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Manage Weekly Winners</CardTitle>
              <CardDescription>Add or edit the weekly winner information that appears on the site.</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="winner-name">Winner Name</Label>
                  <Input id="winner-name" placeholder="Enter winner's name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="winner-date">Date</Label>
                  <Input id="winner-date" type="date" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="winner-gift">Gift</Label>
                  <Input id="winner-gift" placeholder="Enter gift description" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="winner-story">Winner's Story</Label>
                  <Textarea
                    id="winner-story"
                    placeholder="Enter a brief story about the winner and why they were selected"
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="winner-image">Winner Image (Optional)</Label>
                  <Input id="winner-image" type="file" />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="bg-coral hover:bg-coral/90 text-white" disabled={isSubmitting}>
                  {isSubmitting ? "Saving..." : "Save Winner"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="testimonials" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Manage Testimonials</CardTitle>
              <CardDescription>Add or edit testimonials from moms in the community.</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="testimonial-name">Mom's Name</Label>
                  <Input id="testimonial-name" placeholder="Enter mom's name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="testimonial-date">Member Since</Label>
                  <Input id="testimonial-date" type="date" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="testimonial-text">Testimonial</Label>
                  <Textarea id="testimonial-text" placeholder="Enter the testimonial text" rows={4} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="testimonial-image">Profile Image (Optional)</Label>
                  <Input id="testimonial-image" type="file" />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="bg-coral hover:bg-coral/90 text-white" disabled={isSubmitting}>
                  {isSubmitting ? "Saving..." : "Save Testimonial"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="sponsors" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Manage Sponsors</CardTitle>
              <CardDescription>Add or edit sponsor information for the Sponsor Spotlight section.</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="sponsor-name">Sponsor Name</Label>
                  <Input id="sponsor-name" placeholder="Enter sponsor name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sponsor-website">Website</Label>
                  <Input id="sponsor-website" placeholder="Enter sponsor website URL" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sponsor-description">Description</Label>
                  <Textarea
                    id="sponsor-description"
                    placeholder="Enter a description of the sponsor and their contribution"
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sponsor-logo">Sponsor Logo</Label>
                  <Input id="sponsor-logo" type="file" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sponsor-featured">Featured Until</Label>
                  <Input id="sponsor-featured" type="date" />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="bg-coral hover:bg-coral/90 text-white" disabled={isSubmitting}>
                  {isSubmitting ? "Saving..." : "Save Sponsor"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="downloads" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Manage Digital Downloads</CardTitle>
              <CardDescription>Add or edit resources available for download.</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="download-title">Resource Title</Label>
                  <Input id="download-title" placeholder="Enter resource title" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="download-description">Description</Label>
                  <Textarea id="download-description" placeholder="Enter a description of the resource" rows={4} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="download-category">Category</Label>
                  <Input id="download-category" placeholder="Enter resource category" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="download-file">Upload File (PDF)</Label>
                  <Input id="download-file" type="file" accept=".pdf" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="download-thumbnail">Thumbnail Image</Label>
                  <Input id="download-thumbnail" type="file" accept="image/*" />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="bg-coral hover:bg-coral/90 text-white" disabled={isSubmitting}>
                  {isSubmitting ? "Saving..." : "Save Resource"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
