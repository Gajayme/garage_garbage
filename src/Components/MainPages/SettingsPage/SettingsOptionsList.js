export const SettingsOptionsList = ({ items, onDeleteItem, isDeletePending }) => (
	<ul className="settings-params__list">
		{(items ?? []).map((item) => (
			<li key={item.id} className="settings-params__item">
				<span className="settings-params__key">{item.title}</span>
				<button
					type="button"
					className="settings-params__delete-button"
					onClick={() => onDeleteItem(item.id, item.title)}
					disabled={isDeletePending}
				>
					Delete
				</button>
			</li>
		))}
	</ul>
);
