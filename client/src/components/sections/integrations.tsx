import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Zap,
  Bot,
  Globe,
  MessageSquare,
  Smartphone,
  Star
} from "lucide-react";

export function Integrations() {
  const integrations = [
    { icon: Zap, name: "Webhooks" },
    { icon: Bot, name: "ChatGPT" },
    { icon: Globe, name: "Typebot" },
    { icon: MessageSquare, name: "Dialogflow" },
    { icon: Smartphone, name: "WhatsApp API" },
    { icon: Star, name: "N8N" },
  ];

  const aiProviders = [
    { name: "ChatGPT", color: "bg-green-500" },
    { name: "Gemini", color: "bg-blue-500" },
    { name: "Claude", color: "bg-orange-500" },
    { name: "Grok", color: "bg-red-500" },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="integrations" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border-primary/20 mb-6">
            Integrações Nativas
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Chatbots, Ferramentas de 
            <span className="text-gradient block">Automação e APIs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Integre-se facilmente com aplicativos externos usando nossas APIs e Webhooks, ou aproveite nossas integrações nativas.
          </p>
        </div>
        
        {/* Integration logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center mb-16">
          {integrations.map((integration, index) => (
            <Card 
              key={index} 
              className="group p-6 bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 w-full"
              data-testid={`integration-card-${index}`}
            >
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all mx-auto">
                  <integration.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-center mt-3 text-sm font-medium">{integration.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* AI Integration Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-6">Plugue agentes de I.A com facilidade</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Conexão direta com Chat GPT, Gemini, Claude, Grok, Deepseek e outras soluções de IA para automatizar respostas inteligentes.
          </p>
          
          {/* AI logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            {aiProviders.map((provider, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-2 px-4 py-2 bg-card border border-border rounded-lg"
                data-testid={`ai-provider-${index}`}
              >
                <div className={`w-6 h-6 ${provider.color} rounded-full`}></div>
                <span className="font-medium">{provider.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            size="lg"
            className="gradient-bg text-primary-foreground px-8 py-4 text-lg transition-all transform hover:scale-105 hover:shadow-xl"
            onClick={scrollToContact}
            data-testid="button-integrate"
          >
            Quero Integrar Agora
          </Button>
        </div>
      </div>
    </section>
  );
}
