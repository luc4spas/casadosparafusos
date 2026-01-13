import { Wrench, Hammer, TrendingUp, Target, CheckCircle, ShoppingCart, AlertCircle, Users, Zap, BarChart3, MessageCircle, Phone } from 'lucide-react';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center gap-3">
              <img src="/casa.png" alt="Casa dos Parafusos" className="w-12 h-12 sm:w-14 sm:h-14" />
              <span className="text-lg sm:text-xl font-bold text-slate-800">Casa dos Parafusos</span>
            </div>
            <nav className="hidden md:flex gap-6 lg:gap-8">
              <button onClick={() => scrollToSection('desafio')} className="text-slate-700 hover:text-red-600 transition font-medium">O Desafio</button>
              <button onClick={() => scrollToSection('solucao')} className="text-slate-700 hover:text-red-600 transition font-medium">A Solução</button>
              <button onClick={() => scrollToSection('investimento')} className="text-slate-700 hover:text-red-600 transition font-medium">Investimento</button>
              <button onClick={() => scrollToSection('contato')} className="text-slate-700 hover:text-red-600 transition font-medium">Contato</button>
            </nav>
            <button onClick={() => scrollToSection('contato')} className="md:hidden bg-red-600 text-white px-4 py-2 rounded-lg font-medium">
              Contato
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <img src="/casa.png" alt="Casa dos Parafusos CF" className="w-24 h-24 sm:w-32 sm:h-32" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Estratégia de Crescimento Digital:<br />
              <span className="text-red-500">Casa dos Parafusos</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
              Transformando autoridade local em vendas recorrentes através do Digital e Tráfego Pago.
            </p>
            <button
              onClick={() => scrollToSection('investimento')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Ver o Plano
            </button>
          </div>
        </div>
      </section>

      {/* O Cenário Atual */}
      <section id="desafio" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">O Cenário Atual</h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Identificamos que a Casa dos Parafusos já tem tradição, mas o digital pode acelerar os resultados:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-slate-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition border border-slate-200">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-red-600" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Alcance Limitado</h3>
              <p className="text-slate-600 leading-relaxed">
                Depender apenas de quem passa na frente ou indicação limita o potencial de crescimento da loja.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition border border-slate-200">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <ShoppingCart className="w-8 h-8 text-red-600" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Estoque Parado</h3>
              <p className="text-slate-600 leading-relaxed">
                Produtos de alto valor que poderiam girar mais rápido com anúncios direcionados e estratégicos.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition border border-slate-200">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <AlertCircle className="w-8 h-8 text-red-600" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Concorrência</h3>
              <p className="text-slate-600 leading-relaxed">
                Grandes home centers anunciando na região competem pela atenção dos seus clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Solução */}
      <section id="solucao" className="py-16 sm:py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Nossa Solução</h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              Estratégia focada em resultados reais e mensuráveis
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-8 border border-slate-600">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-red-600 w-14 h-14 rounded-lg flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold">Tráfego Local</h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                Anúncios direcionados para clientes na sua região que buscam exatamente o que você vende.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-slate-300">Google Ads com intenção de compra</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-slate-300">Meta Ads segmentados por localização</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-slate-300">Remarketing para quem já conhece</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-8 border border-slate-600">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-red-600 w-14 h-14 rounded-lg flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold">Conteúdo Técnico</h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                Construção de autoridade para atrair profissionais e clientes DIY (faça você mesmo).
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-slate-300">Dicas técnicas para profissionais</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-slate-300">Tutoriais práticos para leigos</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-slate-300">Apresentação de produtos em uso</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-red-600/20 border border-red-600 rounded-xl p-6 max-w-3xl mx-auto">
            <p className="text-center text-lg">
              <strong className="text-red-300">Público-alvo duplo:</strong> Profissionais da construção (marceneiros, pedreiros, eletricistas) + Cliente final que reforma e faz reparos em casa.
            </p>
          </div>
        </div>
      </section>

      {/* Planos de Investimento */}
      <section id="investimento" className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">Planos de Investimento</h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Escolha o plano ideal para o momento do seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* BRONZE */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200 hover:shadow-xl transition">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Pacote Bronze</h3>
                <p className="text-slate-600 mb-4">Presença Digital</p>
                <div className="text-4xl font-bold text-slate-800">
                  R$ 800<span className="text-lg text-slate-600 font-normal">/mês</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">posts mensais estratégicos</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">stories por mês</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Calendário editorial planejado</span>
                </div>
              </div>

              <div className="bg-slate-100 rounded-lg p-4 mb-6">
                <p className="text-sm text-slate-600 text-center">
                  <strong>Indicado para:</strong> Manter presença digital organizada
                </p>
              </div>

              <p className="text-xs text-slate-500 text-center mb-6">
                Sem tráfego pago incluso
              </p>

              <button
                onClick={() => scrollToSection('contato')}
                className="w-full bg-slate-200 hover:bg-slate-300 text-slate-800 py-3 rounded-lg font-bold transition"
              >
                Escolher Plano
              </button>
            </div>

            {/* PRATA - DESTAQUE */}
            <div className="bg-white rounded-xl shadow-2xl p-8 border-4 border-red-600 hover:shadow-3xl transition relative transform md:scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-red-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                  RECOMENDADO
                </span>
              </div>

              <div className="text-center mb-6 mt-4">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Pacote Prata</h3>
                <p className="text-slate-600 mb-4">Aceleração de Vendas</p>
                <div className="text-5xl font-bold text-red-600">
                  R$ 1.650<span className="text-lg text-slate-600 font-normal">/mês</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">Planejamento estratégico completo</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">Captação de conteúdo IN LOCO (1x/semana)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">posts + stories estratégicos</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">Gestão de Tráfego Pago (Google + Meta)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">Automação de Whatasapp: Respostas automáticas + Fluxo de atendimento + Disparos.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">Relatório mensal de resultados</span>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-slate-700 text-center">
                  <strong>Indicado para:</strong> Negócios prontos para crescer com velocidade
                </p>
              </div>

              <p className="text-xs text-slate-600 text-center mb-6 bg-slate-100 p-3 rounded">
                * Verba de anúncios sugerida a partir de R$ 500 (pago direto ao Meta/Google)
              </p>

              <button
                onClick={() => scrollToSection('contato')}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold transition shadow-lg"
              >
                Escolher Plano
              </button>
            </div>

            {/* OURO */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200 hover:shadow-xl transition">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Pacote Ouro</h3>
                <p className="text-slate-600 mb-4">Dominância de Mercado</p>
                <div className="text-4xl font-bold text-slate-800">
                  R$ 2.800<span className="text-lg text-slate-600 font-normal">/mês</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Tudo do Prata +</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Posts mensais</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Stories diários</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Tráfego pago avançado multi-plataforma</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Criação de Catálogo Digital: App interativo para facilitar pedidos.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Reunião Mensla Estratégica: Análise de estoque e metas de vendas.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Dashboard personalizado</span>
                </div>
              </div>

              <div className="bg-slate-100 rounded-lg p-4 mb-6">
                <p className="text-sm text-slate-600 text-center">
                  <strong>Indicado para:</strong> Dominar a região e escalar vendas
                </p>
              </div>

              <p className="text-xs text-slate-500 text-center mb-6">
                Verba de anúncios sugerida: R$ 1.000,00
              </p>

              <button
                onClick={() => scrollToSection('contato')}
                className="w-full bg-slate-200 hover:bg-slate-300 text-slate-800 py-3 rounded-lg font-bold transition"
              >
                Escolher Plano
              </button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-6 py-3 rounded-lg">
              <BarChart3 className="w-5 h-5" />
              <span className="font-medium">Todos os planos incluem análise de métricas e ajustes contínuos</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contato" className="py-16 sm:py-20 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Vamos começar a construir esse resultado?
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-red-100">
            Entre em contato agora e aprove a proposta direto pelo WhatsApp
          </p>

          <a
            href="https://wa.me/5522981107871?text=Olá!%20Gostaria%20de%20aprovar%20a%20proposta%20da%20Casa%20dos%20Parafusos%20CF"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-2xl hover:shadow-3xl transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            Aprovar Proposta no WhatsApp
          </a>

          <div className="mt-12 pt-8 border-t border-red-400">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-red-100">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>(22) 98110-7871</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <span>lpas.lucas@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            Desenvolvido por <span className="text-red-500 font-medium">LJ Sistemas</span>
          </p>
          <p className="text-xs mt-2">
            © 2026 LJ SISTEMAS. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
