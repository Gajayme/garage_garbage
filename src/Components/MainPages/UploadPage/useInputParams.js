import { useQuery } from "@tanstack/react-query";
import * as UploadConstants from "./UploadPageConstants.js";
import * as GlobalConstanst from "Constants.js"

const fetchDictionary = async (url) => {
	const resp = await fetch(url);
	if (!resp.ok) throw new Error("Ошибка загрузки");
	const data = await resp.json();
	return data.data;
};

const convertArrayToMap = (array) =>
	array.reduce((acc, item) => {
		acc[item.title] = item.id;
		return acc;
	}, {});

export const useInputParams = () => {
	const { data: brands, isLoading: brandsLoading } = useQuery({
		queryKey: ["brands"],
		queryFn: () => fetchDictionary(GlobalConstanst.base_server_url + UploadConstants.brandApi),
	});

	const { data: types, isLoading: typesLoading } = useQuery({
		queryKey: ["types"],
		queryFn: () => fetchDictionary(GlobalConstanst.base_server_url + UploadConstants.typeApi),
	});

	const { data: buyers, isLoading: buyersLoading } = useQuery({
		queryKey: ["buyers"],
		queryFn: () => fetchDictionary(GlobalConstanst.base_server_url + UploadConstants.byuerApi),
	});

	const { data: locations, isLoading: locationsLoading } = useQuery({
		queryKey: ["locations"],
		queryFn: () => fetchDictionary(GlobalConstanst.base_server_url + UploadConstants.locationApi),
	});

	const brandState = {
		[UploadConstants.chooseBrand]: UploadConstants.defaultID,
		...(brands ? convertArrayToMap(brands) : {}),
	};

	const typeState = {
		[UploadConstants.chooseType]: UploadConstants.defaultID,
		...(types ? convertArrayToMap(types) : {}),
	};

	const buyerState = {
		[UploadConstants.chooseBuyer]: UploadConstants.defaultID,
		...(buyers ? convertArrayToMap(buyers) : {}),
	};

	const locationState = {
		[UploadConstants.chooseLocation]: UploadConstants.defaultID,
		...(locations ? convertArrayToMap(locations) : {}),
	};

	return {
		brandState,
		typeState,
		buyerState,
		locationState,
		isLoading:
			brandsLoading || typesLoading || buyersLoading || locationsLoading,
	};
};
