/* eslint-disable react/prop-types */

const Input = ({ label, inputValue, type, ...handle }) => {
  return (
    <>
      <div className="relative mt-4 flex flex-col">
        <input
          value={inputValue}
          {...handle}
          type={`${type ? "text" : "password"}`}
          className="peer rounded-lg border border-black-light bg-white-light p-2.5 text-lg text-black-dark outline-none"
          required
        />

        <span
          className={`pointer-events-none absolute ml-2.5 mt-4 flex bg-white-default px-1 text-black transition-all peer-placeholder-shown:-translate-y-0 peer-focus:-translate-y-7 peer-[:not(:placeholder-shown)]:text-sm`}
        >
          {label}
        </span>
      </div>
    </>
  );
};

export default Input;
