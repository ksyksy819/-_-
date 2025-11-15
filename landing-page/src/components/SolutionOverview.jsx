import React from 'react'

function SolutionOverview() {
  const solutions = [
    {
      title: '사고 과정 자동 수집',
      description: '문제를 풀 때의 생각을 자연어 또는 선택형으로 간편하게 입력.\nAI가 자동으로 구조화하고 분석합니다.',
      icon: '🧠'
    },
    {
      title: 'AI 기반 메타인지 점수화',
      description: '사고 단계, 오류 유형, 근본 원인을 자동 분류하고\n메타인지 수준을 점수화하여 성장을 추적합니다.',
      icon: '📊'
    },
    {
      title: '질문력 성장 시각화',
      description: '생성한 모든 질문을 분석하여\n질문의 깊이, 다양성, 비판적 사고 수준을 측정하고\n시간에 따른 변화를 그래프로 보여줍니다.',
      icon: '📈'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              LQS는 이렇게 해결합니다
            </h2>
            
            {/* Value Proposition */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 mb-12">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                우리는 진지하게 성적을 올리고 싶은 수험생과 이들을 가르치는 학원·교사가
                문제풀이·노션·LMS·ChatGPT를 다 써봐도 
                <span className="font-bold text-primary"> '왜 같은 유형을 반복해서 틀리는지'</span>,
                <span className="font-bold text-primary"> '학생이 어떤 생각으로 답을 만들었는지' </span>
                보이지 않을 때,
                <br /><br />
                <span className="font-bold text-secondary">사고 과정·질문 흔적을 자동으로 수집·분석</span>하고
                <span className="font-bold text-secondary"> 메타인지·질문력을 시각화</span>하여 성장하도록 돕습니다.
              </p>
            </div>
          </div>

          {/* Solution Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {solution.description}
                </p>
                
                {/* Accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolutionOverview

