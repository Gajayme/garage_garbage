export const ItemDescription = ({ data, delimiter = ": " }) => {
	if (!data) return null;

	const { title, restData } = data;

	return (
		<>
			{/* Заголовок (имя вещи) */}
			<p>{title}</p>

			{/* Остальная информация */}
			{Object.entries(restData).map(([key, value], index) => (
				<p key={index}>
					{key}{delimiter}{String(value)}
				</p>
			))}
		</>
	);
};
