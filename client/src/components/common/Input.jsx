const Input = ({ label, inputchangeHandler, inputValue, type }) => {
  return (
    <>
      <div className="relative mt-4 flex flex-col">
        <input
          type={`${type ? "text" : "password"}`}
          className="bg-gray-100 text-gray-900 border-gray-200 peer rounded-lg border p-2.5 text-lg outline-none"
          required
        />

        <span
          className={`text-gray-500 pointer-events-none absolute ml-2.5 mt-4 flex transition-all peer-placeholder-shown:-translate-y-0 peer-focus:-translate-y-7 peer-[:not(:placeholder-shown)]:text-sm`}
        >
          {label}
        </span>
      </div>
    </>
  );
};

export default Input;
