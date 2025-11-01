function PersonList({ persons, selectPerson, deletePerson }) {
  return (
    <div className="space-y-4">
      {/* Mobile/Tablet Cards */}
      <div className="block md:hidden">
        {persons.map((person, index) => (
          <div
            key={person.id}
            className="bg-white rounded-xl shadow-sm p-4 border border-gray-200"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-gray-800">
                  {person.firstName} {person.lastName}
                </h3>
                <p className="text-gray-500 text-sm">{person.email}</p>
              </div>
              <span className="text-gray-400 text-sm">#{index + 1}</span>
            </div>

            <div className="mb-3">
              <p className="text-gray-500 text-sm mb-1">Skills:</p>
              <div className="flex flex-wrap gap-2">
                {person.skills.length > 0 ? (
                  person.skills.map((s, i) => (
                    <span
                      key={i}
                      className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-xs"
                    >
                      {s.skillName} ({s.proficiency})
                    </span>
                  ))
                ) : (
                  <span className="text-gray-400 text-sm">—</span>
                )}
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => selectPerson(person.id)}
                className="flex-1 bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600 text-sm transition-colors duration-150"
              >
                Add Skill
              </button>
              <button
                onClick={() => deletePerson(person.id)}
                className="flex-1 bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 text-sm transition-colors duration-150"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow-sm">
          <thead className="text-gray-500">
            <tr className="text-left">
              <th className="p-3">#</th>
              <th className="p-3">First Name</th>
              <th className="p-3">Last Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Skills</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((person, index) => (
              <tr
                key={person.id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="p-3 align-top text-gray-400">{index + 1}</td>
                <td className="p-3 align-top text-gray-800">
                  {person.firstName}
                </td>
                <td className="p-3 align-top text-gray-800">
                  {person.lastName}
                </td>
                <td className="p-3 align-top text-gray-500">{person.email}</td>
                <td className="p-3 align-top">
                  {person.skills.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {person.skills.map((s, i) => (
                        <span
                          key={i}
                          className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-xs"
                        >
                          {s.skillName} ({s.proficiency})
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                </td>
                <td className="p-3 align-top">
                  <div className="flex gap-2">
                    <button
                      onClick={() => selectPerson(person.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm transition-colors duration-150"
                    >
                      Add Skill
                    </button>
                    <button
                      onClick={() => deletePerson(person.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm transition-colors duration-150"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {persons.length === 0 && (
        <div className="text-center py-8 text-gray-400">No persons found</div>
      )}
    </div>
  );
}

export default PersonList;
