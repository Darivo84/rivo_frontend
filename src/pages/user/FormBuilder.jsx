import { useState } from 'react'

const FormBuilder = ({ form }) => {
  const [formData, setFormData] = useState({})

  const handleChange = (fieldId, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldId]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
    console.log(formData)
  }

  if (!form || !form.fields) {
    // Render a loading state or a placeholder if form data isn't available yet
    return <div>Loading form...</div>;
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Form Title</h2>
      {/* <h2 className="text-2xl font-semibold mb-6">{form.title}</h2> */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {form.fields.map((field) => (
          <div key={field._id} className="flex flex-col space-y-2">
            <label htmlFor={field._id} className="text-gray-700 font-medium">
              {field.label}
            </label>
            {field.fieldType === 'text' && (
              <input
                type="text"
                id={field._id}
                value={formData[field._id] || ''}
                onChange={(e) => handleChange(field._id, e.target.value)}
                className="border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200 focus:outline-none"
              />
            )}
            {field.fieldType === 'number' && (
              <input
                type="number"
                id={field._id}
                value={formData[field._id] || ''}
                onChange={(e) => handleChange(field._id, e.target.value)}
                className="border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200 focus:outline-none"
              />
            )}
            {field.fieldType === 'date' && (
              <input
                type="date"
                id={field._id}
                value={formData[field._id] || ''}
                onChange={(e) => handleChange(field._id, e.target.value)}
                className="border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200 focus:outline-none"
              />
            )}
            {field.fieldType === 'select' && (
              <select
                id={field._id}
                value={formData[field._id] || ''}
                onChange={(e) => handleChange(field._id, e.target.value)}
                className="border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200 focus:outline-none"
              >
                <option value="">Select an option</option>
                {field.options.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
            {field.fieldType === 'checkbox' && (
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id={field._id}
                  checked={formData[field._id] || false}
                  onChange={(e) => handleChange(field._id, e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-200"
                />
                <label htmlFor={field._id} className="ml-2 text-gray-700">
                  {field.label}
                </label>
              </div>
            )}
            {field.fieldType === 'radio' && (
              <div className="space-y-2">
                {field.options.map((option, idx) => (
                  <div key={idx} className="flex items-center">
                    <input
                      type="radio"
                      id={`${field._id}-${idx}`}
                      name={field._id}
                      value={option}
                      checked={formData[field._id] === option}
                      onChange={(e) => handleChange(field._id, option)}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-200"
                    />
                    <label htmlFor={`${field._id}-${idx}`} className="ml-2 text-gray-700">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default FormBuilder