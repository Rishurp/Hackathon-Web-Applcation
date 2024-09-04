import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Chip from "@mui/material/Chip";

const Filter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleDeletePills = (filterToDelete) => {
    setSelectedFilters((prev) =>
      prev.filter((filter) => filter !== filterToDelete)
    );
  };

  const handleFilterClick = () => {
    setIsFilterOpen((prev) => !prev);
  };

  const closeModal = () => {
    setIsFilterOpen(false);
  };

  const handleOptionChange = (event) => {
    const { value, checked } = event.target;
    setSelectedFilters((prev) =>
      checked ? [...prev, value] : prev.filter((filter) => filter != value)
    );
    closeModal();
  };

  return (
    <div className="bg-[#002A3B] flex flex-col items-center py-10">
      <div>
        <p className="text-white font-semibold text-xl">Explore Challenges</p>
      </div>
      <div className="py-6 flex justify-between w-[50%] mx-auto">
        <div className="w-[80%] flex items-center bg-white px-2 rounded-md">
          <SearchIcon />
          <input
            className="w-full text-[#858585] outline-none px-4 py-1"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="mx-4 relative">
          <button
            onClick={handleFilterClick}
            className="flex items-center px-4 outline-none rounded-md py-1 bg-white text-[#002A3B]"
          >
            Filter
            <ExpandMoreIcon />
          </button>

          {isFilterOpen && (
            <div>
              {/* Overlay */}
              <div
                className="fixed inset-0 bg-[#000000] bg-opacity-[32%] z-40"
                onClick={closeModal} // Close modal when clicking on the overlay
              ></div>
              {/* Modal */}
              <div className="absolute top-0 right-15  bg-white shadow-lg rounded-lg p-4 z-50 w-64">
                <div className="flex justify-between border-b py-1">
                  <p className="font-semibold text-lg">Filter</p>
                  <ExpandLessIcon />
                </div>
                <div className="mt-2 flex flex-col border-b ">
                  <p className="font-medium">Status</p>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="All"
                        checked={selectedFilters.includes("All")}
                        onChange={handleOptionChange}
                      />
                    }
                    label="All"
                    className="text-[#002A3B]"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="Active"
                        checked={selectedFilters.includes("Active")}
                        onChange={handleOptionChange}
                      />
                    }
                    label="Active"
                    className="text-[#002A3B]"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="Upcoming"
                        checked={selectedFilters.includes("Upcoming")}
                        onChange={handleOptionChange}
                      />
                    }
                    label="Upcoming"
                    className="text-[#002A3B]"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="Past"
                        checked={selectedFilters.includes("Past")}
                        onChange={handleOptionChange}
                      />
                    }
                    label="Past"
                    className="text-[#002A3B]"
                  />
                </div>
                <div className="mt-2 flex flex-col">
                  <p className="font-medium">Level</p>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="Easy"
                        checked={selectedFilters.includes("Easy")}
                        onChange={handleOptionChange}
                      />
                    }
                    label="Easy"
                    className="text-[#002A3B]"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="Medium"
                        checked={selectedFilters.includes("Medium")}
                        onChange={handleOptionChange}
                      />
                    }
                    label="Medium"
                    className="text-[#002A3B]"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="Hard"
                        checked={selectedFilters.includes("Hard")}
                        onChange={handleOptionChange}
                      />
                    }
                    label="Hard"
                    className="text-[#002A3B]"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex  ">
        {selectedFilters.map((filter, index) => (
          <Chip
            key={index}
            label={filter}
            onDelete={() => handleDeletePills(filter)}
            style={{
              backgroundColor: "#F8F9FD",
              opacity: "40%",
              marginInline: "1rem",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;
