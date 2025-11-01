import { useState } from "react";

function SkillForm({ addSkill, closeForm }) {
  const [skillName, setSkillName] = useState("");
  const [proficiency, setProficiency] = useState("Beginner");

  const handleSubmit = (e) => {
    e.preventDefault();
    addSkill({ skillName, proficiency });
    setSkillName("");
    setProficiency("Beginner");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-5 bg-white rounded-xl shadow-md w-full"
    >
      <h2 className="font-semibold text-lg sm:text-xl text-gray-800 mb-2">
        Add Skill
      </h2>

      <input
        value={skillName}
        onChange={(e) => setSkillName(e.target.value)}
        placeholder="Skill Name"
        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        required
      />

      <select
        value={proficiency}
        onChange={(e) => setProficiency(e.target.value)}
        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Expert</option>
      </select>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-end">
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 transition-colors duration-150"
        >
          Add Skill
        </button>
        <button
          type="button"
          onClick={closeForm}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition-colors duration-150"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default SkillForm;
