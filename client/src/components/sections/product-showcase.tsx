import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export function ProductShowcase() {
  const benefits = [
    "Sem limite de contatos cadastrados",
    "Sem limite de usuários atendentes",
    "Sem limite de integrações",
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge variant="secondary" className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border-primary/20 mb-6">
              Solução Auto-Hospedada
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Conquiste e Retenha Mais 
              <span className="text-gradient block">Clientes</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              O ArsenalCache CRM Pro é um sistema avançado que une a gestão completa de relacionamento com clientes, automações inteligentes e integrações poderosas com IA.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg"
              className="gradient-bg text-primary-foreground px-8 py-4 text-lg transition-all transform hover:scale-105 hover:shadow-xl"
              onClick={scrollToContact}
              data-testid="button-demo-showcase"
            >
              Quero Minha Demonstração
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800" 
              alt="Modern CRM dashboard interface" 
              className="relative rounded-2xl shadow-2xl w-full" 
              data-testid="img-dashboard"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
