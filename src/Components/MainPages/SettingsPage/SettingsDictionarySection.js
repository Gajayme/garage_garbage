import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SettingsAddRow } from "Components/MainPages/SettingsPage/SettingsAddRow.js";
import { SettingsOptionsList } from "Components/MainPages/SettingsPage/SettingsOptionsList.js";
import { addSettingRequest } from "Components/MainPages/SettingsPage/addSettingRequest.js";

import "Styles/MainPages/SettingsPage/SettingsPageContent.css";

export const SettingsDictionarySection = ({
	title,
	items,
	uploadApiPath,
	queryKey,
	placeholder,
}) => {
	const queryClient = useQueryClient();
	const [value, setValue] = useState("");
	const [error, setError] = useState(null);

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

	// Обработчик нажатия на кнопку добавления нового значения в словарь
	const handleSubmit = () => {
		const trimmed = value.trim();
		if (!trimmed || mutation.isPending) return;
		setError(null);
		mutation.mutate(trimmed);
	};

	return (
		<section className="settings-params__group">
			<h2 className="settings-params__title">{title}</h2>
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
			<SettingsOptionsList items={items} />
		</section>
	);
};
