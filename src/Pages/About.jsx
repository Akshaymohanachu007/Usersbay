import React from 'react'

function About() {
  return (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-6">
      
      <div className="max-w-3xl bg-white shadow-xl rounded-2xl p-10 text-center">
        

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          About This Application
        </h1>

  
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded"></div>


        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          This multi-page React User application demonstrates
        
          for seamless navigation between pages.  
          It showcases dynamic routing, reusable components, and a clean UI 
          designed with Tailwind CSS.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          
          <div className="bg-blue-50 p-5 rounded-xl hover:shadow-md transition">
            <h3 className="font-semibold text-blue-700 mb-2">
              Fast Navigation
            </h3>
            <p className="text-sm text-gray-600">
              Switch between pages instantly without reload.
            </p>
          </div>

          <div className="bg-blue-50 p-5 rounded-xl hover:shadow-md transition">
            <h3 className="font-semibold text-indigo-700 mb-2">
               Dynamic Routing
            </h3>
            <p className="text-sm text-gray-600">
              View user-specific pages using route parameters.
            </p>
          </div>

          <div className="bg-blue-50 p-5 rounded-xl hover:shadow-md transition">
            <h3 className="font-semibold text-purple-700 mb-2">
               Modern UI
            </h3>
            <p className="text-sm text-gray-600">
              Built with Tailwind for responsive design.
            </p>
          </div>

        </div>



      </div>
    </div>
  );
}

export default About