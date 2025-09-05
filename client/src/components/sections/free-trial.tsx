import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Check, PlayCircle } from "lucide-react";

interface TrialFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
}

export function FreeTrial() {
  const [formData, setFormData] = useState<TrialFormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: keyof TrialFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);

    try {
      // URL do webhook para teste grátis - você pode configurar isso nas variáveis de ambiente
      const webhookUrl = import.meta.env.VITE_WEBHOOK_URL || "https://webhook.site/your-webhook-url";
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "free_trial_request",
          data: {
            ...formData,
            timestamp: new Date().toISOString(),
          }
        }),
      });

      if (response.ok) {
        toast({
          title: "Teste Grátis Ativado!",
          description: "Você receberá as credenciais de acesso em seu email em alguns minutos.",
        });
        
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
        });
      } else {
        throw new Error("Erro ao ativar teste grátis");
      }
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message || "Erro ao ativar teste grátis. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    "Acesso completo por 30 dias",
    "Sem limitação de recursos",
    "Suporte técnico incluído",
    "Configuração gratuita",
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge variant="secondary" className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border-primary/20 mb-6">
              <PlayCircle className="w-4 h-4 mr-2" />
              Teste Grátis
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experimente o ArsenalCache CRM Pro
              <span className="text-gradient block">gratuitamente</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Teste todas as funcionalidades do sistema por 30 dias sem compromisso. 
              Veja na prática como podemos transformar seu atendimento.
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
          </div>
          
          <div>
            <Card className="bg-card border border-border shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Ative Seu Teste Grátis</h3>
                  <p className="text-muted-foreground">
                    Preencha os dados e receba acesso instantâneo
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="trial-fullName" className="block text-sm font-medium text-foreground mb-2">
                      Nome completo
                    </Label>
                    <Input
                      id="trial-fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      placeholder="Seu nome completo"
                      required
                      data-testid="input-trial-fullname"
                    />
                  </div>

                  <div>
                    <Label htmlFor="trial-email" className="block text-sm font-medium text-foreground mb-2">
                      Email profissional
                    </Label>
                    <Input
                      id="trial-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="seu@empresa.com"
                      required
                      data-testid="input-trial-email"
                    />
                  </div>

                  <div>
                    <Label htmlFor="trial-phone" className="block text-sm font-medium text-foreground mb-2">
                      WhatsApp
                    </Label>
                    <Input
                      id="trial-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="(11) 99999-9999"
                      required
                      data-testid="input-trial-phone"
                    />
                  </div>

                  <div>
                    <Label htmlFor="trial-company" className="block text-sm font-medium text-foreground mb-2">
                      Empresa
                    </Label>
                    <Input
                      id="trial-company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Nome da empresa"
                      required
                      data-testid="input-trial-company"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full gradient-bg text-primary-foreground py-4 text-lg transition-all transform hover:scale-105 hover:shadow-xl"
                    disabled={isSubmitting}
                    data-testid="button-submit-trial"
                  >
                    {isSubmitting ? "Ativando..." : "Ativar Teste Grátis - 30 Dias"}
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Sem cartão de crédito</span>
                    <span>•</span>
                    <span>Cancelamento gratuito</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}