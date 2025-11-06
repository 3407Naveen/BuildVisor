import { useState } from 'react';
import { Sparkles, TrendingDown, TrendingUp, AlertTriangle } from 'lucide-react';

export default function Demo() {
  const [inputs, setInputs] = useState({
    budget: 500000,
    workforce: 20,
    materials: 75,
    equipment: 50,
  });

  const [predictions, setPredictions] = useState({
    cost: 520000,
    delay: 5,
    risk: 35,
  });

  const handleInputChange = (field: string, value: number) => {
    const newInputs = { ...inputs, [field]: value };
    setInputs(newInputs);

    const budgetFactor = newInputs.budget / 500000;
    const workforceFactor = newInputs.workforce / 20;
    const materialsFactor = newInputs.materials / 75;
    const equipmentFactor = newInputs.equipment / 50;

    const predictedCost = Math.round(
      newInputs.budget * 1.04 * (1 + (100 - materialsFactor * 100) * 0.002)
    );
    const predictedDelay = Math.max(
      0,
      Math.round(15 - workforceFactor * 10 - equipmentFactor * 5)
    );
    const predictedRisk = Math.min(
      100,
      Math.max(
        0,
        Math.round(
          50 -
            workforceFactor * 15 -
            equipmentFactor * 10 +
            (100 - materialsFactor * 100) * 0.3
        )
      )
    );

    setPredictions({
      cost: predictedCost,
      delay: predictedDelay,
      risk: predictedRisk,
    });
  };

  const getRiskLevel = (risk: number) => {
    if (risk < 30) return { label: 'Low', color: 'text-green-500' };
    if (risk < 60) return { label: 'Medium', color: 'text-[#FFC857]' };
    return { label: 'High', color: 'text-red-500' };
  };

  const riskInfo = getRiskLevel(predictions.risk);

  return (
    <section id="demo" className="py-24 bg-[#0A2342] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3DDC97] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFC857] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[#3DDC97]/10 border border-[#3DDC97]/30 rounded-full">
            <span className="text-[#3DDC97] text-sm font-semibold">INTERACTIVE DEMO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Test What-If Scenarios
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Adjust project parameters and watch AI predictions update in real-time with explainable insights.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <Sparkles className="w-6 h-6 text-[#3DDC97]" />
                <h3 className="text-2xl font-bold text-white">Project Parameters</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-semibold text-white">Budget</label>
                    <span className="text-[#3DDC97] font-bold">
                      ${inputs.budget.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="100000"
                    max="1000000"
                    step="10000"
                    value={inputs.budget}
                    onChange={(e) => handleInputChange('budget', Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#3DDC97]"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-semibold text-white">Workforce</label>
                    <span className="text-[#3DDC97] font-bold">{inputs.workforce} people</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    step="1"
                    value={inputs.workforce}
                    onChange={(e) => handleInputChange('workforce', Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#3DDC97]"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-semibold text-white">Material Quality</label>
                    <span className="text-[#3DDC97] font-bold">{inputs.materials}%</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="100"
                    step="5"
                    value={inputs.materials}
                    onChange={(e) => handleInputChange('materials', Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#3DDC97]"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-semibold text-white">Equipment Level</label>
                    <span className="text-[#3DDC97] font-bold">{inputs.equipment}%</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="100"
                    step="5"
                    value={inputs.equipment}
                    onChange={(e) => handleInputChange('equipment', Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#3DDC97]"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <Brain className="w-6 h-6 text-[#FFC857]" />
                <h3 className="text-2xl font-bold text-white">AI Predictions</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/70 text-sm">Predicted Cost</span>
                    <TrendingUp className="w-5 h-5 text-red-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">
                    ${predictions.cost.toLocaleString()}
                  </div>
                  <div className="text-sm text-red-400">
                    +${(predictions.cost - inputs.budget).toLocaleString()} from budget
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/70 text-sm">Expected Delay</span>
                    <TrendingDown className="w-5 h-5 text-[#FFC857]" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">
                    {predictions.delay} days
                  </div>
                  <div className="text-sm text-white/60">From project start date</div>
                </div>

                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/70 text-sm">Risk Level</span>
                    <AlertTriangle className={`w-5 h-5 ${riskInfo.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">
                    {predictions.risk}%
                  </div>
                  <div className={`text-sm ${riskInfo.color} font-semibold`}>
                    {riskInfo.label} Risk
                  </div>
                  <div className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        predictions.risk < 30
                          ? 'bg-green-500'
                          : predictions.risk < 60
                          ? 'bg-[#FFC857]'
                          : 'bg-red-500'
                      }`}
                      style={{ width: `${predictions.risk}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <button className="w-full px-6 py-4 bg-gradient-to-r from-[#3DDC97] to-[#2BA87B] text-[#0A2342] font-bold rounded-xl hover:shadow-2xl hover:shadow-[#3DDC97]/30 transition-all duration-300">
                Generate Full Report
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-white/60 text-sm">
          <p>
            This is a simplified demo. The full platform includes SHAP visualizations, scenario comparison, and comprehensive analytics.
          </p>
        </div>
      </div>
    </section>
  );
}

function Brain({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  );
}
