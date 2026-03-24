export const SettingsOptionsList = ({ items }) => (
	<ul className="settings-params__list">
		{(items ?? []).map((item) => (
			<li key={item.id} className="settings-params__item">
				<span className="settings-params__key">{item.title}</span>
			</li>
		))}
	</ul>
);
