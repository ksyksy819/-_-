# 🎨 LQS 랜딩 페이지 디자인 에셋 리스트

> 랜딩 페이지 제작에 필요한 모든 디자인 에셋을 정리한 문서입니다.

---

## 📊 우선순위 분류

- **P0 (필수)**: MVP 런칭을 위해 반드시 필요한 에셋
- **P1 (중요)**: 완성도를 위해 필요한 에셋
- **P2 (선택)**: 있으면 좋은 에셋

---

## 🖼️ 이미지 에셋

### Hero Section

#### 1. 메인 비주얼 (P0)
- **파일명**: `hero-dashboard-mockup.png`
- **타입**: 대시보드 목업 이미지
- **크기**: 1200x800px (2x: 2400x1600px)
- **내용**: 
  - LQS 대시보드 메인 화면
  - 메타인지 점수 그래프
  - 질문력 차트
  - 깔끔한 UI, 데이터 시각화 강조
- **스타일**: 
  - 모던한 디자인
  - Subtle shadow
  - 약간의 perspective (3D 느낌)
- **대안**: Figma로 간단한 목업 제작 또는 실제 스크린샷

#### 2. 배경 그라데이션 (P0)
- **파일명**: `hero-gradient-bg.svg`
- **타입**: SVG 그라데이션
- **색상**: Primary (#4F46E5) → Secondary (#06B6D4)
- **스타일**: Subtle, 부드러운 블러 효과
- **대안**: Tailwind CSS 그라데이션으로 코드 구현 가능

---

### Problem Statement Section

#### 3-5. Pain Point 일러스트 (P1)
각 Pain Point당 하나씩, 총 3개

**3. 사고 과정이 보이지 않음**
- **파일명**: `problem-invisible-thinking.svg`
- **컨셉**: 물음표, 흐릿한 사고 흐름, 빈 노트
- **색상**: Grayscale + Accent color

**4. 질문 습관 추적 불가**
- **파일명**: `problem-no-tracking.svg`
- **컨셉**: 끊긴 그래프, 빈 대시보드
- **색상**: Grayscale + Accent color

**5. 회고 지속 불가**
- **파일명**: `problem-no-reflection.svg`
- **컨셉**: 미완성된 노트, 시계
- **색상**: Grayscale + Accent color

**대안**: 
- Undraw.co (무료 일러스트)
- Storyset by Freepik
- 아이콘 조합으로 간단히 표현

---

### Features Section

#### 6-11. Feature 아이콘 (P0)
각 기능당 하나씩, 총 6개

**6. 사고흐름 캡처**
- **파일명**: `icon-thinking-capture.svg`
- **아이콘**: 🧠 또는 두뇌 + 펜 조합
- **크기**: 64x64px (2x: 128x128px)

**7. AI 사고 분석**
- **파일명**: `icon-ai-analysis.svg`
- **아이콘**: 🤖 또는 AI chip + 분석 그래프
- **크기**: 64x64px

**8. 오답 이유 분석**
- **파일명**: `icon-error-analysis.svg`
- **아이콘**: 🎯 또는 타겟 + 돋보기
- **크기**: 64x64px

**9. 질문력 분석**
- **파일명**: `icon-question-analysis.svg`
- **아이콘**: ❓ 또는 물음표 + 성장 화살표
- **크기**: 64x64px

**10. 자동 회고**
- **파일명**: `icon-auto-reflection.svg`
- **아이콘**: 📝 또는 노트 + 자동화 기어
- **크기**: 64x64px

**11. 성장 대시보드**
- **파일명**: `icon-dashboard.svg`
- **아이콘**: 📊 또는 차트 + 상승 트렌드
- **크기**: 64x64px

**추천 리소스**:
- Heroicons (Tailwind 제공)
- Lucide Icons
- React Icons 라이브러리
- Font Awesome

---

### User Personas Section

#### 12-14. 페르소나 아바타 (P1)

**12. 수험생 - 김민하**
- **파일명**: `persona-student.svg`
- **스타일**: 일러스트 아바타, 친근한 느낌
- **특징**: 공부하는 모습, 책상, 노트

**13. 재도전생 - 박지윤**
- **파일명**: `persona-retaker.svg`
- **스타일**: 일러스트 아바타, 진지한 느낌
- **특징**: 집중하는 모습, 노트북

**14. 학원 원장 - 최성훈**
- **파일명**: `persona-director.svg`
- **스타일**: 일러스트 아바타, 전문적인 느낌
- **특징**: 대시보드를 보는 모습

**대안**:
- Avataaars (무료 아바타 생성)
- 이모지 또는 초성으로 간단히 표현 (김, 박, 최)
- 생략하고 아이콘만 사용

---

### How It Works Section

#### 15-18. 프로세스 일러스트 (P1)

**15. Step 1 - 문제 풀이**
- **파일명**: `step-1-problem-solving.svg`
- **컨셉**: 문제지, 사고 입력 UI

**16. Step 2 - AI 분석**
- **파일명**: `step-2-ai-analysis.svg`
- **컨셉**: AI 처리 중, 데이터 흐름

**17. Step 3 - 패턴 분류**
- **파일명**: `step-3-pattern-clustering.svg`
- **컨셉**: 클러스터링, 카테고리 정리

**18. Step 4 - 리포트 확인**
- **파일명**: `step-4-report.svg`
- **컨셉**: 대시보드, 그래프, 성장 곡선

**대안**: 
- 스크린샷 활용
- 간단한 다이어그램으로 대체

---

### Technology Stack Section

#### 19-21. 기술 스택 로고 (P0)

**19. Next.js**
- **파일명**: `logo-nextjs.svg`
- **출처**: Next.js 공식 브랜드 에셋
- **크기**: 120x40px

**20. Supabase**
- **파일명**: `logo-supabase.svg`
- **출처**: Supabase 공식 브랜드 에셋
- **크기**: 120x40px

**21. OpenAI**
- **파일명**: `logo-openai.svg`
- **출처**: OpenAI 공식 브랜드 에셋
- **크기**: 120x40px

**다운로드 링크**:
- Next.js: https://nextjs.org/brand
- Supabase: https://supabase.com/brand-assets
- OpenAI: https://openai.com/brand

#### 22. 아키텍처 다이어그램 (P1)
- **파일명**: `architecture-diagram.svg`
- **내용**: Frontend → Backend → Database → AI 흐름
- **도구**: Excalidraw, Figma, 또는 Mermaid.js

---

### Demo Section

#### 23-26. 스크린샷 (P0)

**23. 대시보드 메인**
- **파일명**: `screenshot-dashboard-main.png`
- **크기**: 1200x800px
- **내용**: 메타인지 점수, 질문력 그래프

**24. 사고흐름 입력 화면**
- **파일명**: `screenshot-thinking-input.png`
- **크기**: 1200x800px
- **내용**: 문제 풀이 + 사고 입력 UI

**25. AI 분석 결과**
- **파일명**: `screenshot-analysis-result.png`
- **크기**: 1200x800px
- **내용**: 사고 단계, 오류 유형, 개선 질문

**26. 질문력 성장 그래프**
- **파일명**: `screenshot-question-growth.png`
- **크기**: 1200x800px
- **내용**: 시간별 질문력 변화 차트

**참고**: 
- 실제 제품이 아직 없다면 Figma 목업으로 대체
- 또는 간단한 프로토타입 화면 캡처

---

### Roadmap Section

#### 27. 로드맵 타임라인 그래픽 (P1)
- **파일명**: `roadmap-timeline.svg`
- **내용**: MVP → V1 → V2 타임라인
- **스타일**: 모던한 타임라인, 완료/진행/예정 상태 표시
- **대안**: CSS로 직접 구현 가능

---

## 🎨 브랜딩 에셋

### 로고 (P0)

#### 28. LQS 로고
- **파일명**: `logo-lqs-primary.svg`
- **버전**:
  - Primary (컬러)
  - White (흰색 배경용)
  - Dark (다크 배경용)
- **크기**: 다양한 사이즈 (32px, 64px, 128px, 256px)
- **구성**: 
  - LQS 텍스트 로고
  - 심볼 (선택사항): 두뇌 + 그래프 조합

**로고 제작 도구**:
- Figma
- Canva
- Adobe Illustrator
- 또는 텍스트 로고로 시작 (Inter Bold 폰트)

#### 29. Favicon (P0)
- **파일명**: `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`
- **크기**: 16x16px, 32x32px, 64x64px
- **내용**: LQS 심볼 또는 "LQS" 이니셜

---

## 🎭 아이콘 세트

### 일반 UI 아이콘 (P0)
코드로 구현하므로 별도 파일 불필요

**사용 라이브러리**: Heroicons 또는 Lucide Icons

필요한 아이콘:
- 메뉴 (☰)
- 닫기 (✕)
- 화살표 (→, ↓)
- 체크마크 (✓)
- 별 (⭐)
- 링크 (🔗)
- GitHub 로고
- 이메일
- 외부 링크

---

## 🎬 애니메이션 에셋

### 30. 로딩 애니메이션 (P2)
- **파일명**: `loading-animation.json` (Lottie)
- **내용**: LQS 브랜드 컬러 활용한 로딩 애니메이션
- **출처**: LottieFiles 또는 직접 제작

### 31. 히어로 애니메이션 (P2)
- **파일명**: `hero-animation.json` (Lottie)
- **내용**: 사고 흐름 → 분석 → 성장 과정 애니메이션
- **대안**: Framer Motion으로 코드 구현

---

## 📐 디자인 스펙

### 컬러 팔레트
```
Primary: #4F46E5 (Indigo-600)
Secondary: #06B6D4 (Cyan-500)
Accent: #F59E0B (Amber-500)
Success: #10B981 (Green-500)
Warning: #F59E0B (Amber-500)
Error: #EF4444 (Red-500)

Background:
- Light: #FFFFFF
- Gray-50: #F9FAFB
- Gray-100: #F3F4F6

Text:
- Primary: #111827 (Gray-900)
- Secondary: #6B7280 (Gray-500)
- Tertiary: #9CA3AF (Gray-400)
```

### 타이포그래피
```
Font Family:
- Primary: 'Pretendard', 'Inter', sans-serif
- Code: 'JetBrains Mono', monospace

Font Sizes:
- Heading 1: 48px / 60px (3rem / 3.75rem)
- Heading 2: 36px / 40px (2.25rem / 2.5rem)
- Heading 3: 30px / 36px (1.875rem / 2.25rem)
- Heading 4: 24px (1.5rem)
- Body Large: 18px (1.125rem)
- Body: 16px (1rem)
- Body Small: 14px (0.875rem)
- Caption: 12px (0.75rem)

Font Weights:
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700
```

### Spacing
```
Tailwind 기본 스페이싱 사용:
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px
- 4xl: 96px
```

### Border Radius
```
- sm: 4px
- md: 8px
- lg: 12px
- xl: 16px
- 2xl: 24px
- full: 9999px
```

### Shadows
```
- sm: 0 1px 2px rgba(0, 0, 0, 0.05)
- md: 0 4px 6px rgba(0, 0, 0, 0.1)
- lg: 0 10px 15px rgba(0, 0, 0, 0.1)
- xl: 0 20px 25px rgba(0, 0, 0, 0.1)
```

---

## 📥 에셋 수집 계획

### Phase 1: 필수 에셋 (P0)
**즉시 필요**:
1. ✅ 컬러 팔레트 정의
2. ✅ 타이포그래피 설정
3. 🔄 LQS 로고 제작
4. 🔄 Favicon 제작
5. 🔄 Hero 대시보드 목업
6. 🔄 Feature 아이콘 6개 (라이브러리 사용)
7. 🔄 기술 스택 로고 3개 (공식 다운로드)
8. 🔄 스크린샷 4개 (목업 또는 프로토타입)

### Phase 2: 완성도 에셋 (P1)
**1주차**:
9. Pain Point 일러스트 3개
10. 페르소나 아바타 3개 (또는 생략)
11. 프로세스 일러스트 4개
12. 아키텍처 다이어그램
13. 로드맵 타임라인 그래픽

### Phase 3: 고급 에셋 (P2)
**여유 있을 때**:
14. 로딩 애니메이션
15. 히어로 애니메이션
16. 추가 스크린샷
17. 영상 데모

---

## 🔗 추천 리소스

### 무료 일러스트
- **Undraw**: https://undraw.co/illustrations
- **Storyset**: https://storyset.com
- **Humaaans**: https://www.humaaans.com
- **Open Doodles**: https://www.opendoodles.com

### 아이콘
- **Heroicons**: https://heroicons.com (Tailwind 공식)
- **Lucide**: https://lucide.dev
- **Phosphor Icons**: https://phosphoricons.com
- **Tabler Icons**: https://tabler-icons.io

### 로고 제작
- **Figma**: https://figma.com (무료)
- **Canva**: https://canva.com (무료 플랜)
- **Logo Ipsum**: https://logoipsum.com (임시 로고)

### 목업 도구
- **Figma**: 프로토타이핑
- **Excalidraw**: 다이어그램
- **Shots.so**: 스크린샷 목업

### 애니메이션
- **LottieFiles**: https://lottiefiles.com
- **Framer Motion**: 코드 기반 애니메이션

### 색상 도구
- **Coolors**: https://coolors.co
- **Realtime Colors**: https://realtimecolors.com

---

## ✅ 체크리스트

### 디자인 시작 전
- [ ] 컬러 팔레트 최종 확정
- [ ] 폰트 선택 및 라이선스 확인
- [ ] 로고 초안 3개 제작
- [ ] Favicon 제작

### 개발 시작 전
- [ ] Hero 목업 이미지 준비
- [ ] Feature 아이콘 6개 선정
- [ ] 기술 스택 로고 다운로드
- [ ] 임시 스크린샷 또는 플레이스홀더 준비

### 완성도 향상
- [ ] 모든 일러스트 교체
- [ ] 실제 제품 스크린샷 교체
- [ ] 애니메이션 추가
- [ ] 다크모드 에셋 준비

---

**작성일**: 2025-11-15
**버전**: 1.0
**다음 업데이트**: 로고 제작 후

