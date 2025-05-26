import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import Section from '../components/common/Section';
import PageTitle from '../components/common/PageTitle';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';

const Contact: React.FC = () => {
  // Kathmandu coordinates
  const location: [number, number] = [27.7172, 85.3240];
  
  return (
    <>
      <Section className="pt-12 pb-8">
        <PageTitle 
          title="Contact Us" 
          subtitle="Get in touch with us for inquiries about admissions, events, or general information."
          centered
        />
      </Section>
      
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin size={18} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Address</h3>
                    <p className="text-gray-600">
                      Kathmandu, Nepal
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone size={18} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">
                      +977 01-4123456
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail size={18} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">
                      info@edusite.com.np
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock size={18} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 4:00 PM<br />
                      Saturday: 8:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Our Location</h2>
            <Map position={location} zoom={15} />
          </div>
        </div>
      </Section>
      
      {/* FAQ Section */}
      <Section backgroundClass="bg-gray-50">
        <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">What are the admission requirements?</h3>
            <p className="text-gray-600">
              Admission requirements vary by grade level. Generally, we require previous academic records, an entrance test, and an interview. Please contact our admissions office for specific requirements.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">What are the school fees?</h3>
            <p className="text-gray-600">
              Our fee structure varies by grade level and includes tuition, development fees, and other charges. We provide detailed fee information during the admission process.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Do you provide transportation services?</h3>
            <p className="text-gray-600">
              Yes, we offer transportation services covering major areas of Kathmandu. The fee depends on the distance from the school.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">What extracurricular activities do you offer?</h3>
            <p className="text-gray-600">
              We offer a wide range of extracurricular activities including sports, music, dance, art, debate, and various clubs to foster holistic development.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;