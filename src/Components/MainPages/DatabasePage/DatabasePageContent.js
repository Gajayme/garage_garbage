import { usePrivateCatalogItems } from "Components/MainPages/DatabasePage/usePrivateCatalogItems.js";
import { DatabaseItems } from "Components/MainPages/DatabasePage/Items/DatabaseItems.js";

import "Styles/CenteredText.css";

export const DatabasePageContent = () => {
	const { data, error, isLoading } = usePrivateCatalogItems();

	if (isLoading) {
		return <p className="centered-text">Loading...</p>;
	}

	if (error) {
		return <p className="centered-text">Error happened</p>;
	}

	const items = data?.data ?? [];

	return <DatabaseItems catalogState={items} />;
};
