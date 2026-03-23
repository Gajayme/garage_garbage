import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as GlobalConstants from "Constants.js";
import { useInputParams } from "Components/hooks/useInputParams.js";

import "Styles/CenteredText.css";
import "Styles/MainPages/SettingsPage/SettingsPageContent.css";

const addSettingRequest = async ({ apiPath, value }) => {
	const response = await fetch(
		GlobalConstants.base_server_url + apiPath,
		{
			method: GlobalConstants.http_methods.POST,
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ title: value }),
			credentials: "include",
		},
	);

	if (!response.ok) {
		const data = await response.json().catch(() => ({}));
		throw new Error(data.message || `Ошибка: ${response.status}`);
	}
	return response.json();
};

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
	const queryClient = useQueryClient();
	const { brands, types, buyers, locations, isLoading } = useInputParams();
	const [newBrandTitle, setNewBrandTitle] = useState("");
	const [addBrandError, setAddBrandError] = useState(null);

	const addBrandMutation = useMutation({
		mutationFn: (title) =>
			addSettingRequest({
				apiPath: GlobalConstants.brandUploadApi,
				value: title,
			}),
		onSuccess: () => {
			setAddBrandError(null);
			setNewBrandTitle("");
			queryClient.invalidateQueries({ queryKey: [GlobalConstants.brandsQueryKey] });
		},
		onError: (err) => {
			setAddBrandError(err.message);
		},
	});

	const handleAddBrand = () => {
		const title = newBrandTitle.trim();
		if (!title || addBrandMutation.isPending) return;
		setAddBrandError(null);
		addBrandMutation.mutate(title);
	};

	if (isLoading) {
		return <p className="centered-text">Loading...</p>;
	}

	return (
		<div className="settings-params">
			<section className="settings-params__group">
				<h2 className="settings-params__title">Brands</h2>
				<div className="settings-params__add-row">
					<input
						type="text"
						className="settings-params__add-input"
						value={newBrandTitle}
						onChange={(e) => setNewBrandTitle(e.target.value)}
						placeholder="Add brand"
						disabled={addBrandMutation.isPending}
						onKeyDown={(e) => {
							if (e.key === "Enter") handleAddBrand();
						}}
					/>
					<button
						type="button"
						className="settings-params__add-button"
						onClick={handleAddBrand}
						disabled={addBrandMutation.isPending || !newBrandTitle.trim()}
					>
						{addBrandMutation.isPending ? "…" : "Добавить"}
					</button>
				</div>
				{addBrandError ? (
					<p className="settings-params__add-error" role="alert">
						{addBrandError}
					</p>
				) : null}
				<ul className="settings-params__list">
					{(brands ?? []).map((item) => (
						<li key={item.id} className="settings-params__item">
							<span className="settings-params__key">{item.title}</span>
						</li>
					))}
				</ul>
			</section>
			<ParamGroup title="Types" items={types} />
			<ParamGroup title="Buyers" items={buyers} />
			<ParamGroup title="Locations" items={locations} />
		</div>
	);
};
