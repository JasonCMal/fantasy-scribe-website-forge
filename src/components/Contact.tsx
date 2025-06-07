
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Twitter, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast.success("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            I love hearing from readers! Whether you have questions about my books, 
            want to discuss fantasy literature, or just want to say hello.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-slate-800/50 border-amber-500/20">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-amber-400 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-slate-700/50 border-slate-600 text-slate-200 placeholder-slate-400"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-slate-700/50 border-slate-600 text-slate-200 placeholder-slate-400"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="bg-slate-700/50 border-slate-600 text-slate-200 placeholder-slate-400 resize-none"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-semibold"
                >
                  Send Message
                  <Mail size={16} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-amber-500/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-amber-400 mb-4">Connect With Me</h3>
                <p className="text-slate-300 mb-6">
                  Follow my writing journey and get updates on new releases, 
                  behind-the-scenes content, and fantasy book recommendations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="text-amber-400" size={20} />
                    <span className="text-slate-300">author@yourname.com</span>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <Button size="sm" variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900">
                      <Twitter size={16} />
                    </Button>
                    <Button size="sm" variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900">
                      <Instagram size={16} />
                    </Button>
                    <Button size="sm" variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900">
                      <Facebook size={16} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-amber-500/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-amber-400 mb-4">Newsletter</h3>
                <p className="text-slate-300 mb-4">
                  Subscribe to get notified about new releases and exclusive content.
                </p>
                <div className="flex gap-2">
                  <Input 
                    placeholder="Enter your email"
                    className="bg-slate-700/50 border-slate-600 text-slate-200 placeholder-slate-400"
                  />
                  <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-semibold">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-slate-700 text-center">
        <p className="text-slate-400">
          © 2024 Your Author Name. All rights reserved. | Crafted with magic and code.
        </p>
      </div>
    </section>
  );
};
