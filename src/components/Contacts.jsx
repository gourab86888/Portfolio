import { useState } from "react";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-violet-600">Touch</span>
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Contact Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-violet-100 dark:bg-violet-900/30">
                  <Mail className="h-8 w-8 text-violet-600" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-2">Email</h4>
                  <a
                    href="mailto:grvpatro@gmail.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-violet-600 transition-colors"
                  >
                    grvpatro@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-violet-100 dark:bg-violet-900/30">
                  <Phone className="h-8 w-8 text-violet-600" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-2">Phone</h4>
                  <a
                    href="tel:+918688827815"
                    className="text-gray-600 dark:text-gray-300 hover:text-violet-600 transition-colors"
                  >
                    +91 8688827815
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-violet-100 dark:bg-violet-900/30">
                  <MapPin className="h-8 w-8 text-violet-600" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-2">Location</h4>
                  <span className="text-gray-600 dark:text-gray-300">
                    Hyderabad, India
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-12">
              <h4 className="font-medium text-lg mb-6 text-center">Connect With Me</h4>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://www.linkedin.com/in/gourab76099/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 hover:bg-violet-600 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="https://x.com/Gourav_patro1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 hover:bg-violet-600 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.instagram.com/gourab_patra76099/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 hover:bg-violet-600 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="pt-8 text-center">
              <div className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available for new projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;