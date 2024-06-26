export const TextInputField = ({ label, placeholder, setFormData, name }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <label className="text-white-600 dark:text-white-400">{label}</label>
      <input
        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-white-600 dark:text-black"
        type="text"
        name={name}
        placeholder={placeholder}
        required
        onChange={handleChange}
      />
    </div>
  );
};
export const TextAreaField = ({ label, placeholder, setFormData, name }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div>
      <label className="text-white-600 dark:text-white-400">{label}</label>
      <textarea
        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-white-600 dark:text-black"
        required
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};
export const FileInputField = ({ setDocument }) => {
  const handleChange = (e) => {
    setDocument(e.target.files[0]);
  };
  return (
    <div className="rounded-md border border-indigo-500 bg-gray-50 p-4 shadow-md w-36">
      <label
        htmlFor="upload"
        className="flex flex-col items-center gap-2 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 fill-white stroke-indigo-500"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <span className="text-gray-600 font-medium">Upload file</span>
      </label>
      <input
        required
        id="upload"
        type="file"
        className="hidden"
        onChange={handleChange}
      />
    </div>
  );
};
export const Button = ({ type, color, text, position }) => {
  return (
    <div className={`flex justify-${position}`}>
      <button
        className={`py-1.5 px-3 m-1 text-center bg-${color}-700 border rounded-md text-white  hover:bg-${color}-500 hover:text-white-100 dark:text-white-200 dark:bg-${color}-700`}
        type={type ? type : 'button'}
      >
        {text}
      </button>
    </div>
  );
};
