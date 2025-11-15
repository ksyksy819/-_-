import React from 'react'

function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: '문제 풀이 + 사고 입력',
      description: '문제를 풀면서 떠오르는 생각을 간단하게 입력하세요.\n자유 서술 또는 빠른 선택지 중 편한 방식으로.',
      icon: '✍️',
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: '02',
      title: 'AI 실시간 분석',
      description: 'OpenAI 기반 분석 엔진이 즉시 사고 과정을 분석하고\n구조화된 데이터로 변환합니다.',
      icon: '🤖',
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: '03',
      title: '오답 패턴 자동 분류',
      description: '틀린 문제의 근본 원인을 자동으로 추출하고\n유사한 실수를 클러스터링합니다.',
      icon: '🎯',
      color: 'from-pink-500 to-pink-600'
    },
    {
      number: '04',
      title: '성장 리포트 확인',
      description: '대시보드에서 메타인지 점수, 질문력 변화,\n사고 패턴 히트맵을 확인하세요.',
      icon: '📊',
      color: 'from-green-500 to-green-600'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              4단계로 간단하게 시작하세요
            </h2>
            <p className="text-xl text-gray-600">
              복잡한 설정 없이 바로 시작할 수 있습니다
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connection Line (hidden on mobile) */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-green-500 opacity-20"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative"
                >
                  {/* Step Card */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    {/* Number Badge */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${step.color} text-white font-bold text-xl mb-4 shadow-lg`}>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="text-5xl mb-4">{step.icon}</div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line text-sm">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow (hidden on mobile and last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-4 text-gray-300 text-3xl">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              지금 바로 시작해보세요
            </p>
            <a
              href="https://github.com/ksyksy819/-_-"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub에서 시작하기
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

