"use client"

import { useEffect, useState } from "react"

interface Resource {
  State: string
  County: string
  Category: string
  "Organization Name": string
  Description: string
  Phone: string
  Website: string
}

export default function FindHelpFromJSON() {
  const [data, setData] = useState<Resource[]>([])
  const [state, setState] = useState("Minnesota")
  const [county, setCounty] = useState("")
  const [category, setCategory] = useState("")
  const [results, setResults] = useState<Resource[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // Load the JSON once on mount
  useEffect(() => {
    fetch("/data/resources.json")
      .then((res) => {
        if (!res.ok) throw new Error(`Status ${res.status}`)
        return res.json()
      })
      .then((json: Resource[]) => setData(json))
      .catch((err) => {
        console.error("Failed to load resource data:", err)
        setError("Resource list is temporarily unavailable. Please try again later.")
      })
  }, [])

  const states = [...new Set(data.map((d) => d.State))]
  const counties = [...new Set(data.filter((d) => d.State === state).map((d) => d.County))]
  const categories = [...new Set(data.map((d) => d.Category))]

  const handleSearch = () => {
    if (!county || !category) {
      setError("Please select both a county and a category.")
      return
    }
    setError("")
    setLoading(true)

    const matches = data.filter(
      (d) => d.State === state && d.County === county && d.Category === category,
    )

    // quick UX delay
    setTimeout(() => {
      setResults(matches)
      setLoading(false)
    }, 300)
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-xl font-bold text-center mb-4">Find Help Near You</h2>

      {/* SELECTORS */}
      <div className="flex flex-col gap-3 mb-4">
        <select
          className="p-2 border rounded"
          value={state}
          onChange={(e) => {
            setState(e.target.value)
            setCounty("")
          }}
        >
          <option value="">Select a State</option>
          {states.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>

        <select
          className="p-2 border rounded"
          value={county}
          disabled={!state}
          onChange={(e) => setCounty(e.target.value)}
        >
          <option value="">Select a County</option>
          {counties.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <select className="p-2 border rounded" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select a Category</option>
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <button
          onClick={handleSearch}
          className="bg-coral text-white py-2 px-4 rounded hover:bg-coral/90 disabled:opacity-50"
          disabled={loading || data.length === 0}
        >
          {loading ? "Searching..." : "Find Help"}
        </button>
      </div>

      {/* FEEDBACK */}
      {error && <p className="text-red-600 text-center text-sm mb-4">{error}</p>}

      {/* RESULTS */}
      <div className="space-y-4">
        {!loading && results.length === 0 && !error && (
          <p className="text-center text-sm text-gray-500">Select options and click “Find Help”.</p>
        )}

        {results.map((r, idx) => (
          <div key={idx} className="p-4 bg-gray-50 border rounded">
            <h3 className="font-semibold">{r["Organization Name"]}</h3>
            <p className="text-sm mb-1">{r.Description}</p>
            <p className="text-sm">
              📞 <a href={`tel:${r.Phone}`}>{r.Phone}</a>
              {r.Website && (
                <>
                  <br />🌐{" "}
                  <a href={r.Website} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    Website
                  </a>
                </>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
