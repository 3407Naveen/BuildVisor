import { Brain, Gauge, TrendingUp, FileText, Shield, Zap } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: 'AI Prediction Engine',
      description: 'Advanced ML algorithms (XGBoost, Scikit-Learn) predict cost, duration, and risk with 95% accuracy.',
      color: 'from-[#3DDC97] to-[#2BA87B]',
    },
    {
      icon: Gauge,
      title: 'Real-Time Simulation',
      description: 'Test what-if scenarios instantly. Adjust materials, budget, workforce, and see immediate impact.',
      color: 'from-[#FFC857] to-[#FF9F1C]',
    },
    {
      icon: TrendingUp,
      title: 'Explainable AI (XAI)',
      description: 'SHAP and LIME visualizations explain why predictions occur, building trust and transparency.',
      color: 'from-[#3DDC97] to-[#2BA87B]',
    },
    {
      icon: FileText,
      title: 'Automated Reports',
      description: 'Generate comprehensive PDF reports with insights, charts, and recommendations in one click.',
      color: 'from-[#FFC857] to-[#FF9F1C]',
    },
    {
      icon: Shield,
      title: 'Risk Analysis',
      description: 'Identify potential delays, cost overruns, and resource conflicts before they happen.',
      color: 'from-[#3DDC97] to-[#2BA87B]',
    },
    {
      icon: Zap,
      title: 'Interactive Dashboards',
      description: 'Dynamic visualizations with Plotly charts, bar graphs, and real-time scenario comparisons.',
      color: 'from-[#FFC857] to-[#FF9F1C]',
    },
  ];

  return (
    <section id="features" className="py-24 bg-[#F4F7FB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[#3DDC97]/10 border border-[#3DDC97]/30 rounded-full">
            <span className="text-[#0A2342] text-sm font-semibold">FEATURES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2342] mb-4">
            Intelligent Construction Planning
          </h2>
          <p className="text-xl text-[#0A2342]/70 max-w-3xl mx-auto">
            Revolutionize your project planning with AI-powered insights and explainable predictions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#3DDC97]/20"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-bold text-[#0A2342] mb-3 group-hover:text-[#3DDC97] transition-colors">
                {feature.title}
              </h3>

              <p className="text-[#0A2342]/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
