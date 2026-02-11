"use client";

export function SortDropdown({ currentSort = "top" }) {
  const handleChange = (e) => {
    window.location.href = `/?sort=${e.target.value}`;
  };

  return (
    <div className="mb-4 flex items-center">
      <label className="mr-2 text-zinc-600">Sort by:</label>
      <select 
        value={currentSort} 
        onChange={handleChange}
        className="border border-zinc-300 rounded px-3 py-2 bg-white"
      >
        <option value="top">Top (Most Upvotes)</option>
        <option value="recent">Recent (Newest)</option>
      </select>
    </div>
  );
}