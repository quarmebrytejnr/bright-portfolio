import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "default"
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white">Get In Touch</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Let's discuss how my data expertise can help solve your business challenges.
          </p>
        </div>
        
        <Card className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden md:flex">
          <div className="md:w-1/2 p-8 md:p-12 bg-primary text-white">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-white/10">
                  <i className="fas fa-envelope text-secondary"></i>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-white/70">Email</p>
                  <a href="mailto:dogbeykwamebright@gmail.com" className="text-white hover:text-secondary">
                    dogbeykwamebright@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-white/10">
                  <i className="fas fa-phone text-secondary"></i>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-white/70">Phone</p>
                  <a href="tel:+233204760106" className="text-white hover:text-secondary">
                    +233 20 476 0106
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-white/10">
                  <i className="fas fa-map-marker-alt text-secondary"></i>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-white/70">Location</p>
                  <p className="text-white">Ghana</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/bright-kwame-dogbey" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-secondary text-white transition-colors"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a 
                  href="https://bit.ly/bkd-portfolio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-secondary text-white transition-colors"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-secondary text-white transition-colors"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-primary dark:text-white mb-6">Send Me a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John Doe" 
                          {...field} 
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="john@example.com" 
                          {...field}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="How can I help you?" 
                          {...field}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={4}
                          placeholder="Your message here..." 
                          {...field}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-secondary text-white font-medium rounded-md hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
