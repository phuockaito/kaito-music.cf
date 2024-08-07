# Live demo: [kaitomusic.online](https://www.kaitomusic.online)

## API

#### `URL V1`: <https://api-kaito-music.vercel.app/api>

#### `URL V2`: <https://v2-api-kaito-music.vercel.app/api>

#### `Params` default: `_limit=20&_page=1`

### `Trending` (`method: GET`): "`URL`/music/trending?`Params`"

### `Favorite` (`method: GET`): "`URL`/music/favorite?`Params`"

### `New Music` (`method: GET`): "`URL`/music/new-music?`Params`"

### `Top views` (`method: GET`): "`URL`/music/top-views?"

-   params: "\_limit=20&\_page=1&\_type=million"
-   "\_type": "million" or "billion"

### `Top Favorite` (`method: GET`): "`URL`/music/top-favorite?"

-   params: "\_limit=20&\_page=1&\_type=million"
-   "\_type": "million" or "billion"

## Search

### `search by (category,singer name, song name)` (`method: GET`): "`URL`/search"

-   params: { "query": ?, "\_limit": ?, "\_page": ? }

## Play List Music

### `Create` (`method: POST`): "`URL`/list-music/create"

-   Body: { "idMusic": ?, "nameList: ? }
-   Authorization: Bearer `accessToken`

### `Update` (`method: PUT`): "`URL`/list-music/update-name-list-music"

-   Body: { "nameList": ?, "\_id: ? }
-   Authorization: Bearer `accessToken`

### `Delete` (`method: PUT`): "`URL`/list-music/delete-list-music"

-   params: { "\_id": ? }
-   Authorization: Bearer `accessToken`

### `Get All Playlists` (`method: GET`): "`URL`/list-music/get-list?`Params`"

-   Authorization: Bearer `accessToken`

### `Get List Music` (`method: GET`): "`URL`/list-music/get-by-id"

-   params: { "\_id": ? }
-   Authorization: Bearer `accessToken`

## Music

### `Get Music` (`method: GET`): "`URL`/music/get-by-id"

-   params: { "\_id": ? }

### `Get list favorite` (`method: GET`): "`URL`/favorite/list"

-   params: { "\_id_music": ? }

### `Get favorite account` (`method: GET`): "`URL`/favorite/account"

-   params: { "\_id_music": ? }
-   Authorization: Bearer `accessToken`

### `Get Music Name` (`method: GET`): "`URL`/music/get-music-name"

-   params: { "\_name": ? }

### `Get Singer Name` (`method: GET`): "`URL`/music/get-singer-name"

-   params: { "\_singer\": ? }

## Play history

### `Create` (`method: POST`): "`URL`/play-history/create"

-   Body: { "idMusic": ? }
-   Authorization: Bearer `accessToken`

### `History` (`method: GET`): "`URL`/play-history/get-by-token?`Params`"

-   Authorization: Bearer `accessToken`

## Comment

### `Create` (`method: POST`): "`URL`/comment/get-by-id-music"

-   Body: { "content": ?, "id_music": ? }
-   Authorization: Bearer `accessToken`

### `Get Comment` (`method: GET`): "`URL`/comment/get-by-id-music"

-   params: { "\_id": ?, \_limit: ?, \_page: ? }

### `History` (`method: GET`): "`URL`/get-list-comment-authorization-token?`Params`"

-   Authorization: Bearer `accessToken`

### `Reply` (`method: POST`): "`URL`/comment/get-by-id-music"

-   Body: { "content": ?, "id_music": ? ,id_reply: id comment reply}
-   Authorization: Bearer `accessToken`

### `Delete` (`method: DELETE`): "`URL`/comment/delete-by-id"

-   params: { "\_id": ?}
-   Authorization: Bearer `accessToken`

### `Update` (`method: PUT`): "`URL`/update-comment-by-id"

-   body: { "content": ? ,"\_id": ?}
-   Authorization: Bearer `accessToken`

## Favorite music

### `History` (`method: GET`): "`URL`/favorite/get-authorization-token?`Params`"

-   Authorization: Bearer `accessToken`

### `Create` (`method: POST`): "`URL`/favorite/create"

-   Body: { "idMusic": ? }
-   Authorization: Bearer `accessToken`
-   Response: { "message": "Create favorite success" }

### `Remove` (`method: POST`): "`URL`/favorite/create"

-   Body: { "idMusic": ? }
-   Authorization: Bearer `accessToken`
-   Response: { "message": "Delete favorite success" }

### `Delete` (`method: DELETE`): "`URL`/favorite/delete-by-id"

-   params: { "\_id": ? }
-   Authorization: Bearer `accessToken`

## Account

### `Register` (`method: POST`):"`URL`/account/register"

-   Body: { "userName": ? , "password": ? , "email": ?}

### `Login` (`method: POST`): "`URL`/account/login"

-   Body: { "email": ? ,"password": ? }

### `Profile` (`method: GET`): "`URL`/account/profile"

-   Authorization: Bearer `accessToken`

## Upload Music

### `upload` (`method: POST`): "`URL`/account/create"

-   Authorization: Bearer `accessToken`
-   body: { "name_music": ? , "name_singer": ? , "category": ? , "link_mv": ? , "src_music": ?, "image_music": ? }
-   Note: "src_music" and "image_music" is file

### `update` (`method: PUT`): "`URL`/account/edit"

-   Authorization: Bearer `accessToken`
-   body: { "name_music": ? , "name_singer": ? , "category": ? , "link_mv": ? , "src_music": ?, "image_music": ? }
-   Note: "src_music" and "image_music" is file

### `Search` (`method: GET`): "`URL`/music/get-upload/search"

-   Authorization: Bearer `accessToken`
-   params: { "query": ?, "\_limit": ?, "\_page": ? }
