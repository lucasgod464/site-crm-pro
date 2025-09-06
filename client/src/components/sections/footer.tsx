import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Instagram, MessageCircle } from "lucide-react";
import arsenalLogo from "@assets/Sem título (11)_1757098339013.png";

export function Footer() {
  const productLinks = [
    { href: "#features", label: "Recursos", id: "features" },
    { href: "#integrations", label: "Integrações", id: "integrations" },
    { href: "#pricing", label: "Preços", id: "pricing" },
    { href: "#updates", label: "Atualizações", id: "updates" },
  ];

  const supportLinks = [
    { href: "#help", label: "Central de Ajuda", id: "help" },
    { href: "#docs", label: "Documentação", id: "docs" },
    { href: "#contact", label: "Contato", id: "contact" },
    { href: "#status", label: "Status", id: "status" },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: MessageCircle, href: "#", name: "WhatsApp" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-muted/50 border-t border-border py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={arsenalLogo} 
                alt="ArsenalCache CRM Pro" 
                className="h-10 w-auto"
                data-testid="footer-logo"
              />
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              O sistema completo de CRM e atendimento multicanal que sua empresa precisa para crescer de forma escalável e inteligente.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 bg-primary/10 rounded-lg text-primary hover:bg-primary hover:text-white transition-all"
                  onClick={() => window.open(social.href, "_blank")}
                  data-testid={`social-${social.name.toLowerCase()}`}
                >
                  <social.icon className="w-5 h-5" />
                </Button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-2 text-muted-foreground">
              {productLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-primary transition-colors text-left"
                    data-testid={`footer-product-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-muted-foreground">
              {supportLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-primary transition-colors text-left"
                    data-testid={`footer-support-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="mb-6 text-center">
            <div className="bg-muted/30 rounded-lg p-6 max-w-2xl mx-auto">
              <h4 className="font-semibold mb-3 text-primary">Informações da Empresa</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <p><strong>YUCCIE DIGITAL AGENCIAS DE PUBLICIDADE LTDA - ME</strong></p>
                <p>CNPJ: 44.980.010/0001-06</p>
                <p>Fundada em: 24/01/2022 - São José dos Campos/SP</p>
                <p>Atividade principal: Agências de publicidade</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm" data-testid="copyright">
              © 2024 ArsenalCache CRM Pro. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <button className="hover:text-primary transition-colors" data-testid="footer-privacy">
                Privacidade
              </button>
              <button className="hover:text-primary transition-colors" data-testid="footer-terms">
                Termos
              </button>
              <button className="hover:text-primary transition-colors" data-testid="footer-cookies">
                Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
