import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  TicketIcon, 
  Users, 
  Clock, 
  Bot, 
  Server,
  ArrowRight
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: MessageCircle,
      title: "Todos chats em uma tela",
      description: "Centralize WhatsApp, Instagram, Facebook, Telegram e email em uma única interface intuitiva.",
    },
    {
      icon: TicketIcon,
      title: "Sistema de Tickets",
      description: "Organize e priorize todos os atendimentos com sistema completo de tickets e setorização.",
    },
    {
      icon: Users,
      title: "Múltiplos Atendentes",
      description: "Permita que sua equipe trabalhe colaborativamente com controle total de permissões.",
    },
    {
      icon: Clock,
      title: "Agendamentos de mensagem",
      description: "Programe campanhas e mensagens automáticas para o momento perfeito.",
    },
    {
      icon: Bot,
      title: "Integração com Chatbots",
      description: "Conecte com inteligência artificial e automatize respostas inteligentes.",
    },
    {
      icon: Server,
      title: "Hospedagem Própria",
      description: "Instale no seu servidor com controle total dos dados e zero dependência externa.",
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border-primary/20 mb-6">
            Recursos Completos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Múltiplos Canais de 
            <span className="text-gradient block">Atendimento</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Centralize todas as suas conversas e automatize processos com nossa plataforma completa de CRM e atendimento multicanal.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group bg-card border border-border hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
              data-testid={`feature-card-${index}`}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <div className="text-primary font-medium group-hover:text-accent transition-colors flex items-center">
                  Saiba mais <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg"
            className="gradient-bg text-primary-foreground px-8 py-4 text-lg transition-all transform hover:scale-105 hover:shadow-xl"
            onClick={scrollToContact}
            data-testid="button-start-features"
          >
            Quero Começar Agora
          </Button>
        </div>
      </div>
    </section>
  );
}
