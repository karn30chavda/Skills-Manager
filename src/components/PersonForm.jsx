import { useState } from "react";

function PersonForm({ addPerson }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addPerson({ id: Date.now(), firstName, lastName, email, skills: [] });
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 mb-6 p-5 bg-white rounded-xl shadow-md"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
      </div>
      <div className="flex justify-end mt-3">
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded transition-colors duration-150"
        >
          Add Person
        </button>
      </div>
    </form>
  );
}

export default PersonForm;
