import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { Items } from "Components/MainPages/DatabasePage/Items/Items.js";
import { FiltersWindow } from "./Filters/FiltresWindow";
import { DefaultButton } from "Components/Button.js";
import { buildQueryString } from "./Utils.js";
import { useUrlFilters } from "./useUrlFilters";

import * as GlobalConstants from "Constants.js";
import * as Constants from "./Constants.js";

import "Styles/MainPages/DatabasePage/Items/DatabaseItems.css";
import "Styles/MainPages/DatabasePage/DatabasePage.css";
import "Styles/MainPages/DatabasePage/FiltersActivationButton.css";
import "Styles/MainPages/DatabasePage/FiltersItemsWrapper.css";
import "Styles/CenteredText.css";

export const DatabasePageContent = () => {
	// какие фильтры вообще существуют (приходят с бэка)
	const [allFilters, setAllFilters] = useState([]);
	// окно фильтров открыто/закрыто
	const [isFiltersVisible, setIsFiltersVisible] = useState(false);

	// хук, который занимается URL ↔ filtersState
	const { filtersState, setFilter, initialized } = useUrlFilters(allFilters);

	// запрос за items (+ filters на первом заходе)
	const fetchItems = async ({ signal }) => {
		const query = buildQueryString(filtersState);
		const url = `${GlobalConstants.base_server_url + GlobalConstants.post_all}?${query}`;

		const resp = await fetch(url, {
			method: GlobalConstants.http_methods.GET,
			headers: { "Content-Type": "application/json" },
			signal,
	});

		if (!resp.ok) throw new Error("Failed to fetch");
		return resp.json();
	};

	const { data, isLoading, error } = useQuery({
		queryKey: ["items", filtersState],
		queryFn: fetchItems,
	});

	// один раз берём filters с бэка и сохраняем в allFilters
	useEffect(() => {
		if (data?.filters && allFilters.length === 0) {
			setAllFilters(data.filters);
		}
	}, [data, allFilters.length]);

	// пока либо запрос идёт, либо фильтры ещё не инициализированы
	if (isLoading || !initialized) {
		return (
			<div className="database-page">
				<p className="centered-text">{Constants.loading}</p>
			</div>
		);
	}

	if (error) {
		return (
			<div className="database-page">
				<p className="centered-text">{Constants.loadError}</p>
			</div>
		);
	}

	return (
		<div className="database-page">
			<DefaultButton
				className="filter-activation-button"
				labelText="Filters"
				onClick={() => setIsFiltersVisible((prev) => !prev)}
			/>

			<div className="filters-items-wrapper">
				{isFiltersVisible && (
					<FiltersWindow
						availableFilters={allFilters}
						filtersState={filtersState}
						onFilterStateChanged={(name) => (value) => setFilter(name, value)}
					/>
				)}

				<Items databaseState={data.data} />
			</div>
		</div>
	);
};
