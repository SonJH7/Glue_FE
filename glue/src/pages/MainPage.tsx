import React from 'react';
import Header from '../components/Header.tsx';
import HeroSection from '../components/HeroSection.tsx';
import HotMeetings from '../components/HotMeetings.tsx';
import LatestMeetings from '../components/LatestMeetings.tsx';

const MainPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* 상단 고정 헤더 */}
      <Header />

      {/* 메인 콘텐츠 (헤더 높이 고려하여 padding-top 적용) */}
      <main className="pt-24 container mx-auto px-4">
        {/* Hero 영역 (제목, 검색, 카테고리) */}
        <HeroSection />

        {/* 지금 핫한 모임 섹션 */}
        <HotMeetings />

        {/* 가장 최신 모임 섹션 */}
        <LatestMeetings />
      </main>
    </div>
  );
};

export default MainPage;
