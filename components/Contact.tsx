"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useSheet } from "@/context/SheetContext";
import { Toast } from "./Toast";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

const Contact = () => {
  const { isOpen, closeSheet } = useSheet();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    interest: "",
  });

  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData((prev) => ({ ...prev, interest }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message, interest } = formData;

    if (!name || !email || !message || !interest) {
      setError("All fields are required.");
      return;
    }

    setError("");
    console.log("Submitted Data:", formData);
    toast({
      description: "Your message has been sent.",
    });

    closeSheet();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(state) => !state && closeSheet()}>
      <DialogTitle className="hidden">Title</DialogTitle>
      <DialogContent className="md:max-w-[500px] w-full h-[90vh] font-primary bg-grey border-none">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {/* left */}
          <div className="bg-transparent p-6">
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Interest Selection */}
              <div>
                <Label className="block text-sm font-medium text-gray-700 mb-2">
                  I’m interested in:
                </Label>
                <div className="flex flex-wrap gap-2">
                  {[
                    "UX/UI design",
                    "Web design",
                    "Design system",
                    "Graphic design",
                    "Other",
                  ].map((interest, index) => (
                    <Button
                      key={interest}
                      type="button"
                      onClick={() => handleInterestChange(interest)}
                      className={`${
                        formData.interest === interest
                          ? "bg-primary"
                          : "bg-gray-100 text-black"
                      } rounded-full text-xs px-3 py-2 hover:bg-primary hover:text-white border border-primary`}
                    >
                      {interest}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Name Field */}
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  required
                  className="border border-primary bg-deep focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>

              {/* Email Field */}
              <div>
                <Label htmlFor="email">Your Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johnsmith@example.com"
                  required
                  className="border border-primary bg-deep focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>

              {/* Message Field */}
              <div>
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={4}
                  required
                  className="border border-primary bg-deep focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>

              {/* Error Message */}
              {error && <p className="text-red-500 text-sm">{error}</p>}

              {/* Submit Button */}
              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-dark"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          {/* Left Section */}
          <div className="text-white p-6 rounded-lg flex flex-col justify-between items-center">
            {/* <div>
              <h3 className="text-2xl font-bold mb-4 font-heading text-primary">
                Let’s talk on something great together
              </h3>
            </div> */}
            {/* <div className="mx-auto">
              <img
                src="/contact.png"
                alt="contact-image"
                className="object-contain"
              />
            </div> */}

            {/* <div className="space-y-4 mt-6 text-black text-center">
              <div className="flex items-center space-x-2">
                <Icon icon="ic:baseline-phone" className="w-5 h-5" />
                <p>+233 532 605 082</p>
              </div>
              <div className="flex items-center space-x-2">
                <Icon icon="ic:baseline-email" className="w-5 h-5" />
                <p>selorm@berthengineering.com</p>
              </div>
            </div> */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Contact;
