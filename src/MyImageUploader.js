

const MyImageUploader = (value, onChange) => {
	return (
	  <div>
		<input
		  type="file"
		  accept="image/*"
		  multiple
		  onChange={onChange}
		/>
		<button disabled={value.length === 0}>
		  Удалить все изображения
		</button>
		<div>
		  <p>Загружено изображений: {value.length}</p>
		  {/* Можно отобразить информацию о файлах, если необходимо */}
		  {/* {images.map((file, index) => (
			<p key={index}>{file.name}</p>
		  ))} */}
		</div>
	  </div>
	);
  };


export default MyImageUploader;
