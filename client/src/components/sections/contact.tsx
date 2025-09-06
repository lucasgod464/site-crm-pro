import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Check } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  acceptTerms: boolean;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    acceptTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.acceptTerms) {
      toast({
        title: "Erro",
        description: "Você deve aceitar os termos para continuar",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // URL do webhook - você pode configurar isso nas variáveis de ambiente
      const webhookUrl = import.meta.env.VITE_WEBHOOK_URL || "https://n8n.yuccie.pro/webhook/7d06f608-9d15-471c-a20e-0ed86a032301";
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "contact_form",
          data: {
            ...formData,
            acceptTerms: formData.acceptTerms ? "true" : "false",
            timestamp: new Date().toISOString(),
          }
        }),
      });

      if (response.ok) {
        toast({
          title: "Sucesso!",
          description: "Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.",
        });
        
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          acceptTerms: false,
        });
      } else {
        throw new Error("Erro ao enviar mensagem");
      }
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message || "Erro ao enviar formulário. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para transformar seu 
            <span className="text-gradient block">atendimento?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Solicite uma demonstração gratuita e veja como o ArsenalCache pode revolucionar sua operação
          </p>
        </div>
        
        <Card className="bg-card border border-border">
          <CardContent className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                    Nome completo
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    placeholder="Seu nome completo"
                    required
                    data-testid="input-fullname"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="seu@email.com"
                    required
                    data-testid="input-email"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    WhatsApp
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="(11) 99999-9999"
                    data-testid="input-phone"
                  />
                </div>
                <div>
                  <Label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Empresa
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    placeholder="Nome da empresa"
                    data-testid="input-company"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Como podemos ajudar?
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={4}
                  placeholder="Conte-nos sobre seus desafios e objetivos..."
                  required
                  data-testid="textarea-message"
                />
              </div>
              
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="terms"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) => handleInputChange("acceptTerms", checked as boolean)}
                  data-testid="checkbox-terms"
                />
                <Label htmlFor="terms" className="text-sm text-muted-foreground">
                  Aceito os <button type="button" className="text-primary hover:underline">termos de uso</button> e <button type="button" className="text-primary hover:underline">política de privacidade</button>
                </Label>
              </div>
              
              <Button 
                type="submit" 
                size="lg"
                className="w-full gradient-bg text-primary-foreground py-4 text-lg transition-all transform hover:scale-105 hover:shadow-xl"
                disabled={isSubmitting}
                data-testid="button-submit-contact"
              >
                {isSubmitting ? "Enviando..." : "Solicitar Demonstração Gratuita"}
              </Button>
            </form>
            
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Demonstração em 15 minutos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Sem compromisso</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>30 dias grátis</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
