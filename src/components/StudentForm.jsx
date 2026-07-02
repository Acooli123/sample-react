import React, { useState } from "react";

function StudentForm() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Registration Successful!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Student Registration
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Step {step} of 3
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
          <div
            className={`bg-blue-600 h-2 rounded-full transition-all duration-500 ${
              step === 1
                ? "w-1/3"
                : step === 2
                ? "w-2/3"
                : "w-full"
            }`}
          ></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Step 1 */}
          {step === 1 && (
            <>
              <h3 className="text-xl font-semibold text-gray-700">
                Personal Information
              </h3>

              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="button"
                onClick={nextStep}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Next →
              </button>
            </>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <>
              <h3 className="text-xl font-semibold text-gray-700">
                Course Details
              </h3>

              <input
                type="text"
                name="course"
                placeholder="Enter Course Name"
                value={formData.course}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="flex justify-between gap-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="w-1/2 bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600 transition"
                >
                  ← Previous
                </button>

                <button
                  type="button"
                  onClick={nextStep}
                  className="w-1/2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Next →
                </button>
              </div>
            </>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <>
              <h3 className="text-xl font-semibold text-gray-700">
                Contact Information
              </h3>

              <input
                type="text"
                name="phone"
                placeholder="Enter Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="flex justify-between gap-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="w-1/2 bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600 transition"
                >
                  ← Previous
                </button>

                <button
                  type="submit"
                  className="w-1/2 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
                >
                  Submit ✓
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default StudentForm;