import React from 'react';
import { CheckboxMultiFilter } from './SpecificFilters/CheckboxMultiFilter';
import { RangeFilter } from './SpecificFilters/RangeFilter';
import { FilterWithButton } from './FilterWithButton';

import arrowUp from 'Images/Filters/arrow_up.svg';
import arrowDown from 'Images/Filters/arrow_down.svg';
import checkmark from 'Images/checkmark.svg';
import rangeArrow from 'Images/Filters/price_range_arrow.svg';

import * as Constants from './Constants';

export const FilterBuilder = ({
  availableFilters,
  filtersState,
  toggleFilterVisibility,
  onFilterStateChanged,
  filtersVisibility
}) => {
  const renderFilter = (filterData) => {
    switch (filterData.type) {
      case Constants.FilterType.multiCheckbox:
        return (
          <CheckboxMultiFilter
            allValues={filterData.values}
            checkedOptions={filtersState[filterData.name] || []}
            onChange={onFilterStateChanged(filterData.name)}
            checkmarkImg={checkmark}
          />
        );
      case Constants.FilterType.range:
        return (
          <RangeFilter
            image={rangeArrow}
			onChange={onFilterStateChanged(filterData.name)}
            currentValues={filtersState[filterData.name] || { min: '', max: '' }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="outer-window-filters">
      {availableFilters.map((filterData) => (
        <FilterWithButton
          key={filterData.name}
          filter={renderFilter(filterData)}
          labelText={filterData.name}
          className="filter-with-button"
          buttonClassName="filter-button"
          iconClassName="filter-arrow-icon"
          iconInactive={arrowUp}
          iconActive={arrowDown}
          onClick={() => toggleFilterVisibility(filterData.name)}
          altImg={filterData.name}
          isActive={filtersVisibility[filterData.name]}
        />
      ))}
    </div>
  );
};
