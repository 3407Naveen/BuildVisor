import { useState } from 'react';

export default function TechStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const technologies = [
    {
      name: 'XGBoost',
      category: 'ML Engine',
      description: 'Gradient boosting for precise cost and timeline predictions',
      logo: '🚀',
    },
    {
      name: 'Scikit-Learn',
      category: 'ML Framework',
      description: 'Machine learning algorithms for risk analysis',
      logo: '🧠',
    },
    {
      name: 'SHAP',
      category: 'Explainable AI',
      description: 'Visualize feature importance and prediction reasoning',
      logo: '📊',
    },
    {
      name: 'LIME',
      category: 'Explainable AI',
      description: 'Local interpretable model explanations for transparency',
      logo: '🔍',
    },
    {
      name: 'Plotly',
      category: 'Visualization',
      description: 'Interactive charts and real-time data visualization',
      logo: '📈',
    },
    {
      name: 'React',
      category: 'Frontend',
      description: 'Modern UI with responsive components',
      logo: '⚛️',
    },
    {
      name: 'TensorFlow',
      category: 'Deep Learning',
      description: 'Neural networks for complex pattern recognition',
      logo: '🤖',
    },
    {
      name: 'Supabase',
      category: 'Database',
      description: 'Real-time database for project data management',
      logo: '💾',
    },
  ];

  return (
    <section id="tech-stack" className="py-24 bg-[#F4F7FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[#3DDC97]/10 border border-[#3DDC97]/30 rounded-full">
            <span className="text-[#0A2342] text-sm font-semibold">TECHNOLOGY STACK</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2342] mb-4">
            Powered by Cutting-Edge AI
          </h2>
          <p className="text-xl text-[#0A2342]/70 max-w-3xl mx-auto">
            Built on industry-leading frameworks for reliability, accuracy, and explainability.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group border border-transparent hover:border-[#3DDC97]/30"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className="text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.logo}
                </div>
                <h3 className="text-lg font-bold text-[#0A2342] mb-1">
                  {tech.name}
                </h3>
                <div className="text-xs text-[#3DDC97] font-semibold mb-3">
                  {tech.category}
                </div>

                {hoveredTech === tech.name && (
                  <div className="absolute inset-0 bg-[#0A2342] rounded-2xl p-6 flex items-center justify-center text-center z-10 animate-fadeIn">
                    <p className="text-sm text-white/90 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-[#3DDC97]/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#0A2342] mb-2">
                Enterprise-Grade Infrastructure
              </h3>
              <p className="text-[#0A2342]/70">
                Scalable, secure, and optimized for performance. Our stack ensures fast predictions and reliable insights.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#3DDC97]">&lt;100ms</div>
                <div className="text-sm text-[#0A2342]/60">Response Time</div>
              </div>
              <div className="w-px h-12 bg-[#0A2342]/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#3DDC97]">99.9%</div>
                <div className="text-sm text-[#0A2342]/60">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
