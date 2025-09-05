import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Server } from "lucide-react";

export function PricingVPS() {
  const plans = [
    {
      name: "VPS 8GB",
      price: "169,90",
      ram: "8GB RAM",
      cpu: "2 vCPU",
      storage: "120 GB NVMe",
      ipv4: "1 IPv4",
      server: "Servidor no Brasil",
      uptime: "Uptime superior a 99,9%",
      capacity: "Até 20 clientes",
      support: "Até 26 conexões",
      buttonText: "Contratar VPS 8GB",
      featured: false,
    },
    {
      name: "VPS 16GB",
      price: "279,90", 
      ram: "16GB RAM",
      cpu: "6 vCPU",
      storage: "200 GB NVMe",
      ipv4: "1 IPv4",
      server: "Servidor no Brasil",
      uptime: "Uptime superior a 99,9%",
      capacity: "Até 40 clientes",
      support: "Até 34 conexões",
      buttonText: "Contratar VPS 16GB",
      featured: true,
      badge: "Mais Popular",
    },
    {
      name: "VPS 32GB",
      price: "429,90",
      ram: "32GB RAM", 
      cpu: "6 vCPU",
      storage: "250 GB NVMe",
      ipv4: "1 IPv4",
      server: "Servidor no Brasil",
      uptime: "Uptime superior a 99,9%",
      capacity: "Até 60 clientes",
      support: "Até 45 conexões",
      buttonText: "Contratar VPS 32GB",
      featured: false,
    },
  ];

  const benefits = [
    {
      icon: "⚡",
      title: "Alta Performance",
      description: "Servidores WhiteLabel de ultima geração para máxima velocidade",
    },
    {
      icon: "🛡️",
      title: "99,9% Uptime",
      description: "Garantia de disponibilidade com infraestrutura redundante",
    },
    {
      icon: "🎧",
      title: "Suporte 24/7",
      description: "Equipe especializada disponível todos os dias do ano",
    },
    {
      icon: "🇧🇷",
      title: "Brasil",
      description: "Servidores em datacenter nacional para menor latência",
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Server className="w-8 h-8 text-primary" />
            <Badge variant="secondary" className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border-primary/20">
              Planos VPS
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Escolha o plano ideal para escalar seu
            <span className="text-gradient block">negócio com alto desempenho</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Infraestrutura otimizada especialmente para o ArsenalCache CRM Pro com máximo desempenho
          </p>
        </div>

        {/* VPS Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden transition-all hover:shadow-xl hover:-translate-y-2 ${
                plan.featured 
                  ? "border-2 border-primary bg-gradient-to-br from-primary/5 to-accent/5" 
                  : "border border-border bg-card hover:border-primary/30"
              }`}
              data-testid={`vps-plan-${index}`}
            >
              {plan.featured && plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="gradient-bg text-white px-4 py-1 text-xs font-medium rounded-full">
                    {plan.badge}
                  </Badge>
                </div>
              )}
              
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gradient">R$ {plan.price}</span>
                  </div>
                  <div className="text-muted-foreground">BRL/mês</div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span>{plan.ram}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span>{plan.cpu}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span>{plan.storage}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span>{plan.ipv4}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span>{plan.server}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span>{plan.uptime}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <div className="text-sm font-medium text-green-800 dark:text-green-200">
                      Capacidade: {plan.capacity}
                    </div>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                    <div className="text-sm font-medium text-blue-800 dark:text-blue-200">
                      Suporte: {plan.support}
                    </div>
                  </div>
                </div>

                <Button 
                  className={`w-full py-4 text-lg transition-all transform hover:scale-105 hover:shadow-lg ${
                    plan.featured 
                      ? "gradient-bg text-primary-foreground hover:opacity-90" 
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                  onClick={scrollToContact}
                  data-testid={`button-vps-${index}`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Our VPS */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Por que escolher nossos VPS?</h3>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Infraestrutura otimizada especialmente para o ArsenalCache CRM Pro com máximo desempenho
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="text-center bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1"
              data-testid={`benefit-card-${index}`}
            >
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="gradient-bg text-primary-foreground px-8 py-4 text-lg transition-all transform hover:scale-105 hover:shadow-xl"
            onClick={scrollToContact}
            data-testid="button-consult-vps"
          >
            Consultar Planos Personalizados
          </Button>
        </div>
      </div>
    </section>
  );
}