import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { Items } from "Components/MainPages/CatalogPage/Items/Items.js";
import { FiltersWindow } from "./Filters/FiltresWindow";
import { DefaultButton } from "Components/Button.js";
import { buildQueryString } from "./Utils.js";
import { useUrlFilters } from "./useUrlFilters";

import * as GlobalConstants from "Constants.js";

import "Styles/MainPages/CatalogPage/Items/CatalogItems.css";
import "Styles/MainPages/CatalogPage/FiltersActivationButton.css";
import "Styles/MainPages/CatalogPage/FiltersItemsWrapper.css";
import "Styles/CenteredText.css";

export const CatalogPageContent = () => {
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

	const {
			data,
			error
		} = useQuery({
			queryKey: [GlobalConstants.itemsQuery, filtersState],
			queryFn: fetchItems,
			keepPreviousData: true,
	});

	// один раз берём filters с бэка и сохраняем в allFilters
	useEffect(() => {
		if (data?.filters && allFilters.length === 0) {
			setAllFilters(data.filters);
		}
	}, [data, allFilters.length]);

	// пока либо запрос идёт, либо фильтры ещё не инициализированы
	if (!initialized) {
		return (
			<p className="centered-text">Loading...</p>
		);
	}

	else if (error) {
		return (
			<p className="centered-text">Error happened</p>
		);
	}

	const items = data?.data ?? [];

	return (
		<div>
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

				<Items catalogState={items} />
			</div>
		</div>
	);
};
