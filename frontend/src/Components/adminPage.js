import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Components/ui/button'; // Assuming you have a Button component

const AdminPage = ({ setToken }) => {
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState([]);
  const [zoomImage, setZoomImage] = useState(null);

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
    alert('Logged out successfully!');
    // navigate('/adminlogin');
    navigate('/admin/login');
  };
  
  const fetchSubmission = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/submissions', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await res.json();
      setSubmissions(data);
    } catch (error) {
      console.error('Error fetching submissions:', error);
    }
  };

  useEffect(() => {
    fetchSubmission();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl mb-6">Hello, Akshita Maan</h1>
      <Button onClick={handleLogout}>
        Logout
      </Button>
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl mb-6">Submissions:</h2>
        {submissions.length === 0 ? (
          <p>No submissions yet.</p>
        ) : (
          <div className="space-y-8">
            {submissions.map((submission) => (
              <div key={submission._id} className="p-6 border rounded-lg shadow bg-gray-100 text-black">
                <p><strong>Name:</strong> {submission.name}</p>
                <p><strong>Email:</strong> {submission.email}</p>
                <p><strong>Phone:</strong> {submission.phone}</p>
                <p><strong>Issue:</strong> {submission.issue}</p>
                <p><strong>Duration:</strong> {submission.duration}</p>
                <p><strong>Treatments:</strong> {submission.treatments}</p>
                <p><strong>Allergies:</strong> {submission.allergies}</p>
                <p><strong>Additional Information:</strong> {submission.additional}</p>

                {/* Display images if available */}
                {submission.images && submission.images.length > 0 && (
                  <div className="mt-4">
                    <strong>Images:</strong>
                    <div className="flex flex-wrap gap-4 mt-2">
                      {submission.images.map((imgUrl, index) => (
                        <img 
                          key={index} 
                          src={`http://localhost:5000/${imgUrl}`}
                          alt={`Uploaded by ${submission.name || 'user'}`} 
                          className="w-32 h-32 object-cover rounded" 
                          onClick={() => setZoomImage(`http://localhost:5000/${imgUrl}`)}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* zoom in */}
      {zoomImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="relative">
            <button
              className="absolute top-0 right-0 m-2 text-gray-950 text-5xl font-bold"
              onClick={() => setZoomImage(null)}
            >
              &times;
            </button>
            <img 
              src={zoomImage} 
              alt="Zoomed" 
              className="max-w-full max-h-screen rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
