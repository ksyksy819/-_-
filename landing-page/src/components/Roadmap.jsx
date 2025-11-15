import React from 'react'

function Roadmap() {
  const milestones = [
    {
      phase: 'MVP',
      timeline: '6-8주',
      status: 'in-progress',
      title: '핵심 가치 검증',
      features: [
        '문제풀이 + 사고흐름 입력',
        'AI 기반 사고 분석',
        '오답 유형 자동 분류',
        '질문 분석 + 질문력 점수',
        '일일 자동 회고',
        '개인 대시보드'
      ]
    },
    {
      phase: 'V1',
      timeline: '8-12주',
      status: 'planned',
      title: 'B2B 확장',
      features: [
        '학원/교사용 대시보드',
        '학생별 비교 분석',
        '학부모 상담 리포트'
      ]
    },
    {
      phase: 'V2',
      timeline: '12주+',
      status: 'future',
      title: '고도화 및 자동화',
      features: [
        '반별/유형별 AI 학습전략 추천',
        '풀이 과정 자동 수집 (화면/필기)',
        '음성 기반 사고흐름 입력',
        '학교용 LTI 연동'
      ]
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'in-progress':
        return 'from-blue-500 to-blue-600'
      case 'planned':
        return 'from-purple-500 to-purple-600'
      case 'future':
        return 'from-gray-400 to-gray-500'
      default:
        return 'from-gray-400 to-gray-500'
    }
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case 'in-progress':
        return { text: '진행 중', color: 'bg-blue-500' }
      case 'planned':
        return { text: '예정', color: 'bg-purple-500' }
      case 'future':
        return { text: '계획', color: 'bg-gray-500' }
      default:
        return { text: '계획', color: 'bg-gray-500' }
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              프로젝트 로드맵
            </h2>
            <p className="text-xl text-gray-600">
              체계적인 계획으로 지속 가능한 성장을 추구합니다
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connection Line (hidden on mobile) */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-gray-400 opacity-30"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}
                >
                  <div className={`flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 max-w-lg w-full">
                      {/* Phase Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${getStatusColor(milestone.status)} text-white font-bold text-sm`}>
                          {milestone.phase}
                        </div>
                        <div className={`inline-flex items-center px-3 py-1 rounded-full ${getStatusBadge(milestone.status).color} text-white text-xs font-semibold`}>
                          {getStatusBadge(milestone.status).text}
                        </div>
                      </div>

                      {/* Timeline */}
                      <div className="text-sm text-gray-500 mb-2">
                        ⏱️ {milestone.timeline}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {milestone.title}
                      </h3>

                      {/* Features */}
                      <div className="space-y-2">
                        {milestone.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <svg className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${milestone.status === 'in-progress' ? 'text-blue-500' : milestone.status === 'planned' ? 'text-purple-500' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Dot (hidden on mobile) */}
                  <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${getStatusColor(milestone.status)} border-4 border-white shadow-lg`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub Link */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">
              프로젝트 진행 상황을 GitHub에서 확인하세요
            </p>
            <a
              href="https://github.com/ksyksy819/-_-"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub Repository 보기
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Roadmap

