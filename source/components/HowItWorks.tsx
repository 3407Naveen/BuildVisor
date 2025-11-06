import { Upload, Settings, Brain, Download } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: 'Input Project Data',
      description: 'Upload project parameters: budget, timeline, materials, workforce, and equipment specifications.',
      step: '01',
    },
    {
      icon: Settings,
      title: 'Configure Scenarios',
      description: 'Adjust variables to create what-if scenarios. Test different materials, budgets, or timelines.',
      step: '02',
    },
    {
      icon: Brain,
      title: 'AI Analysis',
      description: 'Our ML engine processes data and generates predictions with explainable AI visualizations.',
      step: '03',
    },
    {
      icon: Download,
      title: 'Get Insights',
      description: 'Review predictions, explore SHAP charts, compare scenarios, and download comprehensive reports.',
      step: '04',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#0A2342] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#3DDC97] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFC857] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[#3DDC97]/10 border border-[#3DDC97]/30 rounded-full">
            <span className="text-[#3DDC97] text-sm font-semibold">HOW IT WORKS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple. Intelligent. Transparent.
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Four steps to smarter construction planning with AI-powered predictions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#3DDC97] to-transparent -translate-x-1/2"></div>
              )}

              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-[#3DDC97] to-[#2BA87B] rounded-xl flex items-center justify-center text-[#0A2342] font-bold text-lg shadow-lg">
                  {step.step}
                </div>

                <div className="inline-flex p-3 rounded-xl bg-[#3DDC97]/10 mb-6 group-hover:bg-[#3DDC97]/20 transition-colors">
                  <step.icon className="w-6 h-6 text-[#3DDC97]" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
