import { useEffect, useState } from "react";
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";
import SkillForm from "./components/SkillForm";

function App() {
  const [persons, setPersons] = useState(
    JSON.parse(localStorage.getItem("persons")) || []
  );
  const [selectedPersonId, setSelectedPersonId] = useState(null);

  useEffect(() => {
    localStorage.setItem("persons", JSON.stringify(persons));
  }, [persons]);

  const addPerson = (person) => setPersons([...persons, person]);
  const deletePerson = (id) => setPersons(persons.filter((p) => p.id !== id));
  const addSkill = (skill) => {
    setPersons(
      persons.map((p) =>
        p.id === selectedPersonId ? { ...p, skills: [...p.skills, skill] } : p
      )
    );
    setSelectedPersonId(null);
  };

  return (
    <div className="min-h-screen bg-gray-500 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-gray-300 shadow-lg rounded-xl p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-6">
          Skills Management
        </h1>

        {/* Person Form */}
        <div className="mb-6">
          <PersonForm addPerson={addPerson} />
        </div>

        {/* Person List */}
        <div className="mb-6">
          <PersonList
            persons={persons}
            selectPerson={setSelectedPersonId}
            deletePerson={deletePerson}
          />
        </div>

        {/* Skill Form Modal */}
        {selectedPersonId && (
          <div className="fixed inset-0 bg-gray-500  bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-gray-300 rounded-xl p-6 w-full max-w-md shadow-lg">
              <SkillForm
                addSkill={addSkill}
                closeForm={() => setSelectedPersonId(null)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
