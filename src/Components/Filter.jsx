/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Chip from "@mui/material/Chip";
import { useSelector, useDispatch } from "react-redux";
import { addFilter, removeFilter } from "../slices/FilterSlice";

const Filter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const challengesData = useSelector((state) => state.challenges.value);
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();


  const parseDateString = (dateString) => {
    if (!dateString) return new Date();

    const months = {
      January: 0,
      February: 1,
      March: 2,
      April: 3,
      May: 4,
      June: 5,
      July: 6,
      August: 7,
      September: 8,
      October: 9,
      November: 10,
      December: 11,
    };

    const parts = dateString.match(
      /(\d+)\w*\s+(\w+)'(\d+)\s+(\d+:\d+\s+[APM]+)/
    );
    if (parts) {
      const day = parseInt(parts[1], 10);
      const month = months[parts[2]];
      const year = `20${parts[3]}`;
      const time = parts[4];

      const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(
        day
      ).padStart(2, "0")} ${time}`;
      return new Date(dateStr);
    }

    return new Date(dateString);
  };

  const performFilter = () => {
    const now = new Date();
    let filteredChallenges = challengesData;

    if (selectedFilters.includes("Active")) {
      filteredChallenges = filteredChallenges.filter(
        (challenge) =>
          parseDateString(challenge.startDate) < now &&
          parseDateString(challenge.endDate) > now
      );
    } else if (selectedFilters.includes("Upcoming")) {
      filteredChallenges = filteredChallenges.filter(
        (challenge) =>
          parseDateString(challenge.startDate) > now &&
          parseDateString(challenge.endDate) > now
      );
    } else if (selectedFilters.includes("Past")) {
      filteredChallenges = filteredChallenges.filter(
        (challenge) => parseDateString(challenge.endDate) < now
      );
    }

    if (
      ["Easy", "Medium", "Hard"].some((level) =>
        selectedFilters.includes(level)
      )
    ) {
      filteredChallenges = filteredChallenges.filter((challenge) =>
        selectedFilters.includes(challenge.level)
      );
    }

    console.log(filteredChallenges);
    dispatch(addFilter(filteredChallenges));
  };

  const handleInput = (event) => {
    setSearchInput(event.target.value);
  };

  const performSearch = () => {
    if (!searchInput.trim()) {
      dispatch(addFilter(challengesData));
      return;
    }

    let data = challengesData.filter((challenge) =>
      challenge.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    console.log(data);
    dispatch(addFilter(data));
  };

  useEffect(() => {
    if (selectedFilters.length > 0) {
      performFilter();
    }
  }, [selectedFilters]);

  useEffect(() => {
    performSearch();
  }, [searchInput]);

  const handleDeletePills = (filterToDelete) => {
    dispatch(removeFilter(filterToDelete));
    const updatedSelectedFilters = selectedFilters.filter(
      (filter) => filter !== filterToDelete
    );
    setSelectedFilters(updatedSelectedFilters);
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
      checked ? [...prev, value] : prev.filter((filter) => filter !== value)
    );
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
            value={searchInput}
            onChange={handleInput}
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
              <div
                className="fixed inset-0 bg-[#000000] bg-opacity-[32%] z-40"
                onClick={closeModal}
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
