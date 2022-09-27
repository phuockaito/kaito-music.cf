# Live demo: [https://kaitomusic.cf](https://kaitomusic.cf)

## API

#### `URL`: <https://api-v2-kaito-music.herokuapp.com/api>

## Params default: `_limit=20&_page=1` `||` Null

### `Get Trending` (`method: GET`): "URL/music/trending?`Params`"

### `Get Favorite` (`method: GET`): "URL/music/favorite?`Params`"

### `Get all` (`method: GET`): "URL/music/get-all?`Params`"

## Search

### `search by (category,singer name, song name, mv)` (`method: GET`): "URL/search"

    -   params: { "query": ?, "_limit": ?, "_page": ? }

## Play list music

### `Create` (`method: POST`): "URL/list-music/create"

    - Body: { "idMusic": ?, "nameList: ? }
    - Authorization: Bearer  `token`

### `Update` (`method: PUT`): "URL/list-music/update-name-list-music"

    - Body: { "nameList": ?, "_id: ? }
    - Authorization: Bearer  `token`

### `Delete` (`method: PUT`): "URL/list-music/delete-list-music"

    -   params: { "_id": ? }
    -   Authorization: Bearer `token`

### `Get all list music` (`method: GET`): "URL/list-music/get-list?`Params`"

    - Authorization: Bearer  `token`

### `Get list music` (`method: GET`): "URL/list-music/get-by-id"

    - params: { "_id": ? }
    - Authorization: Bearer `token`

## Music

### `Get music` (`method: GET`): "URL/music/get-by-id"

    - params: { "_id": ? }

## Play history

### `Create` (`method: POST`): "URL/play-history/create"

     - Body: { "idMusic": ? }
     - Authorization: Bearer `token`

### `Get music play history` (`method: GET`): "URL/play-history/get-by-token?`Params`"

     - Authorization: Bearer `token`

## Comment

### `Create` (`method: POST`): "URL/comment/get-by-id-music"

     - Body: { "content": ?, "id_music": ? }
     - Authorization: Bearer `token`

### `History comment music` (`method: GET`): "URL/get-list-comment-authorization-token?`Params`"

     - Authorization: Bearer `token`

### `Reply comment music` (`method: POST`): "URL/comment/get-by-id-music"

     - Body: { "content": ?, "id_music": ? ,id_reply: id comment reply}
     - Authorization: Bearer `token`

### `Delete` (`method: DELETE`): "URL/comment/delete-by-id"

     - params: { "_id": ?}
     - Authorization: Bearer `token`

### `Update` (`method: PUT`): "URL/update-comment-by-id"

     - body: {  "content": ? ,"_id": ?}
     - Authorization: Bearer `token`

### `Get comment music` (`method: GET`): "URL/comment/get-by-id-music"

    - params: { "_id": ?, _limit: ?, _page: ? }

## Favorite

### `Create` (`method: POST`): "URL/favorite/create"

    - Body: { "idMusic": ? }
    - Authorization: Bearer `token`

### `Get music favorite` (`method: GET`): "URL/favorite/get-authorization-token?`Params`"

    - Authorization: Bearer `token`

### `Delete` (`method: DELETE`): "URL/favorite/delete-by-id"

    - params: { "_id": ? }
    - Authorization: Bearer `token`

## Account

### `Register` (`method: POST`):"URL/account"

    - Body: { "userName": ? , "password": ? , "email": ?}

### `login` (`method: POST`): "URL/login"

    - Body: { "email": ? ,"password": ? }

### `Profile` (`method: GET`): "URL/profile"

    - Authorization: Bearer `token`
