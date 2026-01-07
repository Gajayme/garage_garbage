
export const ItemDescription = ({ data, delimiter = ": " }) => {
	console.log(data)

	if (!data) return null;

	return Object.entries(data).map(([key, pair]) => {
		if (!Array.isArray(pair) || pair.length < 2) return null;

		const [value, isShowingKey] = pair;

		return (
			<p key={key}>
				{isShowingKey && (
					<>
						{key}{delimiter}
					</>
				)}
				{String(value)}
			</p>
		);
	});
};
