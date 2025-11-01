# Hướng Dẫn Hệ Thống Đa Ngôn Ngữ (i18n)

## 📋 Tổng Quan

Project đã được thiết lập với hệ thống i18next để hỗ trợ đa ngôn ngữ. Hiện tại hỗ trợ:
- **Tiếng Việt (vi)** - Ngôn ngữ mặc định
- **Tiếng Anh (en)** - Được thêm mới

## 📁 Cấu Trúc Thư Mục

```
learning-hub/
├── locales/                    # Thư mục chứa file dịch
│   ├── vi.json                # Dịch Tiếng Việt
│   └── en.json                # Dịch Tiếng Anh
├── assets/
│   └── js/
│       └── i18n-init.js       # Khởi tạo i18next
├── index.html                 # Trang chủ (đã cập nhật)
└── demos/
    ├── geometry-reader.html   # (Cần cập nhật)
    ├── queue.html             # (Cần cập nhật)
    ├── auto_layout_priority_demo.html  # (Cần cập nhật)
    └── real_world_stack_demo.html      # (Cần cập nhật)
```

## 🔧 Cách Sử Dụng i18next

### 1. Thêm Text vào File Dịch

**Ví dụ trong `locales/vi.json`:**
```json
{
  "common": {
    "homeTitle": "iOS Swift Learning Hub",
    "homeSubtitle": "Demo Tương Tác & Kiến Thức Thực Chiến"
  },
  "index": {
    "welcome": "Chào mừng đến với Learning Hub"
  }
}
```

### 2. Sử Dụng Trong HTML

**Phương pháp 1: Sử dụng `data-i18n` attribute**
```html
<h1 data-i18n="common.homeTitle">iOS Swift Learning Hub</h1>
<p data-i18n="common.homeSubtitle">Demo Tương Tác & Kiến Thức Thực Chiến</p>
```

**Phương pháp 2: Sử dụng `data-i18n-html` attribute (cho content có HTML)**
```html
<div data-i18n-html="index.htmlContent">
  Default content here
</div>
```

**Phương pháp 3: Sử dụng trong JavaScript**
```javascript
// Lấy dịch động
const welcomeText = i18next.t('index.welcome');
console.log(welcomeText); // "Chào mừng đến với Learning Hub"

// Hoặc dùng hàm helper
const homeTitle = t('common.homeTitle');
```

### 3. Thay Đổi Ngôn Ngữ

```javascript
// Thay đổi sang Tiếng Anh
changeLanguage('en');

// Thay đổi sang Tiếng Việt
changeLanguage('vi');
```

Ngôn ngữ sẽ được lưu trong `localStorage` và tự động load lần sau.

## 📝 Quy Ước Đặt Tên Key

Khuyến nghị sử dụng quy ước sau cho consistency:

```
{
  "common": {           // Nội dung dùng chung trên tất cả trang
    "header": "...",
    "footer": "...",
    "button": {...}
  },
  "index": {            // Nội dung riêng của index.html
    "welcome": "...",
    "description": "..."
  },
  "geometry": {         // Nội dung riêng của geometry-reader.html
    "title": "...",
    "explanation": "..."
  }
}
```

## 🔄 Quy Trình Cập Nhật Các File Khác

Khi bạn sẵn sàng cập nhật các demo file khác (geometry-reader.html, queue.html, etc.):

### Bước 1: Thêm Dịch vào File JSON

**locales/vi.json:**
```json
{
  "geometry": {
    "title": "GeometryReader Demo",
    "explanation": "GeometryReader đọc kích thước của container..."
  }
}
```

**locales/en.json:**
```json
{
  "geometry": {
    "title": "GeometryReader Demo",
    "explanation": "GeometryReader reads the size of the container..."
  }
}
```

### Bước 2: Cập Nhật HTML File

```html
<!-- Before -->
<h2 class="text-3xl font-bold text-gray-800 mb-2">GeometryReader Demo</h2>

<!-- After -->
<h2 class="text-3xl font-bold text-gray-800 mb-2" data-i18n="geometry.title">GeometryReader Demo</h2>
```

### Bước 3: Cập Nhật JavaScript String

**Trước:**
```javascript
explanation.textContent = 'GeometryReader đọc kích thước của container...';
```

**Sau:**
```javascript
explanation.textContent = i18next.t('geometry.explanation');
```

### Bước 4: Load i18next Initialization

Thêm vào `<head>` của file:
```html
<!-- i18next scripts -->
<script src="https://cdn.jsdelivr.net/npm/i18next@23.7.6/dist/umd/i18next.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/i18next-http-backend@2.4.2/dist/umd/i18nextHttpBackend.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/i18next-browser-languagedetector@8.0.0/dist/umd/i18nextBrowserLanguageDetector.min.js"></script>
```

Và trước `</body>`:
```html
<script src="../assets/js/i18n-init.js"></script>
```

> **Lưu ý:** Path của `../assets/js/i18n-init.js` thay đổi tùy vào folder của file HTML.

## ✅ Checklist Cập Nhật File

Khi cập nhật 1 file demo mới:

- [ ] Thêm tất cả text vào `locales/vi.json` và `locales/en.json`
- [ ] Thêm `data-i18n` attributes vào HTML elements
- [ ] Cập nhật JavaScript strings để dùng `i18next.t()`
- [ ] Thêm i18next CDN scripts và `i18n-init.js`
- [ ] Test chuyển đổi ngôn ngữ giữa VI/EN
- [ ] Verify rằng nội dung code examples không bị dịch (giữ nguyên)

## 🧪 Testing

### Test Bước 1: Mở Page và Chuyển Ngôn Ngữ

1. Mở `index.html` trong browser
2. Bấm nút "EN" để chuyển sang Tiếng Anh
3. Kiểm tra tất cả text được cập nhật
4. Bấm "VI" để quay lại Tiếng Việt
5. Refresh page - ngôn ngữ phải được lưu lại

### Test Bước 2: Kiểm Tra Console

Mở Developer Tools (F12) và kiểm tra:
- Không có error liên quan đến i18next
- `i18next` object được load đúng

## 📦 Technologies Used

- **i18next**: Framework chính cho i18n
- **i18next-http-backend**: Load translation files từ `.json`
- **i18next-browser-languagedetector**: Tự detect ngôn ngữ browser
- **CDN**: Tất cả thư viện load từ CDN, không cần npm install

## 🎯 Ưu Điểm Của Setup Này

✅ Không cần build tool hay bundler
✅ Load file dịch động từ JSON
✅ Tự động lưu preference ngôn ngữ
✅ Dễ thêm ngôn ngữ mới (chỉ tạo file JSON)
✅ Tách nội dung khỏi code
✅ Hỗ trợ nested keys cho tổ chức tốt

## 🚀 Tiếp Theo

Để hoàn thành hệ thống i18n toàn bộ project:

1. **geometry-reader.html** - Ước tính 80 strings
2. **queue.html** - Ước tính 100 strings
3. **auto_layout_priority_demo.html** - Ước tính 120 strings
4. **real_world_stack_demo.html** - Ước tính 150 strings
5. **README.md** - Ước tính 200 strings

> Hoặc bạn có thể làm từng file một, test xong rồi mới sang file tiếp theo.

---

**Bạn có câu hỏi gì không? Hỏi tôi!** 😊
