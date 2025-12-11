import { useState, useEffect } from "react"

import * as UploadConstants from './UploadPageConstants.js'



export const useInputParams = () => {

	// стейты с брендами, получаемыми от сервера
	const [brandState, setBrandState] = useState({[UploadConstants.chooseBrand]: UploadConstants.defaultID})
	// стейты с типами вещей, получаемыми от сервера
	const [typeState, setTypeState] = useState({[UploadConstants.chooseType]: UploadConstants.defaultID})
	// стейты с приобретателями вещей, получаемыми от сервера
	const [buyerState, setBuyerState] = useState({[UploadConstants.chooseBuyer]: UploadConstants.defaultID})
	// стейты с местонахождением вещей, получаемыми от сервера
	const [locationState, setLocationState] = useState({[UploadConstants.chooseLocation]: UploadConstants.defaultID})


	const updateBrands = (brandsData) => {

		const brandsObj = brandsData.reduce((acc, brand) => {
			acc[brand.title] = brand.id;
			return acc;
		  }, {});

		setBrandState((prevState) => ({
			...prevState, ...brandsObj})
		)
	}

	const updateTypes = (typesData) => {

		const typesObj = typesData.reduce((acc, type) => {
			acc[type.title] = type.id;
			return acc;
		  }, {});

		setTypeState((prevState) => ({
			...prevState, ...typesObj})
		)
	}

	const updateByuers = (byuersData) => {

		const byuersObj = byuersData.reduce((acc, byuer) => {
			acc[byuer.title] = byuer.id;
			return acc;
		  }, {});

		setBuyerState((prevState) => ({
			...prevState, ...byuersObj})
		)
	}

	const updateLocations = (locationsData) => {

		const locationsObj = locationsData.reduce((acc, location) => {
			acc[location.title] = location.id;
			return acc;
		  }, {});

		setLocationState((prevState) => ({
			...prevState, ...locationsObj})
		)
	}


	useEffect(() => {
		const loadData = async () => {
			try {
				const [brandsResponse, typesResponse, byuersResponse, locationsResponse] = await Promise.all([
					fetch(UploadConstants.baseApi + UploadConstants.brandApi),
					fetch(UploadConstants.baseApi + UploadConstants.typeApi),
					fetch(UploadConstants.baseApi + UploadConstants.byuerApi),
					fetch(UploadConstants.baseApi + UploadConstants.locationApi),
				]);

				const brandsData = await brandsResponse.json();
				const typesData = await typesResponse.json();
				const byuersData = await byuersResponse.json();
				const locationsData = await locationsResponse.json();

				updateBrands(brandsData.data);
				updateTypes(typesData.data);
				updateByuers(byuersData.data);
				updateLocations(locationsData.data);

			} catch (error) {
				console.error('Ошибка при получении данных:', error);
			}
		};

		loadData();
	}, []);

	return {
		brandState,
		typeState,
		buyerState,
		locationState
	};
}
