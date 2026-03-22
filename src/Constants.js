
export const none = ''

// Названия полей для формы загрузки вещей (такие же, как в API)
export const files = "files"
export const item_name = "itemName"
export const buyer_part = "buyersPart"
export const bought_for = "boughtFor"
export const price = "price"
export const sold_for = "soldFor"
export const item_size = "size"
export const buyer = "buyerId"
export const location = "locationId"
export const brand = "brandId"
export const type = "typeId"
export const status = "status"

export const base_server_url = "http://72.60.133.178:5000/"

// API для загрузки вещи на сервер
export const post_upload = "post/upload"

// API для получения всех вещей
export const post_all = "post/all"
export const post_all_private = "post/all/private"

// API для удаления вещи
export const post_delete = "post/delete"

// API для получения детальной информации о вещи
export const post_detail = "post/detail/"

// API для аутентификации
export const user_login = "user/login"

// API для получения информации о текущем пользователе
export const user_me = "user/me"

// API для получения input данных
export const brandApi = "brand/all"
export const typeApi = "type/all"
export const buyerApi = "buyer/all"
export const locationApi = "location/all"
export const statusApi = "status/all"


// query namespaces
export const itemDetailsQuery = "itemDetails"
export const databaseItemDetailsQuery = "databaseItemDetails"
export const itemsQuery = "items" // items for catalog page
export const itemsPrivateQuery = "itemsPrivate" // items for database page
export const uploadBrandQuery = "uploadBrand" // brands for upload page
export const uploadTypesQuery = "uploadTypes" // types for upload page
export const uploadBuyersQuery = "uploadBuyers" // buyers for upload page
export const uploadLocationsQuery = "uploadLocations" // locations for upload page
export const uploadStatusQuery = "uploadStatus" // statuses for upload page

export const http_methods = {
	GET: 'GET',
	POST: 'POST',
	DELETE: 'DELETE',
	PATCH: 'PATCH',
	OPTIONS: 'OPTIONS',
	HEAD: 'HEAD',
};
