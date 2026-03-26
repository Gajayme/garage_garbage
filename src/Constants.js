
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
export const post_detail_private = "post/detail/private/"


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

// API для добавления новых input данных
export const brandUploadApi = "brand/upload"
export const typeUploadApi = "type/upload"
export const buyerUploadApi = "buyer/upload"
export const locationUploadApi = "location/upload"

// query namespaces
export const itemDetailsQueryKey = "itemDetails" // item details for catalog page
export const itemDetailsPrivateQueryKey = "itemDetailsPrivate" // item details for database page
export const itemsQueryKey = "items" // items for catalog page
export const itemsPrivateQueryKey = "itemsPrivate" // items for database page
export const brandsQueryKey = "uploadBrand" // all brands
export const typesQueryKey = "uploadTypes" // all types
export const buyersQueryKey = "uploadBuyers" // all buyers
export const locationsQueryKey = "uploadLocations" // all locations
export const statusesQueryKey = "uploadStatus" // all statuses

export const http_methods = {
	GET: 'GET',
	POST: 'POST',
	DELETE: 'DELETE',
	PATCH: 'PATCH',
	OPTIONS: 'OPTIONS',
	HEAD: 'HEAD',
};
