import React, { useState } from 'react'

function Personas() {
  const [activeTab, setActiveTab] = useState(0)

  const personas = [
    {
      name: '김민하',
      role: '고3 수험생',
      emoji: '👩‍🎓',
      quote: '같은 유형을 또 틀렸어요. 제 사고 패턴에 뭔가 문제가 있는 것 같은데, 정확히 뭔지 모르겠어요.',
      needs: [
        '사고 흐름 자동 분석',
        '오답 원인 자동 추출',
        '질문 만들기 도움',
        '내 사고 패턴 변화 추적'
      ],
      value: '매 문제마다 생각을 기록하고, AI 분석을 통해 자신도 몰랐던 사고 습관을 발견할 수 있습니다.'
    },
    {
      name: '박지윤',
      role: '임용/공무원 재도전생',
      emoji: '📚',
      quote: '회고가 중요한 건 알지만, 매일 노션에 정리하기엔 너무 피곤해요. 자동으로 정리돼주면 좋겠어요.',
      needs: [
        '회고 자동 생성 (부담↓)',
        '사고·질문 패턴 변화 그래프',
        '오답 이유 자동 분류',
        '학습 전략 자동 추천'
      ],
      value: '입력 부담 없이 자동으로 생성되는 회고와 데이터 기반 학습 전략으로 효율적인 재도전을 돕습니다.'
    },
    {
      name: '최성훈',
      role: '학원 원장',
      emoji: '👨‍🏫',
      quote: '학생들의 사고력을 키우고 싶지만, 선생님들에게 추가 업무를 줄 수는 없어요. 자동화된 시스템이 필요합니다.',
      needs: [
        '학생 사고·질문 데이터 자동 수집',
        '반/학생별 사고력·질문력 대시보드',
        '학부모 상담용 사고력 리포트',
        '교사 업무 증가 없는 자동화'
      ],
      value: '교사의 추가 업무 없이 학생 데이터를 자동 수집하고, 학부모 상담에 활용할 수 있는 리포트를 제공합니다.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              누가 LQS를 사용하나요?
            </h2>
            <p className="text-xl text-gray-600">
              다양한 사용자의 니즈를 충족합니다
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8 space-x-4 overflow-x-auto pb-2">
            {personas.map((persona, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeTab === index
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {persona.emoji} {persona.role}
              </button>
            ))}
          </div>

          {/* Persona Content */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="max-w-4xl mx-auto">
              {/* Persona Info */}
              <div className="text-center mb-8">
                <div className="text-7xl mb-4">{personas[activeTab].emoji}</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {personas[activeTab].name}
                </h3>
                <p className="text-xl text-gray-600 mb-6">
                  {personas[activeTab].role}
                </p>
              </div>

              {/* Quote */}
              <div className="bg-white rounded-xl p-6 mb-8 border-l-4 border-primary shadow-md">
                <svg className="w-8 h-8 text-primary/30 mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  "{personas[activeTab].quote}"
                </p>
              </div>

              {/* Needs */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">핵심 Needs</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {personas[activeTab].needs.map((need, index) => (
                    <div key={index} className="flex items-start bg-white rounded-lg p-4 shadow-sm">
                      <svg className="w-5 h-5 mt-0.5 mr-3 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{need}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Value */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">LQS가 제공하는 가치</h4>
                <p className="text-gray-700 leading-relaxed">
                  {personas[activeTab].value}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Personas

