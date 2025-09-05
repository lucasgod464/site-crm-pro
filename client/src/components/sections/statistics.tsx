import { AnimatedCounter } from "@/components/ui/animated-counter";

export function Statistics() {
  const stats = [
    { value: 2500, label: "Instalações realizadas", suffix: "+" },
    { value: 98, label: "% Satisfação no atendimento" },
    { value: 15, label: "Países atendidos", suffix: "+" },
    { value: 99, label: "% Uptime garantido" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2" data-testid={`stat-${index}`}>
                <AnimatedCounter 
                  end={stat.value} 
                  suffix={stat.suffix || ""} 
                  className="inline-block" 
                />
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
