import React from 'react'

function TechStack() {
  const technologies = [
    {
      name: 'Next.js',
      description: 'React 기반 풀스택 프레임워크로 빠르고 확장 가능한 웹 애플리케이션을 구현합니다.',
      icon: '⚡',
      color: 'from-gray-700 to-black'
    },
    {
      name: 'Supabase',
      description: '오픈소스 Firebase 대안으로 인증, 데이터베이스, 스토리지를 통합 제공합니다. PostgreSQL 기반의 강력한 데이터 처리.',
      icon: '🗄️',
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'OpenAI',
      description: 'GPT 모델을 활용하여 사고 분석, 질문 분석, 회고 생성 등 핵심 AI 기능을 구현합니다.',
      icon: '🤖',
      color: 'from-blue-500 to-cyan-500'
    }
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              현대적이고 강력한 기술 스택
            </h2>
            <p className="text-xl text-gray-300">
              검증된 기술로 안정적이고 확장 가능한 시스템을 구축합니다
            </p>
          </div>

          {/* Tech Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-all duration-300 border border-gray-700 hover:border-gray-600"
              >
                <div className="text-6xl mb-4">{tech.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{tech.name}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>

          {/* Architecture Diagram */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-8 text-center">시스템 아키텍처</h3>
            
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-4">
              {/* Frontend */}
              <div className="flex-1 text-center">
                <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl p-6 border-2 border-gray-600">
                  <div className="text-4xl mb-2">⚡</div>
                  <div className="font-bold text-lg">Frontend</div>
                  <div className="text-sm text-gray-400 mt-2">Next.js</div>
                  <div className="text-sm text-gray-400">React</div>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-3xl text-gray-600 hidden md:block">→</div>

              {/* Backend */}
              <div className="flex-1 text-center">
                <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl p-6 border-2 border-green-500">
                  <div className="text-4xl mb-2">🗄️</div>
                  <div className="font-bold text-lg">Backend</div>
                  <div className="text-sm text-green-100 mt-2">Supabase</div>
                  <div className="text-sm text-green-100">PostgreSQL</div>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-3xl text-gray-600 hidden md:block">→</div>

              {/* AI */}
              <div className="flex-1 text-center">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-6 border-2 border-blue-500">
                  <div className="text-4xl mb-2">🤖</div>
                  <div className="font-bold text-lg">AI Engine</div>
                  <div className="text-sm text-blue-100 mt-2">OpenAI</div>
                  <div className="text-sm text-blue-100">GPT Models</div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center text-gray-400 text-sm">
              사용자 요청 → Next.js 서버 → Supabase DB → OpenAI 분석 → 결과 반환
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack

