import React, { useState } from 'react';

const Tabs = () => {
  const [selectedNavItem, setSelectedNavItem] = useState(null);

  // Function to handle navigation item selection
  const handleNavItemClick = (item) => {
    setSelectedNavItem(item);
    // You can implement logic to fetch data related to the selected item here
  };

  // Sample data for navigation items and corresponding cards
  const navItems = [
    { id: 1, label: '1 Week' },
    { id: 2, label: '1-2 Weeks' },
    { id: 3, label: '3 Weeks' },
    { id: 4, label: '4 Weeks' },
    { id: 5, label: '5 Weeks' },
    { id: 6, label: '6 Weeks' },
    { id: 7, label: '7 Weeks' },
    { id: 8, label: '8 Weeks' },
    { id: 9, label: '9 Weeks' },
    { id: 10, label: '10 Weeks' },
  ];

  // Sample cards data for each navigation item
  const cardsData = {
    1: ["Card 1 for Week 1", "Card 2 for Week 1"],
    2: ["Card 1 for Week 1-2", "Card 2 for Week 1-2"],
    // Add more card data for other weeks as needed
  };

  return (
    <div>
      {/* Navigation */}
      <ul>
        {navItems.map((item) => (
          <li key={item.id} onClick={() => handleNavItemClick(item)}>
            {item.label}
          </li>
        ))}
      </ul>

      {/* Image and related content */}
      {selectedNavItem && (
        <div>
          {/* Display image here */}
          <img src={`path/to/image/${selectedNavItem.label}.jpg`} alt={selectedNavItem.label} />

          {/* Dropdown for names */}
          <select>
            <option value="name1">Name 1</option>
            <option value="name2">Name 2</option>
            {/* Add more names as needed */}
          </select>

          {/* Cards related to selected navigation item */}
          <div>
            {cardsData[selectedNavItem.id].map((card, index) => (
              <div key={index}>
                {card}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tabs;
