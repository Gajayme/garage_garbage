import * as GlobalConstants from "Constants.js";
import { useInputParams } from "Components/hooks/useInputParams.js";
import { SettingsDictionarySection } from "Components/MainPages/SettingsPage/SettingsDictionarySection.js";

import "Styles/CenteredText.css";
import "Styles/MainPages/SettingsPage/SettingsPageContent.css";

export const SettingsPageContent = () => {
	const { brands, types, buyers, locations, isLoading } = useInputParams();

	if (isLoading) {
		return <p className="centered-text">Loading...</p>;
	}

	return (
		<div className="settings-params">
			<SettingsDictionarySection
				title="Brands"
				items={brands}
				uploadApiPath={GlobalConstants.brandUploadApi}
				queryKey={GlobalConstants.brandsQueryKey}
				placeholder="Add brand"
			/>
			<SettingsDictionarySection
				title="Types"
				items={types}
				uploadApiPath={GlobalConstants.typeUploadApi}
				queryKey={GlobalConstants.typesQueryKey}
				placeholder="Add type"
			/>
			<SettingsDictionarySection
				title="Buyers"
				items={buyers}
				uploadApiPath={GlobalConstants.buyerUploadApi}
				queryKey={GlobalConstants.buyersQueryKey}
				placeholder="Add buyer"
			/>
			<SettingsDictionarySection
				title="Locations"
				items={locations}
				uploadApiPath={GlobalConstants.locationUploadApi}
				queryKey={GlobalConstants.locationsQueryKey}
				placeholder="Add location"
			/>
		</div>
	);
};
