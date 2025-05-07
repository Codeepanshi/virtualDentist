import React from 'react';
import { Camera, Video, Calendar } from 'lucide-react';
import Profile from '../assest/profile.png';

const Owner = () => {
  return (
    <div className="bg-white py-12 px-4 md:px-16">
      {/* About Doctor Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10">
        <img
          src={Profile}
          alt="Dr. Akshita Mann"
          className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover"
        />
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Dr. Akshita Mann</h2>
          <p className="text-gray-600 text-justify leading-relaxed">
            Dr. Akshita is a passionate and compassionate dentist with over <strong>13+ years of clinical experience </strong> 
            in general and cosmetic dentistry. A graduate of a top dental university, she has conducted numerous dental 
            awareness camps across rural and urban communities. Her mission is to make dental care more <em>accessible, affordable, 
            and approachable</em> — even from the comfort of your home. This virtual dental camp is her latest initiative 
            to provide remote consultations and early dental advice for anyone in need.
          </p>
        </div>
      </section>

      <hr className="my-12 border-t border-gray-300" />

      {/* Virtual Consult Process */}
      <section>
        <h3 className="text-3xl text-center font-extrabold text-gray-800 mb-10">How a Virtual Consult Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
            <Camera className="w-14 h-14 text-black mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Upload a Smile Selfie</h4>
            <p className="text-gray-600">
              Share a clear photo of your smile and let us know what concerns you have about your oral health.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
            <Video className="w-14 h-14 text-black mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Receive a Personalized Video</h4>
            <p className="text-gray-600">
              Dr. Akshita will review your submission and send you a personalized video response with advice and care tips.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
            <Calendar className="w-14 h-14 text-black mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Book a Follow-Up Visit</h4>
            <p className="text-gray-600">
              If needed, you can easily schedule an in-person visit to receive treatment or get a full consultation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Owner;
