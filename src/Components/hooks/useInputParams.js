import { useQuery } from "@tanstack/react-query";
import * as GlobalConstants from "Constants.js";
import { fetchInputData } from "Components/Api/fetchInputData.js";

export const useInputParams = () => {
	const { data: brands, isLoading: brandsLoading } = useQuery({
		queryKey: [GlobalConstants.brandsQueryKey],
		queryFn: () => fetchInputData(GlobalConstants.brandApi),
		staleTime: Infinity, // данные не будут дергаться с сервера при прошествии таймера
		gcTime: Infinity,   // данные не будут удаляться из кеша при прошествии таймера
	});

	const { data: types, isLoading: typesLoading } = useQuery({
		queryKey: [GlobalConstants.typesQueryKey],
		queryFn: () => fetchInputData(GlobalConstants.typeApi),
		staleTime: Infinity,
		gcTime: Infinity,
	});

	const { data: buyers, isLoading: buyersLoading } = useQuery({
		queryKey: [GlobalConstants.buyersQueryKey],
		queryFn: () => fetchInputData(GlobalConstants.buyerApi),
		staleTime: Infinity,
		gcTime: Infinity,
	});

	const { data: locations, isLoading: locationsLoading } = useQuery({
		queryKey: [GlobalConstants.locationsQueryKey],
		queryFn: () => fetchInputData(GlobalConstants.locationApi),
		staleTime: Infinity,
		gcTime: Infinity,
	});

	const { data: statuses, isLoading: statusesLoading } = useQuery({
		queryKey: [GlobalConstants.statusesQueryKey],
		queryFn: () => fetchInputData(GlobalConstants.statusApi),
		staleTime: Infinity,
		gcTime: Infinity,
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
