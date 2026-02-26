# Radix UI + Tailwind CSS 컴포넌트 라이브러리 설정 완료

## 설치된 패키지
- ✅ @radix-ui/react-alert-dialog
- ✅ @radix-ui/react-dialog
- ✅ @radix-ui/react-dropdown-menu
- ✅ @radix-ui/react-label
- ✅ @radix-ui/react-popover
- ✅ @radix-ui/react-slot
- ✅ class-variance-authority (CVA - 스타일 관리)
- ✅ clsx (클래스 병합)

## 생성된 컴포넌트

### 1. Button (`src/components/ui/Button.tsx`)
```tsx
import { Button } from '@/components/ui'

export default function Example() {
  return (
    <>
      <Button>기본 버튼</Button>
      <Button variant="outline">아웃라인</Button>
      <Button variant="ghost">고스트</Button>
      <Button size="lg">큰 버튼</Button>
      <Button disabled>비활성화</Button>
    </>
  )
}
```

### 2. Input (`src/components/ui/Input.tsx`)
```tsx
import { Input } from '@/components/ui'

export default function Example() {
  return <Input placeholder="입력하세요..." />
}
```

### 3. Label (`src/components/ui/Label.tsx`)
```tsx
import { Label, Input } from '@/components/ui'

export default function Example() {
  return (
    <div>
      <Label htmlFor="email">이메일</Label>
      <Input id="email" type="email" />
    </div>
  )
}
```

### 4. Dialog (`src/components/ui/Dialog.tsx`)
```tsx
import { 
  Dialog, 
  DialogTrigger, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  Button 
} from '@/components/ui'

export default function Example() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>대화창 열기</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>제목</DialogTitle>
          <DialogDescription>
            설명 텍스트
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
```

## 사용법

### tsconfig.json 경로 별칭 설정 (선택사항이지만 권장)
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### 기본 import
```tsx
// 개별 import
import { Button, Input, Label } from '@/components/ui'

// 또는 직접 import
import Button from '@/components/ui/Button'
```

## 장점
- ✅ 접근성(A11y) 완벽 지원
- ✅ Tailwind CSS 스타일 완전 커스터마이징
- ✅ class-variance-authority로 쉬운 스타일 관리
- ✅ TypeScript 완벽 지원
- ✅ Headless UI - 스타일 자유도 높음
- ✅ 프로덕션 레디

## 다음 단계
- 필요한 컴포넌트 추가 (Select, Checkbox, RadioGroup, etc.)
- Toast/Alert 시스템 구축
- 테마 분기 (다크모드)
