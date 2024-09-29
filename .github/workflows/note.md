Sử dụng GitHub Actions trong ứng dụng Node.js để tự động hóa quy trình kiểm thử, triển khai, hoặc kiểm tra mã nguồn là một phương pháp rất hiệu quả. Dưới đây là hướng dẫn từng bước để sử dụng GitHub Actions cho một ứng dụng Node.js:

### 1. **Thiết lập dự án Node.js**

Giả sử bạn đã có một dự án Node.js với cấu trúc cơ bản và đã có một số test để chạy.

### 2. **Tạo workflow GitHub Actions**

#### Bước 1: Tạo thư mục và tệp cấu hình GitHub Actions

- Tạo thư mục `.github/workflows/` trong thư mục gốc của dự án Node.js của bạn.
- Trong thư mục `workflows`, tạo một tệp có tên là `ci.yml` (hoặc bất kỳ tên gì bạn muốn).

Cấu trúc thư mục:

```
my-nodejs-app/
  ├── .github/
  │   └── workflows/
  │       └── ci.yml
  ├── node_modules/
  ├── src/
  ├── package.json
  ├── package-lock.json
  └── ...
```

#### Bước 2: Viết file cấu hình cho workflow

Dưới đây là ví dụ về tệp `ci.yml`:

```yaml
name: Node.js CI

on:
  push:
    branches:
      - main # Kích hoạt workflow khi có push vào nhánh main
  pull_request:
    branches:
      - main # Kích hoạt khi có pull request vào nhánh main

jobs:
  build:
    runs-on: ubuntu-latest # Sử dụng môi trường Ubuntu để chạy

    strategy:
      matrix:
        node-version: [14, 16] # Chạy trên nhiều phiên bản Node.js

    steps:
      - name: Checkout code
        uses: actions/checkout@v3 # Lấy mã nguồn từ repository

      - name: Set up Node.js
        uses: actions/setup-node@v3 # Cài đặt môi trường Node.js
        with:
          node-version: ${{ matrix.node-version }}

      - name: Install dependencies
        run: npm install # Cài đặt tất cả các gói npm

      - name: Run tests
        run: npm test # Chạy các bài kiểm thử

      - name: Lint code
        run: npm run lint # Chạy công cụ lint để kiểm tra mã (nếu có)
```

### 3. **Cấu hình workflow GitHub Actions**

- **name**: Đặt tên cho workflow, ở đây là `"Node.js CI"`.
- **on**: Xác định các sự kiện nào sẽ kích hoạt workflow.
  - `push`: Workflow sẽ chạy khi có push vào nhánh `main`.
  - `pull_request`: Workflow cũng chạy khi có pull request vào nhánh `main`.
- **jobs**: Xác định các công việc cần thực hiện.
  - **build**: Định nghĩa một job với các bước chi tiết.
    - **runs-on**: Workflow sẽ chạy trên môi trường `ubuntu-latest`.
    - **strategy**: Dùng để chạy workflow với nhiều phiên bản Node.js (ở đây là phiên bản 14 và 16).
    - **steps**: Các bước của workflow.
      - `actions/checkout`: Tải mã nguồn từ repository về.
      - `actions/setup-node`: Thiết lập phiên bản Node.js (14 và 16 trong ví dụ).
      - `npm install`: Cài đặt tất cả các phụ thuộc từ `package.json`.
      - `npm test`: Chạy kiểm thử (nếu bạn đã cấu hình test trong `package.json`).
      - `npm run lint`: Chạy lệnh lint để kiểm tra mã nguồn (nếu có cấu hình trong dự án).

### 4. **Kiểm tra workflow**

Sau khi bạn đẩy mã nguồn lên GitHub hoặc tạo pull request, workflow sẽ tự động chạy. Bạn có thể theo dõi quá trình này trong tab **Actions** trên GitHub repository của bạn:

1. Vào repository trên GitHub.
2. Chọn tab **Actions**.
3. Bạn sẽ thấy lịch sử các workflow đã chạy, với chi tiết về các bước như build, test, v.v.

### 5. **Bổ sung thêm caching để tăng tốc quá trình cài đặt**

Bạn có thể sử dụng caching để tăng tốc độ cài đặt các gói npm. Dưới đây là cách thêm cache vào `ci.yml`:

```yaml
- name: Cache node modules
  uses: actions/cache@v3
  with:
    path: node_modules
    key: ${{ runner.os }}-node-${{ hashFiles('package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-
```

### 6. **Ví dụ đầy đủ với cache**

```yaml
name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [14, 16]

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}

      - name: Cache node modules
        uses: actions/cache@v3
        with:
          path: node_modules
          key: ${{ runner.os }}-node-${{ hashFiles('package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test

      - name: Lint code
        run: npm run lint
```

### 7. **Kết quả của workflow**

Khi workflow hoàn thành, bạn có thể kiểm tra kết quả của từng bước trong tab **Actions** trên GitHub. Nếu có lỗi trong quá trình chạy test hoặc lint, bạn có thể xem log chi tiết của từng bước để dễ dàng khắc phục.

### Tổng kết

- GitHub Actions cho phép bạn tự động hóa quy trình CI/CD trong dự án Node.js.
- Bạn có thể chạy kiểm thử, kiểm tra lint, và build dự án ngay trên GitHub mỗi khi có thay đổi.
- Bổ sung cache để tối ưu tốc độ của workflow là một cách hữu ích trong các dự án lớn.
