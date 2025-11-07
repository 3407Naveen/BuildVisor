import { Linkedin, Github, Mail } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: 'Naveen S',
      role: 'MERN Developer',
      avatar: 'NS',
      bio: 'Full-stack developer specializing in MERN stack technologies',
      color: 'from-[#3DDC97] to-[#2BA87B]',
      linkedin: 'https://www.linkedin.com/in/naveen-s-003633314/',
      github: 'https://github.com/3407Naveen',
      email: '3407naveen@gaail.com',
    },
    {
      name: 'Darsh Chatrani ',
      role: 'Penetration Tester',
      avatar: 'DC',
      bio: 'Expert in cybersecurity and penetration testing',
      color: 'from-[#FFC857] to-[#FF9F1C]',
      linkedin: 'https://www.linkedin.com/in/darshchatrani',
      github: 'https://github.com/White-Hat-007',
      email: 'darsh.chatrani.work@gmail.com',
    },
    {
      name: 'Yuvaraj R',
      role: 'Full Stack / ML Enthusiast',
      avatar: 'YR',
      bio: 'Passionate about full-stack development and machine learning',
      color: 'from-[#3DDC97] to-[#2BA87B]',
      linkedin: 'https://www.linkedin.com/in/yuvaraj-raja-b1624b328',
      github: 'https://github.com/YuvarajRaja',
      email: 'yuvarajraja002@gmail.com',
    },
    {
      name: 'Praveen ',
      role: 'Full Stack Engineer',
      avatar: 'PN',
      bio: 'React & ML pipeline specialist',
      color: 'from-[#FFC857] to-[#FF9F1C]',
    },
  ];

  return (
    <section id="team" className="py-24 bg-[#F4F7FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[#3DDC97]/10 border border-[#3DDC97]/30 rounded-full">
            <span className="text-[#0A2342] text-sm font-semibold">OUR TEAM</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2342] mb-4">
            Meet the Experts
          </h2>
          <p className="text-xl text-[#0A2342]/70 max-w-3xl mx-auto">
            A multidisciplinary team combining AI expertise with construction industry knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-center border border-transparent hover:border-[#3DDC97]/20"
            >
              <div className="relative inline-block mb-6">
                <div
                  className={`w-24 h-24 rounded-full bg-gradient-to-r ${member.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {member.avatar}
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#3DDC97] rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#0A2342] mb-2">
                {member.name}
              </h3>

              <div className="text-sm text-[#3DDC97] font-semibold mb-3">
                {member.role}
              </div>

              <p className="text-sm text-[#0A2342]/70 mb-6 leading-relaxed">
                {member.bio}
              </p>

              <div className="flex items-center justify-center space-x-3">
                {member.linkedin ? (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#0A2342]/5 flex items-center justify-center hover:bg-[#3DDC97]/20 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-[#0A2342]" />
                  </a>
                ) : (
                  <button className="w-9 h-9 rounded-full bg-[#0A2342]/5 flex items-center justify-center hover:bg-[#3DDC97]/20 transition-colors">
                    <Linkedin className="w-4 h-4 text-[#0A2342]" />
                  </button>
                )}
                {member.github ? (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#0A2342]/5 flex items-center justify-center hover:bg-[#3DDC97]/20 transition-colors"
                  >
                    <Github className="w-4 h-4 text-[#0A2342]" />
                  </a>
                ) : (
                  <button className="w-9 h-9 rounded-full bg-[#0A2342]/5 flex items-center justify-center hover:bg-[#3DDC97]/20 transition-colors">
                    <Github className="w-4 h-4 text-[#0A2342]" />
                  </button>
                )}
                {member.email ? (
                  <a
                    href={`mailto:${member.email}`}
                    className="w-9 h-9 rounded-full bg-[#0A2342]/5 flex items-center justify-center hover:bg-[#3DDC97]/20 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#0A2342]" />
                  </a>
                ) : (
                  <button className="w-9 h-9 rounded-full bg-[#0A2342]/5 flex items-center justify-center hover:bg-[#3DDC97]/20 transition-colors">
                    <Mail className="w-4 h-4 text-[#0A2342]" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#0A2342] to-[#0A2342]/90 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#3DDC97] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#FFC857] rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Join Our Mission
            </h3>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              We're always looking for talented engineers, data scientists, and construction experts
              passionate about transforming the industry with AI.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-[#3DDC97] to-[#2BA87B] text-[#0A2342] font-bold rounded-xl hover:shadow-2xl hover:shadow-[#3DDC97]/30 transition-all duration-300">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
