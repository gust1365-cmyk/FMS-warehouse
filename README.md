# FMS 창고 로케이션 현황 대시보드

파레트 렉 / 소물 다이 실시간 재고 현황 데스크톱 앱 (Electron)

---

## 📦 GitHub에서 EXE 빌드하기

### 1단계 — 저장소 만들기

1. [github.com](https://github.com) 로그인
2. 우상단 **+** → **New repository**
3. Repository name: `fms-warehouse`
4. **Public** 또는 **Private** 선택 → **Create repository**

### 2단계 — 파일 업로드

```
fms-warehouse/
├── .github/
│   └── workflows/
│       └── build.yml        ← GitHub Actions 빌드 자동화
├── src/
│   └── index.html           ← 대시보드 HTML
├── assets/
│   └── icon.ico             ← 앱 아이콘 (선택, 없으면 자동생성)
├── main.js                  ← Electron 메인 프로세스
├── package.json             ← 패키지 설정
└── README.md
```

GitHub 웹에서 **Add file → Upload files** 로 위 파일 전체 업로드

### 3단계 — 빌드 실행 확인

- 파일 업로드(push) 시 **Actions** 탭에서 자동으로 빌드 시작
- 약 5~10분 후 완료
- **Actions → 빌드 클릭 → Artifacts** 에서 EXE 다운로드

### 4단계 — 버전 릴리스 (선택)

```
태그를 만들면 GitHub Release에 EXE가 자동 첨부됩니다.
예: v1.0.0 태그 push → Releases 페이지에 다운로드 링크 생성
```

---

## 🖥️ 로컬에서 직접 빌드하기 (Node.js 설치된 경우)

```bash
# Node.js 18+ 필요 (https://nodejs.org)

# 의존성 설치
npm install

# 개발 모드 실행
npm start

# Windows EXE 빌드 (dist/ 폴더에 생성)
npm run build:win
```

---

## 📋 주요 기능

| 기능 | 설명 |
|------|------|
| 파레트 렉 | ARM-RO2, ARM-RO3, ASM-G (각 10 로케이션, 상/하단) |
| 소물 다이 | ASM-A, B, C, D (각 4슬롯, 상/하단) |
| TXT 파일 불러오기 | 발주 TSV 파일 드래그&드롭 또는 파일 선택 |
| 선입선출 시각화 | 상단(소진중) → 하단(꽉찬 파렛) |
| 경과일 색상 | 🟢 안전(≤10일) / 🟡 주의(11~20일) / 🔴 위험(21일+) |
| 레진 그래픽 | 1,000KG = 4×8 블록, 위에서부터 소진 표시 |
| 데이터 저장 | 브라우저 localStorage 자동 저장 |

---

## 🗂️ 아이콘 교체 방법

`assets/` 폴더에 아래 파일을 넣으면 자동 적용됩니다:
- `icon.ico` — Windows용 (256×256 권장)
- `icon.png` — Linux용 (512×512 권장)
- `icon.icns` — Mac용

무료 아이콘 변환: [icoconvert.com](https://icoconvert.com)
