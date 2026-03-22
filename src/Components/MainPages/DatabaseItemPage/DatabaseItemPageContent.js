import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

import { DefaultButton } from "Components/Button.js";
import { useAuth } from "Components/Auth/AuthContext.js";
import * as Nav from "Components/Navigation/Constants.js";
import * as Constants from "Constants.js";

import { ItemImages } from "./ItemImages.js";
import { ItemDescription } from "./ItemDescription.js";
import { ItemModalWindow } from "./ItemModalWindow.js";
import { buildItemData } from "./Utils.js";
import { useDatabaseItemDetails } from "./useDatabaseItemDetails.js";

import "Styles/MainPages/DatabaseItemPage/ImagesAndDescriptionWrapper.css";
import "Styles/CenteredText.css";

export const DatabaseItemPageContent = ({ itemID }) => {
	const [modalImageUrl, setModalImageUrl] = useState(null);
	const [isDeleting, setIsDeleting] = useState(false);
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { checkAuth } = useAuth();

	const { data, isFetching, error } = useDatabaseItemDetails(itemID);

	const handleDeleteItem = async () => {
		if (!itemID || isDeleting) return;
		if (!window.confirm("Удалить эту вещь?")) return;

		setIsDeleting(true);
		try {
			const response = await fetch(
				`${Constants.base_server_url}${Constants.post_delete}/${encodeURIComponent(itemID)}`,
				{
					method: Constants.http_methods.DELETE,
					credentials: "include",
				}
			);

			if (response.status === 401) {
				await checkAuth();
				return;
			}

			if (!response.ok) {
				console.error("Delete failed:", response.status);
				return;
			}
			// Инвалидируем все в бд и в каталоге
			await queryClient.invalidateQueries({ queryKey: [Constants.itemsQuery] });
			await queryClient.invalidateQueries({queryKey: [Constants.itemsPrivateQuery],
			});
			navigate(`/${Nav.database}`);
		} finally {
			setIsDeleting(false);
		}
	};

	if (isFetching) {
		return <p className="centered-text">Loading...</p>;
	}

	if (error) {
		return (
			<p className="centered-text">Error while loading item details</p>
		);
	}

	const itemData = buildItemData(data ? data.data : null);
	const images = data ? data.data.images : null;

	return (
		<div className="images-and-description-wrapper">
			<ItemImages images={images} onImageClick={setModalImageUrl} />
			<div className="database-item-detail-column">
				<ItemDescription data={itemData} />
				<DefaultButton
					className="database-item-delete-button"
					type="button"
					labelText={"Delete"}
					disabled={isDeleting}
					onClick={handleDeleteItem}
				/>
			</div>
			<ItemModalWindow
				imageUrl={modalImageUrl}
				onClose={() => setModalImageUrl(null)}
			/>
		</div>
	);
};
