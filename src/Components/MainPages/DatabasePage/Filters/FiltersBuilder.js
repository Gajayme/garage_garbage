import React from 'react';
import { CheckboxMultiFilter } from './SpecificFilters/CheckboxMultiFilter';
import { RangeFilter } from './SpecificFilters/RangeFilter';
import { FilterWithButton } from './FilterWithButton';

import arrowUp from 'Images/Filters/arrow_up.svg';
import arrowDown from 'Images/Filters/arrow_down.svg';
import checkmark from 'Images/checkmark.svg';
import rangeArrow from 'Images/Filters/price_range_arrow.svg';

import * as Constants from './SpecificFilters/Constants';

export const FilterBuilder = ({
  availableFilters,
  filtersState,
  toggleCheckboxFilter,
  toggleFilterVisibility,
  filtersVisibility
}) => {
  const renderFilter = (filter) => {
    switch (filter.type) {
      case Constants.FilterType.MultiCheckbox:
        return (
          <CheckboxMultiFilter
            allValues={filter.values}
            checkedOptions={filtersState[filter.id] || []}
            onChange={toggleCheckboxFilter(filter.id)}
            checkmarkImg={checkmark}
          />
        );
      case Constants.FilterType.Range:
        return (
          <RangeFilter
            image={rangeArrow}
            currentValues={filtersState[filter.id] || { min: '', max: '' }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="outer-window-filters">
      {availableFilters.map((filter) => (
        <FilterWithButton
          key={filter.id}
          filter={renderFilter(filter)}
          labelText={filter.id}
          className="filter-with-button"
          buttonClassName="filter-button"
          iconClassName="filter-arrow-icon"
          iconInactive={arrowUp}
          iconActive={arrowDown}
          onClick={() => toggleFilterVisibility(filter.id)}
          altImg={filter.id}
          isActive={filtersVisibility[filter.id]}
        />
      ))}
    </div>
  );
};
