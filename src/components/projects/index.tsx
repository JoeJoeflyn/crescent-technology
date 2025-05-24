"use client";
import { ITEMS_PER_PAGE, PROJECTS } from "@/constants";
import { useCallback, useMemo, useState } from "react";

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = useMemo(
    () => Math.ceil(PROJECTS.length / ITEMS_PER_PAGE),
    []
  );

  // Get the projects for the current page
  const startIndex = useMemo(
    () => (currentPage - 1) * ITEMS_PER_PAGE,
    [currentPage]
  );
  const currentProjects = useMemo(
    () => PROJECTS.slice(startIndex, startIndex + ITEMS_PER_PAGE),
    [startIndex]
  );

  // Handle page change
  const handlePageChange = useCallback(
    (page: number) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      }
    },
    [totalPages]
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-32">
      <div className="flex flex-col gap-6 mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-primary font-semibold">
          Project List
        </h1>
        <p className="text-xl text-primary max-w-5xl">
          The following projects are currently in progress or have been
          completed.
        </p>
      </div>
      {/* Table */}
      <div className="overflow-x-auto shadow-lg">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-primary text-white">
            <tr>
              <th className="py-2 px-4 border-b">SL#</th>
              <th className="py-2 px-4 border-b">Client / Project</th>
              <th className="py-2 px-4 border-b">Project Description</th>
              <th className="py-2 px-4 border-b">AI Components</th>
              <th className="py-2 px-4 border-b">Main Contractor</th>
            </tr>
          </thead>
          <tbody>
            {currentProjects.map((project) => (
              <tr key={project.sl} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  {project.sl}
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  {project.client}
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  {project.description}
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  <ul className="list-disc pl-5">
                    {project.aiComponents.map((component, index) => (
                      <li key={index}>{component}</li>
                    ))}
                  </ul>
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  {project.contractor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-primary text-white rounded disabled:bg-gray-300"
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-1 rounded cursor-pointer ${
              currentPage === index + 1
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-primary text-white rounded disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}
