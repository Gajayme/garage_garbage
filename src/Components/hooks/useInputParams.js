import { useQuery } from "@tanstack/react-query";
import * as GlobalConstants from "Constants.js";
import { fetchInputData } from "Components/Api/fetchInputData.js";

export const useInputParams = () => {
	const { data: brands, isLoading: brandsLoading } = useQuery({
		queryKey: [GlobalConstants.brandsQueryKey],
		queryFn: () => fetchInputData(GlobalConstants.brandApi),
	});

	const { data: types, isLoading: typesLoading } = useQuery({
		queryKey: [GlobalConstants.typesQueryKey],
		queryFn: () => fetchInputData(GlobalConstants.typeApi),
	});

	const { data: buyers, isLoading: buyersLoading } = useQuery({
		queryKey: [GlobalConstants.buyersQueryKey],
		queryFn: () => fetchInputData(GlobalConstants.buyerApi),
	});

	const { data: locations, isLoading: locationsLoading } = useQuery({
		queryKey: [GlobalConstants.locationsQueryKey],
		queryFn: () => fetchInputData(GlobalConstants.locationApi),
	});

	const { data: statuses, isLoading: statusesLoading } = useQuery({
		queryKey: [GlobalConstants.statusesQueryKey],
		queryFn: () => fetchInputData(GlobalConstants.statusApi),
	});

	return {
		brands,
		types,
		buyers,
		locations,
		statuses,
		isLoading:
			brandsLoading || typesLoading || buyersLoading || locationsLoading || statusesLoading,
	};
};
