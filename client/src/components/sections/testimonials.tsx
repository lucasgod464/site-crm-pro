import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: "O ArsenalCache transformou completamente nossa operação. Conseguimos centralizar todos os canais de atendimento e aumentamos nossa eficiência em 300%.",
      author: "Paulo Santos",
      position: "CEO - TechMed Solutions",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    },
    {
      rating: 5,
      text: "A integração com IA mudou nosso atendimento. Resolvemos 80% das consultas automaticamente e nossos clientes amam a rapidez.",
      author: "Maria Silva",
      position: "Diretora - E-commerce Pro",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    },
    {
      rating: 5,
      text: "Como SAAS, conseguimos escalar rapidamente com o módulo white label. Já temos mais de 50 clientes ativos e crescendo.",
      author: "Carlos Rodriguez",
      position: "Fundador - AutoSaaS",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border-primary/20 mb-6">
            Estudos de Caso
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Histórias dos nossos 
            <span className="text-gradient block">Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A melhor maneira de demonstrar nosso comprometimento é por meio das experiências daqueles que fizeram parceria conosco.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card border border-border hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1"
              data-testid={`testimonial-card-${index}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">5.0</span>
                </div>
                <p className="text-muted-foreground mb-6">"{testimonial.text}"</p>
                <div className="flex items-center space-x-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={`${testimonial.author} testimonial`} 
                    className="w-12 h-12 rounded-full object-cover" 
                    data-testid={`img-avatar-${index}`}
                  />
                  <div>
                    <div className="font-semibold" data-testid={`text-author-${index}`}>{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground" data-testid={`text-position-${index}`}>{testimonial.position}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
