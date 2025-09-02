"use client";

import { useState } from "react";

export default function FindHelpWidget() {
  const [county, setCounty] = useState("");
  const [category, setCategory] = useState("Food Help");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const categories = [
    "Food Help",
    "Diapers & Baby Supplies",
    "Clothing & School Supplies",
    "Bill Help",
    "Debt + Credit Help",
    "Birthday Freebies",
    "Electronics & Internet Deals",
    "Housing & Shelter",
    "Free Family Activities",
  ];

  const handleSearch = async () => {
    if (!county || county.length < 3) {
      setError("Please enter a valid Minnesota county name.");
      return;
    }

    setError("");
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/api/getHelp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ county, category }),
      });

      const data = await res.json();
      setResponse(data.result || "Sorry, nothing came back.");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-2 text-center">Find Help Near You</h2>
      <div className="flex flex-col gap-2">
        <input
          className="border rounded p-2"
          placeholder="Enter your County (ex: Anoka)"
          value={county}
          onChange={(e) => setCounty(e.target.value)}
        />
        <select
          className="border rounded p-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
        <button
          onClick={handleSearch}
          className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700"
        >
          {loading ? "Searching..." : "Find Help"}
        </button>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {response && (
          <div className="mt-4 p-4 bg-gray-100 rounded whitespace-pre-line">
            {response}
          </div>
        )}
      </div>
    </div>
  );
}
