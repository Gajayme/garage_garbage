const SettingsOptionRowEdit = ({
	draftTitle,
	onDraftChange,
	onSaveEdit,
	onCancelEdit,
	isUpdatePending,
	saveDisabled,
}) => (
	<>
		<input
			type="text"
			className="settings-params__row-input"
			value={draftTitle}
			onChange={onDraftChange}
			disabled={isUpdatePending}
			onKeyDown={(e) => {
				if (e.key === "Enter" && !saveDisabled) onSaveEdit();
				if (e.key === "Escape") onCancelEdit();
			}}
			aria-label="Edit title"
		/>
		<div className="settings-params__item-actions">
			<button
				type="button"
				className="settings-params__save-button"
				onClick={onSaveEdit}
				disabled={saveDisabled}
			>
				{isUpdatePending ? "…" : "Save"}
			</button>
			<button
				type="button"
				className="settings-params__cancel-button"
				onClick={onCancelEdit}
				disabled={isUpdatePending}
			>
				Cancel
			</button>
		</div>
	</>
);

const SettingsOptionRowView = ({
	item,
	onStartEdit,
	onDeleteItem,
	editingItemId,
	viewActionsLocked,
}) => (
	<>
		<span className="settings-params__key">{item.title}</span>
		<div className="settings-params__item-actions">
			<button
				type="button"
				className="settings-params__edit-button"
				onClick={() => onStartEdit(item.id, item.title)}
				disabled={viewActionsLocked || editingItemId != null}
			>
				Edit
			</button>
			<button
				type="button"
				className="settings-params__delete-button"
				onClick={() => onDeleteItem(item.id, item.title)}
				disabled={viewActionsLocked}
			>
				Delete
			</button>
		</div>
	</>
);

export const SettingsOptionsList = ({
	items,
	onDeleteItem,
	isDeletePending,
	isAddPending,
	isUpdatePending,
	editingItemId,
	draftTitle,
	editingOriginalTitle,
	onDraftChange,
	onStartEdit,
	onSaveEdit,
	onCancelEdit,
}) => {
	const viewActionsLocked =
		isAddPending || isDeletePending || isUpdatePending;

	return (
		<ul className="settings-params__list">
			{(items ?? []).map((item) => {
				const isEditing = editingItemId === item.id;
				const trimmedDraft = draftTitle.trim();
				const saveDisabled =
					isUpdatePending ||
					isAddPending ||
					isDeletePending ||
					!trimmedDraft ||
					trimmedDraft === (editingOriginalTitle ?? "").trim();

				return (
					<li key={item.id} className="settings-params__item">
						{isEditing ? (
							<SettingsOptionRowEdit
								draftTitle={draftTitle}
								onDraftChange={onDraftChange}
								onSaveEdit={onSaveEdit}
								onCancelEdit={onCancelEdit}
								isUpdatePending={isUpdatePending}
								saveDisabled={saveDisabled}
							/>
						) : (
							<SettingsOptionRowView
								item={item}
								onStartEdit={onStartEdit}
								onDeleteItem={onDeleteItem}
								editingItemId={editingItemId}
								viewActionsLocked={viewActionsLocked}
							/>
						)}
					</li>
				);
			})}
		</ul>
	);
};
