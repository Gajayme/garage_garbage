
import React, { useState } from 'react';

const MyDropdown = ({options}, ...rest) => {

  const [selectedOption, setSelectedOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);



  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Закрываем дропдаун после выбора
  };

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer', border: '1px solid #ccc', padding: '10px' }}>
        {selectedOption || 'Выберите вариант'} ▼
      </div>
      {isOpen && (
        <div style={{ border: '1px solid #ccc', marginTop: '5px' }}>
          {options.map((option) => (
            <div key={option} onClick={() => handleOptionClick(option)} style={{ padding: '10px', cursor: 'pointer' }}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyDropdown;
