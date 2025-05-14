import React, { useState } from 'react';

const FilterModal = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDateOption, setSelectedDateOption] = useState('Today');

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const years = Array.from({ length: 10 }, (_, i) => (new Date().getFullYear() - 5 + i).toString());
  const daysInWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  // Calculate calendar details
  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();
  
  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Navigation handlers
  const prevMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 0) {
        setCurrentYear((y) => y - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  const nextMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 11) {
        setCurrentYear((y) => y + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  // Date selection handler
  const handleDateClick = (day) => {
    setSelectedDate(new Date(currentYear, currentMonth, day));
    setSelectedDateOption(null); // Clear custom date option when selecting a specific date
  };

  // Custom date option handler
  const handleCustomDateClick = (option) => {
    setSelectedDateOption(option);
    setSelectedDate(null); // Clear selected date when choosing a custom option
  };

  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-sm">
        {/* Calendar Section */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-black-150 mb-1">Calendar</h3>
          <p className="text-gray-750 font-medium text-sm mb-4">Select a date</p>
          <div className="flex justify-between items-center mb-2">
            <button className="p-1" onClick={prevMonth}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 12L6 8L10 4" stroke="#686F83" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="flex space-x-2">
              <select
                value={months[currentMonth]}
                onChange={(e) => setCurrentMonth(months.indexOf(e.target.value))}
                className="px-2 py-1 text-sm text-gray-800"
              >
                {months.map((month) => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
              <select
                value={currentYear}
                onChange={(e) => setCurrentYear(Number(e.target.value))}
                className="px-2 py-1 text-sm text-gray-800"
              >
                {years.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <button className="p-1" onClick={nextMonth}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12L10 8L6 4" stroke="#686F83" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {daysInWeek.map((day) => (
              <div key={day} className="text-xs font-medium text-gray-500">{day}</div>
            ))}
            {Array(firstDay).fill(null).map((_, index) => (
              <div key={`empty-${index}`} />
            ))}
            {calendarDays.map((day) => (
              <button
                key={day}
                onClick={() => handleDateClick(day)}
                className={`text-sm p-3 rounded-lg ${
                  selectedDate &&
                  selectedDate.getDate() === day &&
                  selectedDate.getMonth() === currentMonth &&
                  selectedDate.getFullYear() === currentYear
                    ? 'bg-green-150 text-white'
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Custom Dates Section */}
        <div className="mb-4">
          <h3 className="text-base font-semibold text-gray-800 mb-3">Custom Dates</h3>
          <div className="space-y-2">
            {['Today', 'Yesterday', 'Last Week'].map((option) => (
              <button
                key={option}
                className={`w-full text-left px-3 py-4 rounded-[12px] border border-gray-250 text-sm flex justify-between items-center ${
                  selectedDateOption === option ? 'bg-gray-100' : 'hover:bg-gray-50'
                }`}
                onClick={() => handleCustomDateClick(option)}
              >
                <span>{option}</span>
                {selectedDateOption === option && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 8L6.5 10.5L12 5" stroke="#686F83" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex justify-end space-x-2">
          <button
            className="px-4 py-2 border border-gray-250 rounded-[10px] text-sm text-gray-350 hover:bg-gray-100 cursor-pointer"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-green-150 text-white rounded-[10px] text-sm hover:scale-101 cursor-pointer"
            onClick={onClose}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;