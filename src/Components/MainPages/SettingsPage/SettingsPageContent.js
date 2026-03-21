import { useInputParams } from "Components/hooks/useInputParams.js";

import "Styles/CenteredText.css";
import "Styles/MainPages/SettingsPage/SettingsPageContent.css";

const ParamGroup = ({ title, items }) => (
	<section className="settings-params__group">
		<h2 className="settings-params__title">{title}</h2>
		<ul className="settings-params__list">
			{(items ?? []).map((item) => (
				<li key={item.id} className="settings-params__item">
					<span className="settings-params__key">{item.title}</span>
				</li>
			))}
		</ul>
	</section>
);

export const SettingsPageContent = () => {
	const { brands, types, buyers, locations, isLoading } = useInputParams();

	if (isLoading) {
		return <p className="centered-text">Loading...</p>;
	}

	return (
		<div className="settings-params">
			<ParamGroup title="Brands" items={brands} />
			<ParamGroup title="Types" items={types} />
			<ParamGroup title="Buyers" items={buyers} />
			<ParamGroup title="Locations" items={locations} />
		</div>
	);
};
