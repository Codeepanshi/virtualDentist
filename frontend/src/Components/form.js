import React, { useState, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    issue: '',
    duration: '',
    treatments: '',
    allergies: '',
    additional: '',
    images: [],
  });

const fileInputRef = useRef(null);

const handleChange = (e) => {
  const { name, type, files, value } = e.target;
  if (type === 'file') {
    const validFiles = Array.from(files).filter((file) =>
        ['image/jpeg', 'image/png'].includes(file.type)
      );

    setFormData((prev) => ({
      ...prev,
      [name]: validFiles,
    }));
  } else {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();
  Object.entries(formData).forEach(([key, value]) => {
    if (key === 'images') {  
      value.forEach((file) => {
        data.append('images', file); 
      });
    } else {
      data.append(key, value);
    }
  });

  try {
    const response = await fetch('https://virtualdentist-server.onrender.com/api/submissions', {
      method: 'POST',
      body: data,
    });
    
    if (response.ok) {
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        issue: '',
        duration: '',
        treatments: '',
        allergies: '',
        additional: '',
        images: [],
      });
      if(fileInputRef.current){
        fileInputRef.current.value = null;
      }
    } else {
      alert('Error submitting form.');
    }
  } catch (err) {
    console.error(err);
  }
};


  return (
    <div className="px-4 py-10">
      <form onSubmit={handleSubmit}>
        <Card className="max-w-2xl mx-auto shadow-lg">
          <CardContent className="p-6 space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 text-center">Submit Your Dental Concern</h3>

            {[
              { label: 'Your Name', name: 'name', type: 'text', placeholder: 'Enter your full name' },
              { label: 'Email Address', name: 'email', type: 'email', placeholder: 'Enter your email' },
              { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: 'Enter your phone number' },
              { label: 'How long have you had this issue?', name: 'duration', type: 'text', placeholder: 'e.g. 2 weeks' },
            ].map(({ label, name, type, placeholder }) => (
              <div key={name}>
                <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                <Input
                  type={type}
                  name={name}
                  value={formData[name]}
                  placeholder={placeholder}
                  onChange={handleChange}
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Describe Your Dental Issue</label>
              <Textarea
                name="issue"
                value={formData.issue}
                onChange={handleChange}
                placeholder="Briefly describe what's troubling you"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Any previous dental treatments?</label>
              <Textarea
                name="treatments"
                value={formData.treatments}
                onChange={handleChange}
                placeholder="e.g. Root canal, Fillings"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Any allergies or medical conditions?</label>
              <Textarea
                name="allergies"
                value={formData.allergies}
                onChange={handleChange}
                placeholder="e.g. Allergic to anesthesia, diabetic"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Upload a Picture of Your Teeth (min. 10 pictures)</label>
              <Input 
                type="file" 
                name="images" 
                multiple 
                accept=".jpg,.jpeg,.png"
                onChange={handleChange}
                ref={fileInputRef} 
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Additional Details (Optional)</label>
              <Textarea
                name="additional"
                value={formData.additional}
                onChange={handleChange}
                placeholder="Anything else you'd like the dentist to know"
              />
            </div>

            <Button type="submit" className="w-full bg-black text-white hover:bg-gray-900 text-md font-semibold py-2">
              Submit
            </Button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};


export default Form;


