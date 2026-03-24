export const SettingsAddRow = ({
	value,
	onChange,
	onSubmit,
	placeholder,
	isPending,
}) => (
	<div className="settings-params__add-row">
		<input
			type="text"
			className="settings-params__add-input"
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			disabled={isPending}
			onKeyDown={(e) => {
				if (e.key === "Enter") onSubmit();
			}}
		/>
		<button
			type="button"
			className="settings-params__add-button"
			onClick={onSubmit}
			disabled={isPending || !value.trim()}
		>
			{isPending ? "…" : "Add"}
		</button>
	</div>
);
