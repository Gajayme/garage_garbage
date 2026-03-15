import React, { useEffect, useState } from "react";

import { Items } from "Components/MainPages/CatalogPage/Items/Items.js";
import { FiltersWindow } from "./Filters/FiltresWindow";
import { DefaultButton } from "Components/Button.js";
import { useUrlFilters } from "./useUrlFilters";
import { useCatalogItems } from "./useCatalogItems";

import "Styles/MainPages/CatalogPage/Items/CatalogItems.css";
import "Styles/MainPages/CatalogPage/FilterActivationButtons.css";
import "Styles/MainPages/CatalogPage/FiltersItemsWrapper.css";
import "Styles/CenteredText.css";

export const CatalogPageContent = () => {
	// какие фильтры вообще существуют (приходят с бэка)
	const [allFilters, setAllFilters] = useState([]);
	// окно фильтров открыто/закрыто
	const [isFiltersVisible, setIsFiltersVisible] = useState(false);

	// хук, который занимается URL ↔ filtersState
	const { filtersState, setFilter, resetFilters, initialized } = useUrlFilters(allFilters);

	const { data, error, isLoading } = useCatalogItems(filtersState);

	// один раз берём filters с бэка и сохраняем в allFilters
	useEffect(() => {
		if (data?.filters && allFilters.length === 0) {
			setAllFilters(data.filters);
		}
	}, [data, allFilters.length]);

	// пока фильтры ещё не инициализированы, отображаем загрузочный текст вместо всего контента
	if (!initialized) {
		return (
			<p className="centered-text">Loading...</p>
		);
	}
	// если произошла ошибка, отображаем текст ошибки
	else if (error) {
		return (
			<p className="centered-text">Error happened</p>
		);
	}

	const items = data?.data ?? [];

	return (
		<div>
			<div className="filter-buttons-wrapper">
				<DefaultButton
					className="filter-activation-button"
					labelText="Filters"
					onClick={() => setIsFiltersVisible((prev) => !prev)}
				/>
				<DefaultButton
					className="filter-reset-button"
					labelText="Reset filters"
					onClick={resetFilters}
				/>
			</div>

			<div className="filters-items-wrapper">
				{isFiltersVisible && (
					<FiltersWindow
						availableFilters={allFilters}
						filtersState={filtersState}
						onFilterStateChanged={(name) => (value) => setFilter(name, value)}
					/>
				)}
				{/* пока запрос идёт, отображаем загрузочный текст (только вместо карточек товаров)*/}
				{isLoading ? (
					<p className="centered-text">Loading...</p>
				) : (
					<Items catalogState={items} />
				)}
			</div>
		</div>
	);
};
