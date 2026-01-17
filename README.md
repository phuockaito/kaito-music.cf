## 🎵 Giới thiệu

Kaito Music API là một RESTful API cung cấp các chức năng:

-   Quản lý bài hát (upload, edit, delete, search)
-   Quản lý tài khoản người dùng
-   Quản lý comment
-   Quản lý playlist
-   Quản lý yêu thích
-   Lịch sử phát nhạc

**Live Demo:** [https://kaito-music.vercel.app](https://kaito-music.vercel.app)

**GitHub:** [https://github.com/daotuananh1999tgdd-sudo/kaito-music.cf](https://github.com/daotuananh1999tgdd-sudo/kaito-music.cf/tree/feat/zalo-autologin-final)]
##### `URL V1`: <https://api-kaito-music.vercel.app/api>

##### `URL V2`: <https://v2-api-kaito-music.vercel.app/api>

---

## 🔐 Authentication

Hầu hết các API yêu cầu authentication thông qua JWT token.

### Cách sử dụng

1. **Đăng ký/Đăng nhập** để nhận `accessToken`
2. **Gửi token** trong header của mỗi request:

```http
Authorization: Bearer {accessToken}
```

### Token Format

```
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Token Expiry

-   Access Token: 30 ngày
-   Refresh Token: 30 ngày

---

## 📚 Danh sách API

### Base URL

```
https://api-kaito-music.vercel.app/api
# hoặc
https://v2-api-kaito-music.vercel.app/api
```

### 1. Account APIs

#### 1.1. Đăng ký tài khoản

```http
POST /api/account/register
Content-Type: application/json
```

**Request Body:**

```json
{
    "userName": "username",
    "email": "user@example.com",
    "password": "password123"
}
```

**Response:**

```json
{
    "accessToken": "jwt_token_here",
    "data": {
        "_id": "user_id",
        "user_name": "username",
        "email": "user@example.com",
        "image": "avatar_url",
        "sum_comment": 0,
        "sum_list_music": 0,
        "sum_upload": 0,
        "createdAt": "2024-01-01T00:00:00.000Z",
        "updatedAt": "2024-01-01T00:00:00.000Z"
    }
}
```

**Validation:**

-   Email phải hợp lệ
-   Username: 1-30 ký tự
-   Password: tối thiểu 8 ký tự

**Ví dụ với cURL:**

```bash
curl -X POST https://api-kaito-music.vercel.app/api/account/register \
  -H "Content-Type: application/json" \
  -d '{
    "userName": "testuser",
    "email": "test@example.com",
    "password": "password123"
  }'
```

#### 1.2. Đăng nhập

```http
POST /api/account/login
Content-Type: application/json
```

**Request Body:**

```json
{
    "email": "user@example.com",
    "password": "password123"
}
```

**Response:** Tương tự như đăng ký

**Ví dụ với cURL:**

```bash
curl -X POST https://api-kaito-music.vercel.app/api/account/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

#### 1.3. Đăng nhập bằng Google

```http
POST /api/account/google-login
Content-Type: application/json
```

**Request Body:**

```json
{
    "token": "google_access_token"
}
```

**Ví dụ với cURL:**

```bash
curl -X POST https://api-kaito-music.vercel.app/api/account/google-login \
  -H "Content-Type: application/json" \
  -d '{
    "token": "ya29.a0AfH6SMC..."
  }'
```

#### 1.4. Lấy thông tin profile

```http
GET /api/account/profile
Authorization: Bearer {accessToken}
```

**Response:**

```json
{
    "accessToken": "new_jwt_token",
    "data": {
        "_id": "user_id",
        "user_name": "username",
        "email": "user@example.com",
        "image": "avatar_url",
        "sum_comment": 5,
        "sum_list_music": 3,
        "sum_upload": 10,
        "createdAt": "2024-01-01T00:00:00.000Z",
        "updatedAt": "2024-01-01T00:00:00.000Z"
    }
}
```

**Ví dụ với cURL:**

```bash
curl -X GET https://api-kaito-music.vercel.app/api/account/profile \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

#### 1.5. Lấy danh sách tài khoản

```http
GET /api/account/list
```

**Response:**

```json
[
  {
    "_id": "user_id",
    "user_name": "username",
    "email": "user@example.com",
    "image": "avatar_url",
    ...
  }
]
```

#### 1.6. Lấy bài hát đã upload

```http
GET /api/account/get-music-authorization-token?_page=1&_limit=20
Authorization: Bearer {accessToken}
```

**Query Parameters:**

-   `_page`: Số trang (mặc định: 1)
-   `_limit`: Số kết quả mỗi trang (mặc định: 20)

**Response:**

```json
{
  "pagination": {
    "_limit": 20,
    "_page": 1,
    "_total": 50
  },
  "data": [...]
}
```

---

### 2. Music APIs

#### 2.1. Tạo bài hát mới

```http
POST /api/music/create
Authorization: Bearer {accessToken}
Content-Type: multipart/form-data
```

**Request Body (Form Data):**

-   `src_music`: File (audio file - required)
-   `image_music`: File (image file - required)
-   `name_music`: String (required)
-   `name_singer`: String (required)
-   `category`: String (required)
-   `subscribe`: String (optional)
-   `link_mv`: String (optional, YouTube URL)

**Response:**

```json
{
  "message": "Create music success",
  "data": {
    "_id": "music_id",
    "name_music": "Song Name",
    "name_singer": "Singer Name",
    "category": "Pop",
    "src_music": "audio_url",
    "image_music": "image_url",
    ...
  }
}
```

**Ví dụ với JavaScript (FormData):**

```javascript
const formData = new FormData();
formData.append("src_music", audioFile);
formData.append("image_music", imageFile);
formData.append("name_music", "Song Name");
formData.append("name_singer", "Singer Name");
formData.append("category", "Pop");
formData.append("link_mv", "https://youtube.com/watch?v=...");

const response = await fetch(
    "https://api-kaito-music.vercel.app/api/music/create",
    {
        method: "POST",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
    }
);
```

#### 2.2. Chỉnh sửa bài hát

```http
PUT /api/music/edit
Authorization: Bearer {accessToken}
Content-Type: multipart/form-data
```

**Request Body (Form Data):**

-   `_id`: String (required)
-   `src_music`: File (optional)
-   `image_music`: File (optional)
-   `name_music`: String (optional)
-   `name_singer`: String (optional)
-   `category`: String (optional)
-   `subscribe`: String (optional)
-   `link_mv`: String (optional)

#### 2.3. Lấy thông tin bài hát theo ID

```http
GET /api/music/get-by-id?_id={music_id}
```

**Query Parameters:**

-   `_id`: ID của bài hát (required)

**Ví dụ:**

```bash
curl -X GET "https://api-kaito-music.vercel.app/api/music/get-by-id?_id=507f1f77bcf86cd799439011"
```

#### 2.4. Lấy danh sách bài hát theo ca sĩ

```http
GET /api/music/get-singer-name?_singer={singer_name}&_page=1&_limit=20
```

**Query Parameters:**

-   `_singer`: Tên ca sĩ (required)
-   `_page`: Số trang (optional, mặc định: 1)
-   `_limit`: Số kết quả mỗi trang (optional, mặc định: 20)

**Response:**

```json
{
  "pagination": {
    "_limit": 20,
    "_page": 1,
    "_total": 50
  },
  "data": [
    {
      "_id": "music_id",
      "name_music": "Song Name",
      "name_singer": "Singer Name",
      ...
    }
  ]
}
```

**Ví dụ:**

```bash
curl -X GET "https://api-kaito-music.vercel.app/api/music/get-singer-name?_singer=Taylor%20Swift&_page=1&_limit=10"
```

#### 2.5. Lấy bài hát theo tên

```http
GET /api/music/get-music-name?_name={music_name}
```

**Query Parameters:**

-   `_name`: Tên bài hát (required)

**Response:**

```json
{
  "message": "success",
  "data": {
    "_id": "music_id",
    "name_music": "Song Name",
    "name_singer": "Singer Name",
    ...
  }
}
```

**Ví dụ:**

```bash
curl -X GET "https://api-kaito-music.vercel.app/api/music/get-music-name?_name=Shape%20Of%20You"
```

#### 2.6. Lấy bài hát theo danh mục

```http
GET /api/music/get-category?category={category_name}&_page=1&_limit=20
```

**Query Parameters:**

-   `category`: Tên danh mục (required)
-   `_page`: Số trang (optional, mặc định: 1)
-   `_limit`: Số kết quả mỗi trang (optional, mặc định: 20)

**Response:**

```json
{
  "pagination": {
    "_limit": 20,
    "_page": 1,
    "_total": 50
  },
  "data": [...]
}
```

**Ví dụ:**

```bash
curl -X GET "https://api-kaito-music.vercel.app/api/music/get-category?category=Pop&_page=1&_limit=10"
```

#### 2.7. Lấy bài hát mới

```http
GET /api/music/new-music?_page=1&_limit=20
```

**Query Parameters:**

-   `_page`: Số trang (optional, mặc định: 1)
-   `_limit`: Số kết quả mỗi trang (optional, mặc định: 20)

**Response:**

```json
{
  "pagination": {
    "_limit": 20,
    "_page": 1,
    "_total": 100
  },
  "data": [...]
}
```

**Ví dụ:**

```bash
curl -X GET "https://api-kaito-music.vercel.app/api/music/new-music?_page=1&_limit=10"
```

#### 2.8. Lấy bài hát trending

```http
GET /api/music/trending?_page=1&_limit=20
```

**Query Parameters:**

-   `_page`: Số trang (optional, mặc định: 1)
-   `_limit`: Số kết quả mỗi trang (optional, mặc định: 20)

**Response:**

```json
{
  "pagination": {
    "_limit": 20,
    "_page": 1,
    "_total": 100
  },
  "data": [...]
}
```

**Ví dụ:**

```bash
curl -X GET "https://api-kaito-music.vercel.app/api/music/trending?_page=1&_limit=10"
```

#### 2.9. Lấy bài hát yêu thích

```http
GET /api/music/favorite?_page=1&_limit=20
```

**Query Parameters:**

-   `_page`: Số trang (optional, mặc định: 1)
-   `_limit`: Số kết quả mỗi trang (optional, mặc định: 20)

**Response:**

```json
{
  "pagination": {
    "_limit": 20,
    "_page": 1,
    "_total": 100
  },
  "data": [...]
}
```

**Ví dụ:**

```bash
curl -X GET "https://api-kaito-music.vercel.app/api/music/favorite?_page=1&_limit=10"
```

#### 2.10. Top bài hát theo lượt xem

```http
GET /api/music/top-views?_type=million&_page=1&_limit=20
```

**Query Parameters:**

-   `_type`: Loại top (optional, mặc định: "million")
    -   `million`: Top bài hát có lượt xem từ 1 triệu đến 999 triệu
    -   `billion`: Top bài hát có lượt xem từ 1 tỷ trở lên
-   `_page`: Số trang (optional, mặc định: 1)
-   `_limit`: Số kết quả mỗi trang (optional, mặc định: 20)

**Response:**

```json
{
  "pagination": {
    "_limit": 20,
    "_page": 1,
    "_total": 50
  },
  "data": [...]
}
```

**Ví dụ:**

```bash
curl -X GET "https://api-kaito-music.vercel.app/api/music/top-views?_type=million&_page=1&_limit=10"
```

#### 2.11. Top bài hát yêu thích

```http
GET /api/music/top-favorite?_type=million&_page=1&_limit=20
```

**Query Parameters:**

-   `_type`: Loại top (optional, mặc định: "million")
    -   `million`: Top bài hát có lượt yêu thích từ 1 triệu đến 999 triệu
    -   `billion`: Top bài hát có lượt yêu thích từ 1 tỷ trở lên
-   `_page`: Số trang (optional, mặc định: 1)
-   `_limit`: Số kết quả mỗi trang (optional, mặc định: 20)

**Response:**

```json
{
  "pagination": {
    "_limit": 20,
    "_page": 1,
    "_total": 50
  },
  "data": [...]
}
```

**Ví dụ:**

```bash
curl -X GET "https://api-kaito-music.vercel.app/api/music/top-favorite?_type=million&_page=1&_limit=10"
```

#### 2.12. Lấy bài hát đã upload

```http
GET /api/music/get-upload
Authorization: Bearer {accessToken}
```

#### 2.13. Tìm kiếm bài hát đã upload

```http
GET /api/music/get-upload/search?query={search_term}
Authorization: Bearer {accessToken}
```

**Query Parameters:**

-   `query`: Từ khóa tìm kiếm (required)

#### 2.14. Xóa bài hát

```http
DELETE /api/music/delete-by-id?_id={music_id}
Authorization: Bearer {accessToken}
```

**Ví dụ:**

```bash
curl -X DELETE "https://api-kaito-music.vercel.app/api/music/delete-by-id?_id=507f1f77bcf86cd799439011" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

### 3. Search API

#### 3.1. Tìm kiếm bài hát

```http
GET /api/search?query={search_term}&_page=1&_limit=20
```

**Query Parameters:**

-   `query`: Từ khóa tìm kiếm (tìm theo tên bài hát, ca sĩ, category, subscribe)
-   `_page`: Số trang (mặc định: 1)
-   `_limit`: Số kết quả mỗi trang (mặc định: 20)

**Response:**

```json
{
  "pagination": {
    "_limit": 20,
    "_page": 1,
    "_total": 100
  },
  "data": [
    {
      "_id": "music_id",
      "name_music": "Song Name",
      "name_singer": "Singer Name",
      "category": "Pop",
      ...
    }
  ]
}
```

**Ví dụ:**

```bash
curl -X GET "https://api-kaito-music.vercel.app/api/search?query=nhac&_page=1&_limit=10"
```

---

### 4. Comment APIs

#### 4.1. Tạo comment

```http
POST /api/comment/create
Authorization: Bearer {accessToken}
Content-Type: application/json
```

**Request Body:**

```json
{
    "id_music": "music_id",
    "content": "Comment content",
    "id_reply": "comment_id" // optional, để reply comment
}
```

**Response:**

```json
{
  "message": "comment created",
  "data": {
    "_id": "comment_id",
    "id_music": "music_id",
    "id_account": "user_id",
    "content": "Comment content",
    "createdAt": "2024-01-01T00:00:00.000Z",
    ...
  }
}
```

**Ví dụ:**

```bash
curl -X POST https://api-kaito-music.vercel.app/api/comment/create \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "id_music": "507f1f77bcf86cd799439011",
    "content": "Great song!"
  }'
```

#### 4.2. Lấy comment theo ID bài hát

```http
GET /api/comment/get-by-id-music?id_music={music_id}
```

**Query Parameters:**

-   `id_music`: ID của bài hát (required)

#### 4.3. Lấy danh sách comment

```http
GET /api/comment/get-list-comment-authorization-token
```

#### 4.4. Cập nhật comment

```http
PUT /api/comment/update-comment-by-id
Authorization: Bearer {accessToken}
Content-Type: application/json
```

**Request Body:**

```json
{
    "_id": "comment_id",
    "content": "Updated comment content"
}
```

#### 4.5. Xóa comment

```http
DELETE /api/comment/delete-by-id?_id={comment_id}
Authorization: Bearer {accessToken}
```

---

### 5. List Music (Playlist) APIs

#### 5.1. Lấy danh sách playlist

```http
GET /api/list-music/get-list
Authorization: Bearer {accessToken}
```

**Response:**

```json
[
  {
    "_id": "playlist_id",
    "name_list_music": "My Playlist",
    "id_account": "user_id",
    "list_music": [...],
    ...
  }
]
```

#### 5.2. Tạo playlist mới

```http
POST /api/list-music/create
Authorization: Bearer {accessToken}
Content-Type: application/json
```

**Request Body:**

```json
{
    "name_list_music": "Playlist Name"
}
```

**Ví dụ:**

```bash
curl -X POST https://api-kaito-music.vercel.app/api/list-music/create \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name_list_music": "My Favorite Songs"
  }'
```

#### 5.3. Lấy playlist theo ID

```http
GET /api/list-music/get-by-id?_id={playlist_id}
Authorization: Bearer {accessToken}
```

#### 5.4. Thêm bài hát vào playlist

```http
PUT /api/list-music/add-list-music
Authorization: Bearer {accessToken}
Content-Type: application/json
```

**Request Body:**

```json
{
    "_id": "playlist_id",
    "id_music": "music_id"
}
```

#### 5.5. Xóa bài hát khỏi playlist

```http
DELETE /api/list-music/delete-music
Authorization: Bearer {accessToken}
Content-Type: application/json
```

**Request Body:**

```json
{
    "_id": "playlist_id",
    "id_music": "music_id"
}
```

#### 5.6. Xóa playlist

```http
DELETE /api/list-music/delete-list-music?_id={playlist_id}
Authorization: Bearer {accessToken}
```

#### 5.7. Cập nhật tên playlist

```http
PUT /api/list-music/update-name-list-music
Authorization: Bearer {accessToken}
Content-Type: application/json
```

**Request Body:**

```json
{
    "_id": "playlist_id",
    "name_list_music": "New Playlist Name"
}
```

---

### 6. Favorite APIs

#### 6.1. Thêm vào yêu thích

```http
POST /api/favorite/create
Authorization: Bearer {accessToken}
Content-Type: application/json
```

**Request Body:**

```json
{
    "idMusic": "music_id"
}
```

**Response:**

```json
{
  "message": "Create favorite success",
  "data": {
    "_id": "music_id",
    "name_music": "Song Name",
    "favorite": 10,
    ...
  }
}
```

**Ví dụ:**

```bash
curl -X POST https://api-kaito-music.vercel.app/api/favorite/create \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "idMusic": "507f1f77bcf86cd799439011"
  }'
```

#### 6.2. Lấy danh sách yêu thích theo token

```http
GET /api/favorite/get-authorization-token
Authorization: Bearer {accessToken}
```

#### 6.3. Lấy yêu thích của tài khoản

```http
GET /api/favorite/account
Authorization: Bearer {accessToken}
```

#### 6.4. Lấy danh sách yêu thích

```http
GET /api/favorite/list
```

#### 6.5. Xóa khỏi yêu thích

```http
DELETE /api/favorite/delete-by-id?_id={favorite_id}
Authorization: Bearer {accessToken}
```

---

### 7. Play History APIs

#### 7.1. Tạo lịch sử phát

```http
POST /api/play-history/create
Authorization: Bearer {accessToken}
Content-Type: application/json
```

**Request Body:**

```json
{
    "id_music": "music_id"
}
```

**Ví dụ:**

```bash
curl -X POST https://api-kaito-music.vercel.app/api/play-history/create \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "id_music": "507f1f77bcf86cd799439011"
  }'
```

#### 7.2. Lấy lịch sử phát theo token

```http
GET /api/play-history/get-by-token
Authorization: Bearer {accessToken}
```

**Response:**

```json
[
  {
    "_id": "history_id",
    "id_music": "music_id",
    "id_account": "user_id",
    "music": {...},
    "createdAt": "2024-01-01T00:00:00.000Z",
    ...
  }
]
```

---

## 💡 Ví dụ sử dụng với JavaScript

### Sử dụng Fetch API

```javascript
// Đăng nhập
const login = async (email, password) => {
    const response = await fetch(
        "https://api-kaito-music.vercel.app/api/account/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        }
    );

    const data = await response.json();
    localStorage.setItem("accessToken", data.accessToken);
    return data;
};

// Lấy profile
const getProfile = async () => {
    const token = localStorage.getItem("accessToken");
    const response = await fetch(
        "https://api-kaito-music.vercel.app/api/account/profile",
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return await response.json();
};

// Tìm kiếm bài hát
const searchMusic = async (query, page = 1, limit = 20) => {
    const response = await fetch(
        `https://api-kaito-music.vercel.app/api/search?query=${encodeURIComponent(
            query
        )}&_page=${page}&_limit=${limit}`
    );
    return await response.json();
};

// Upload bài hát
const uploadMusic = async (formData) => {
    const token = localStorage.getItem("accessToken");
    const response = await fetch(
        "https://api-kaito-music.vercel.app/api/music/create",
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        }
    );
    return await response.json();
};
```

### Sử dụng Axios

```javascript
import axios from "axios";

const api = axios.create({
    baseURL: "https://api-kaito-music.vercel.app/api",
});

// Thêm token vào mọi request
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Đăng nhập
const login = async (email, password) => {
    const { data } = await api.post("/account/login", { email, password });
    localStorage.setItem("accessToken", data.accessToken);
    return data;
};

// Upload bài hát
const uploadMusic = async (formData) => {
    const { data } = await api.post("/music/create", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return data;
};

// Tạo comment
const createComment = async (idMusic, content) => {
    const { data } = await api.post("/comment/create", {
        id_music: idMusic,
        content: content,
    });
    return data;
};
```

---

## 📝 Lưu ý

-   Tất cả các file upload sẽ được lưu trên Cloudinary
-   JWT token có thời hạn 30 ngày
-   API hỗ trợ CORS cho tất cả các origin
-   Response được nén bằng compression middleware
-   Database sử dụng MongoDB với Mongoose ODM
-   File upload hỗ trợ định dạng: jpeg, jpg, png, mpeg, gif

---

## 🐛 Error Codes

-   `400`: Bad Request - Dữ liệu không hợp lệ
-   `401`: Unauthorized - Token không hợp lệ hoặc thiếu
-   `404`: Not Found - Không tìm thấy resource
-   `500`: Internal Server Error - Lỗi server

---

## 📄 License

ISC

## 👤 Author

**Phuoc Kaito**

-   GitHub: [@phuockaito](https://github.com/phuockaito)
-   Facebook: [PhuocKaito1410](https://www.facebook.com/PhuocKaito1410)
