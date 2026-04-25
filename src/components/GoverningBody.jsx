import { governingBody } from '../data/members';

const GoverningBody = () => {
  return (
    <section id="governing-body" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
            Governing <span className="gradient-text">Body</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Guided by industry veterans and academic excellence to align with the India Semiconductor Mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {governingBody.map((member, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl glow transition-transform hover:-translate-y-2">
              <div className="h-1 w-12 bg-primary mb-6 rounded"></div>
              <h3 className="text-xl font-bold text-navy mb-2">{member.name}</h3>
              <p className="text-primary font-semibold text-sm mb-1">{member.role}</p>
              <p className="text-text-muted text-sm italic">{member.organization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoverningBody;
