import { useInputParams } from "Components/hooks/useInputParams.js";

import "Styles/CenteredText.css";
import "Styles/MainPages/SettingsPage/SettingsPageContent.css";

const ParamGroup = ({ title, stateMap }) => (
	<section className="settings-params__group">
		<h2 className="settings-params__title">{title}</h2>
		<ul className="settings-params__list">
			{Object.entries(stateMap).map(([key, id]) => (
				<li key={key} className="settings-params__item">
					<span className="settings-params__key">{key}</span>
					<span className="settings-params__id">— id: {id === "" ? "∅" : String(id)}</span>
				</li>
			))}
		</ul>
	</section>
);

export const SettingsPageContent = () => {
	const { brandState, typeState, buyerState, locationState, isLoading } =
		useInputParams();

	if (isLoading) {
		return <p className="centered-text">Loading...</p>;
	}

	return (
		<div className="settings-params">
			<ParamGroup title="Brands" stateMap={brandState} />
			<ParamGroup title="Types" stateMap={typeState} />
			<ParamGroup title="Buyers" stateMap={buyerState} />
			<ParamGroup title="Locations" stateMap={locationState} />
		</div>
	);
};
