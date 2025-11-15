import React from 'react'

function Features() {
  const features = [
    {
      icon: '🧠',
      title: '생각의 흐름을 놓치지 마세요',
      subtitle: '사고흐름 캡처',
      description: '문제를 풀면서 떠오르는 생각을 자유롭게 기록하거나,\n빠른 선택지로 사고 유형을 표시하세요.\nAI가 자동으로 구조화하여 분석합니다.',
      highlights: ['자유 서술형 입력', '빠른 선택형 입력', '실시간 AI 분석']
    },
    {
      icon: '🤖',
      title: 'AI가 당신의 사고를 분석합니다',
      subtitle: 'AI 사고 분석',
      description: 'OpenAI GPT 기반 분석 엔진이\n사고 단계를 분류하고, 오류 유형을 식별하며,\n근본 원인을 추출합니다.',
      highlights: ['사고 단계 분류', '오류 유형 식별', '메타인지 점수 계산']
    },
    {
      icon: '🎯',
      title: '왜 틀렸는지 명확하게',
      subtitle: '오답 이유 분석',
      description: '단순히 "오답"이 아니라\n"왜 그렇게 생각했는지", "무엇이 부족했는지"\n근본 원인을 자동으로 추출합니다.',
      highlights: ['오답 이유 자동 분류', '유사 패턴 클러스터링', '개선 질문 생성']
    },
    {
      icon: '❓',
      title: '질문하는 능력도 성장합니다',
      subtitle: '질문력 분석',
      description: '생성한 모든 질문을 분석하여\n유형, 깊이, 구체성, 확장성을 측정하고\n질문 역량의 질적 성장을 시각화합니다.',
      highlights: ['질문 유형 분류', '질문 깊이 점수화', '질문 다양성 그래프']
    },
    {
      icon: '📝',
      title: '귀찮은 회고, AI가 대신합니다',
      subtitle: '자동 회고 생성',
      description: '오늘 푼 문제와 사고 분석 결과를 바탕으로\nAI가 자동으로 의미 있는 회고문을 생성합니다.\n입력 부담은 0, 효과는 100.',
      highlights: ['매일 자동 회고 생성', '사고 취약점 요약', '집중 포인트 제시']
    },
    {
      icon: '📊',
      title: '나의 성장을 한눈에',
      subtitle: '성장 대시보드',
      description: '메타인지 점수, 질문력 점수, 사고 패턴 변화를\n시각적 대시보드로 확인하세요.\n30일간의 변화를 히트맵으로 보여줍니다.',
      highlights: ['메타인지/질문력 추적', '월간 패턴 분석', '실패 유형 차트']
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              주요 기능
            </h2>
            <p className="text-xl text-gray-600">
              AI 기반의 강력한 학습 분석 도구
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <p className="text-sm font-semibold text-primary mb-2">
                  {feature.subtitle}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed whitespace-pre-line">
                  {feature.description}
                </p>
                
                {/* Highlights */}
                <div className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 mr-2 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

