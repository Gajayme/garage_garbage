import { useQuery } from "@tanstack/react-query";
import * as UploadConstants from "Components/MainPages/UploadPage/UploadPageConstants.js";
import * as GlobalConstants from "Constants.js";
import { fetchInputData } from "Components/Api/fetchInputData.js";

const convertArrayToMap = (array) =>
	array.reduce((acc, item) => {
		acc[item.title] = item.id;
		return acc;
	}, {});

export const useInputParams = () => {
	const { data: brands, isLoading: brandsLoading } = useQuery({
		queryKey: [GlobalConstants.uploadBrandQuery],
		queryFn: () => fetchInputData(UploadConstants.brandApi),
	});

	const { data: types, isLoading: typesLoading } = useQuery({
		queryKey: [GlobalConstants.uploadTypesQuery],
		queryFn: () => fetchInputData(UploadConstants.typeApi),
	});

	const { data: buyers, isLoading: buyersLoading } = useQuery({
		queryKey: [GlobalConstants.uploadBuyersQuery],
		queryFn: () => fetchInputData(UploadConstants.byuerApi),
	});

	const { data: locations, isLoading: locationsLoading } = useQuery({
		queryKey: [GlobalConstants.uploadLocationsQuery],
		queryFn: () => fetchInputData(UploadConstants.locationApi),
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
