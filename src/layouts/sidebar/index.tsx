import React, { useState } from "react";

const degreeStreamMap: Record<string, string[]> = {
  "B.Tech": ["CSE", "ECE", "ME", "CE"],
  "M.Tech": ["CSE", "EEE", "Mechanical"],
  "B.Sc": ["Physics", "Chemistry", "Math"],
  "M.Sc": ["Biotech", "Zoology", "Math"],
  BCA: ["Software Dev", "Networking"],
  MCA: ["AI", "Cloud"],
  MBA: ["Finance", "HR", "Marketing"],
  Diploma: ["Electrical", "Civil", "Mechanical"],
};

const domainList = ["AI", "ML", "Web Dev", "Cloud", "IoT"];

const Sidebar: React.FC = () => {
  const [selectedDegree, setSelectedDegree] = useState<string>("");
  const [selectedStream, setSelectedStream] = useState<string>("");
  const [selectedSemester, setSelectedSemester] = useState<string>("");
  const [credit, setCredit] = useState<string>("");
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);

  const handleDomainChange = (domain: string) => {
    setSelectedDomains((prev) =>
      prev.includes(domain)
        ? prev.filter((d) => d !== domain)
        : [...prev, domain]
    );
  };

  const applyFilters = () => {
    // For demo: just alert the current selections
    alert(
      `Degree: ${selectedDegree}\nStream: ${selectedStream}\nSemester: ${selectedSemester}\nCredit: ${credit}\nDomains: ${selectedDomains.join(
        ", "
      )}`
    );
  };

  return (
    <div className="w-72 p-4 bg-white space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Filter Courses</h2>

      {/* Degree Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Degree
        </label>
        <select
          value={selectedDegree}
          onChange={(e) => {
            setSelectedDegree(e.target.value);
            setSelectedStream(""); // reset stream on degree change
          }}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="">Select Degree</option>
          {Object.keys(degreeStreamMap).map((degree) => (
            <option key={degree} value={degree}>
              {degree}
            </option>
          ))}
        </select>
      </div>

      {/* Stream Filter */}
      {selectedDegree && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Stream
          </label>
          <select
            value={selectedStream}
            onChange={(e) => setSelectedStream(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="">Select Stream</option>
            {(degreeStreamMap[selectedDegree] ?? []).map((stream) => (
              <option key={stream} value={stream}>
                {stream}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Semester Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Semester
        </label>
        <select
          value={selectedSemester}
          onChange={(e) => setSelectedSemester(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="">Select Semester</option>
          {[...Array(8)].map((_, i) => (
            <option key={i} value={(i + 1).toString()}>
              Semester {i + 1}
            </option>
          ))}
        </select>
      </div>

      {/* Credit Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Credit (Optional)
        </label>
        <input
          type="number"
          min={0.1}
          max={10}
          step={0.1}
          value={credit}
          onChange={(e) => setCredit(e.target.value)}
          placeholder="e.g. 3.5"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Domain Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Domain
        </label>
        <div className="space-y-1">
          {domainList?.map((domain) => (
            <div key={domain} className="flex items-center">
              <input
                type="checkbox"
                id={domain}
                checked={selectedDomains.includes(domain)}
                onChange={() => handleDomainChange(domain)}
                className="mr-2"
              />
              <label htmlFor={domain}>{domain}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Apply Button */}
      <button
        onClick={applyFilters}
        className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Sidebar;
