import './App.css'
import { useState } from 'react';
import type { FormEvent } from 'react';
import { GraduationCap } from "lucide-react";
import { Input, Button, Label } from "./components/ui"
import { Toaster, toast } from "sonner";
import { Routes, Route, useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // 이메일, 비번 확인 로?직?
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const res = email === "admin@dongguk.edu" && password === "admin123";
    
    // 로그인 실패
    if(!res){
      toast.error("로그인 실패", {
          description: "이메일 또는 비밀번호를 확인해주세요.",
        });
        setLoading(false);
        return;
    }
    
    // 로그인 성공
    toast.success("로그인 성공", {
        description: "관리자님, 환영합니다.",
      });

    navigate("/dashboard");
    
    setLoading(false);
  };

  return (

    // 로그인 UI
    <div className="flex flex-col justify-center items-center h-screen bg-white font-sans antialiased">
      {/* 상단 바 */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-gradient-to-r from-[#2A3F66] via-[#2C3E6B] to-[#2A3F66]" />

      {/* 가운데 UI 메인! */}
      <div className="flex w-full max-w-sm flex-col items-center gap-4 px-4">

        <div className="flex flex-col items-center gap-3 mb-10">
          <GraduationCap className="h-10 w-10 text-[#2A3F66]" strokeWidth={1.5} />
          <h1 className="text-xl font-bold text-[#2A3F66]">동국대학교 졸업사정시스템</h1>
          <p className="text-sm text-[#2A3F66]/50">시스템 이용을 위해 로그인하세요</p>
        </div>
        

        <form onSubmit={handleLogin} className="flex w-full flex-col gap-6">

          <div className="flex flex-col gap-2">
            <Label className="text-sm text-[#2A3F66]/70">이메일</Label>
            <Input
             id="email"
             type="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             placeholder="admin@dongguk.edu"
             required/>
          </div>

          <div className="flex flex-col gap-2">
            <Label className="text-sm text-[#2A3F66]/70">비밀번호</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력하세요"
              required/>
          </div>

          <Button 
            type="submit"
            className="w-full"
            disabled={loading}>
            {loading? "로그인 중...":"로그인"}
          </Button>

        </form>
          
        <p className="mt-10 text-center text-xs text-[#2A3F66]/30">
        동국대학교 졸업사정시스템
        </p>

      </div>
      
      {/* 하단 바 */}
      <div className="fixed bottom-0 left-0 right-0 h-1 z-50 bg-gradient-to-r from-[#2A3F66] via-[#2C3E6B] to-[#2A3F66]" />

    </div>
  )
}

function DashboardPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans antialiased text-[#2A3F66]">
      <h2 className="text-2xl font-bold">대시보드</h2>
    </div>
  )
}

function App() {
  return (
    <>
      <Toaster richColors position="top-right" />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </>
  )
}

export default App
