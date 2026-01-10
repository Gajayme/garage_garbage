
export const ItemDescription = ({ className, data, delimiter = ": " }) => {
	if (!data) return null;

	const { title, restData } = data;

	return (
		<div className={className}>
			{/* Заголовок (имя вещи) */}
			<p>{title}</p>

			{/* Остальная информация */}
			{Object.entries(restData).map(([key, value], index) => (
				<p key={index}>
					{key}{delimiter}{String(value)}
				</p>
			))}
		</div>
	);
};
