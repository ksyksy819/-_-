import React from 'react'

function ProblemStatement() {
  const problems = [
    {
      title: '사고 과정이 보이지 않음',
      description: '문제풀이 결과는 O, X로 남지만\n학생이 어떤 생각으로 답을 선택했는지는\n데이터로 수집되지 않습니다.',
      icon: '🔍'
    },
    {
      title: '질문 습관을 추적할 수 없음',
      description: '"좋은 질문을 하라"고 말하지만\n질문의 질이 성장하는지 확인할 방법이 없습니다.',
      icon: '❓'
    },
    {
      title: '회고가 지속되지 않음',
      description: '회고의 중요성은 알지만\n매일 수동으로 작성하기엔 너무 귀찮고\n결국 며칠 만에 포기하게 됩니다.',
      icon: '📝'
    }
  ]

  return (
    <section id="problem" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              왜 같은 유형을 반복해서 틀릴까요?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              정답률만 보여주는 기존 시스템은<br />
              '왜 틀렸는지', '어떤 생각으로 답했는지'를 알려주지 못합니다.
            </p>
          </div>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-6xl mb-6">{problem.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemStatement

