import { useId, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SettingsAddRow } from "Components/MainPages/SettingsPage/SettingsAddRow.js";
import { SettingsOptionsList } from "Components/MainPages/SettingsPage/SettingsOptionsList.js";
import { addSettingRequest } from "Components/MainPages/SettingsPage/addSettingRequest.js";
import { deleteSettingRequest } from "Components/MainPages/SettingsPage/deleteSettingRequest.js";
import { ToggleIconButton } from "Components/ToggleIconButton.js";

import arrowUp from "Images/Filters/arrow_up.svg";
import arrowDown from "Images/Filters/arrow_down.svg";

import "Styles/MainPages/SettingsPage/SettingsPageContent.css";

export const SettingsDictionarySection = ({
	title,
	items,
	uploadApiPath,
	deleteApiPath,
	queryKey,
	placeholder,
}) => {
	const queryClient = useQueryClient();
	const panelId = useId();
	const [isExpanded, setIsExpanded] = useState(true);
	const [value, setValue] = useState("");
	const [error, setError] = useState(null);
	const [deleteError, setDeleteError] = useState(null);

	// Мутация для добавления нового значения в словарь
	const mutation = useMutation({
		mutationFn: (valueToAdd) =>
			addSettingRequest({ apiPath: uploadApiPath, value: valueToAdd }),
		onSuccess: () => {
			setError(null);
			setValue("");
			queryClient.invalidateQueries({ queryKey: [queryKey] });
		},
		onError: (err) => {
			setError(err.message);
		},
	});

	const deleteMutation = useMutation({
		mutationFn: (id) =>
			deleteSettingRequest({ apiPath: deleteApiPath, id }),
		onSuccess: () => {
			setDeleteError(null);
			queryClient.invalidateQueries({ queryKey: [queryKey] });
		},
		onError: (err) => {
			setDeleteError(err.message);
		},
	});

	const handleDeleteItem = (id, itemTitle) => {
		if (deleteMutation.isPending) return;
		if (!window.confirm(`Удалить «${itemTitle}»?`)) return;
		setDeleteError(null);
		deleteMutation.mutate(id);
	};

	// Обработчик нажатия на кнопку добавления нового значения в словарь
	const handleSubmit = () => {
		const trimmed = value.trim();
		if (!trimmed || mutation.isPending) return;
		setError(null);
		mutation.mutate(trimmed);
	};

	return (
		<section className="settings-params__group">
			<h2 className="settings-params__title settings-params__title--collapsible">
				<ToggleIconButton
					labelText={title}
					className="settings-params__section-toggle"
					iconClassName="settings-params__section-toggle-icon"
					iconInactive={arrowDown}
					iconActive={arrowUp}
					onClick={() => setIsExpanded((open) => !open)}
					isActive={isExpanded}
					disclosure
					aria-controls={panelId}
					altImg=""
				/>
			</h2>
			<div id={panelId} hidden={!isExpanded} className="settings-params__section-body">
				<SettingsAddRow
					value={value}
					onChange={(e) => setValue(e.target.value)}
					onSubmit={handleSubmit}
					placeholder={placeholder}
					isPending={mutation.isPending}
				/>
				{error ? (
					<p className="settings-params__add-error" role="alert">
						{error}
					</p>
				) : null}
				<SettingsOptionsList
					items={items}
					onDeleteItem={handleDeleteItem}
					isDeletePending={deleteMutation.isPending}
				/>
				{deleteError ? (
					<p className="settings-params__add-error" role="alert">
						{deleteError}
					</p>
				) : null}
			</div>
		</section>
	);
};
