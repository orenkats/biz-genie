import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Select from 'react-select';
import Flag from 'react-world-flags';
import HeroPattern from '@/components/HeroPattern';


// Define options for the country dropdown with flags
const countryOptions = [
  { label: 'United States', value: 'US', flag: 'US' },
  { label: 'Canada', value: 'CA', flag: 'CA' },
  { label: 'France', value: 'FR', flag: 'FR' },
  { label: 'Germany', value: 'DE', flag: 'DE' },
  { label: 'Australia', value: 'AU', flag: 'AU' },
];

const FormPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    businessName: 'Vino Voyage',
    businessIdea: 'A wine tour company offering guided tours of local vineyards and tastings.',
    budget: '20000',
    location: 'Napa Valley, USA', 
    marketResearch: 'Rising interest in wine tourism and experiential travel among millennials and Gen Z.',
    previousExperience: 'Experience in hospitality and as a sommelier.',
    customerPersona: 'Wine enthusiasts and tourists looking for unique experiences.',
    businessGoals: 'To become a top-rated wine tour company in Napa Valley within 2 years.',

  });
  const [currentPage, setCurrentPage] = useState(1);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCountryChange = (selectedOption: { label: string; value: string; flag: string } | null) => {
    if (selectedOption) {
      setFormData((prevState) => ({ ...prevState, location: selectedOption.label }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push({
      pathname: '/BuisnessPlan',
      query: formData,
    });
  };

  return (
    <div className="min-h-screen bg-sage-50 flex flex-col justify-center items-center p-4">
      
      <Card className="w-full max-w-3xl">
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Page 1 - Displaying Business Name, Idea, Budget, and Country */}
            {currentPage === 1 && (
              <>
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-center">Welcome to BizGenie!</CardTitle>
                  <p className="text-center text-gray-600">Let&apos;s start shaping your business.</p>
                </CardHeader>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label> {/* Added mb-2 here */}
                  <Input id="businessName" name="businessName" placeholder="Business Name" value={formData.businessName} onChange={handleInputChange} required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Idea</label> {/* Added mb-2 here */}
                  <Input id="businessIdea" name="businessIdea" placeholder="Describe your business idea" value={formData.businessIdea} onChange={handleInputChange} required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget</label> {/* Added mb-2 here */}
                  <Input id="budget" name="budget" placeholder="Budget" type="number" value={formData.budget} onChange={handleInputChange} required />
                </div>
                
                {/* Country Selector with Flags */}
                <div className="mt-4">
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">Location</label> {/* Added mb-2 here */}
                  <Select
                    id="location"
                    name="location"
                    value={countryOptions.find(option => option.label === formData.location)}
                    options={countryOptions}
                    onChange={handleCountryChange}
                    formatOptionLabel={(option) => (
                      <div className="flex items-center space-x-2">
                        <Flag code={option.flag} style={{ width: 20, height: 15 }} />
                        <span>{option.label}</span>
                      </div>
                    )}
                    className="mt-2"
                  />
                </div>

                {/* Navigate to next page */}
                <Button type="button" className="animate-fade-in bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%] w-full text-eggplant  font-Montserrat hover:bg-right transition-all duration-500" onClick={() => setCurrentPage(2)}>
                  Next
                </Button>
              </>
            )}

            {/* Page 2 - Displaying the remaining fields */}
            {currentPage === 2 && (
              <>
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-center">Welcome to BizGenie!</CardTitle>
                  <p className="text-center text-gray-600"> You are almost there</p>
                </CardHeader>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Market Research</label> {/* Added mb-2 here */}
                  <Textarea id="marketResearch" name="marketResearch" placeholder="Market Research" value={formData.marketResearch} onChange={handleInputChange} required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Previous Experience</label> {/* Added mb-2 here */}
                  <Textarea id="previousExperience" name="previousExperience" placeholder="Previous Experience" value={formData.previousExperience} onChange={handleInputChange} required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Customer Persona</label> {/* Added mb-2 here */}
                  <Textarea id="customerPersona" name="customerPersona" placeholder="Customer Persona" value={formData.customerPersona} onChange={handleInputChange} required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Goals</label> {/* Added mb-2 here */}
                  <Textarea id="businessGoals" name="businessGoals" placeholder="Business Goals" value={formData.businessGoals} onChange={handleInputChange} required />
                </div>

                {/* Submit the form */}
                <Button type="submit" className="animate-fade-in bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%] w-full text-eggplant font-Montserrat hover:bg-right transition-all duration-500">
                  Generate Business Plan
                </Button>
              </>
            )}

          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FormPage;
