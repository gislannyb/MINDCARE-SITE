// Lista completa de profissionais com dados detalhados
const profissionais = [
  {
    nome: "Dra. Julia Clara",
    especialidade: "Terapia Cognitivo-Comportamental",
    valor: 200,
    foto: "cristiana.jpeg",
    crp: "CRP 06/123456",
    formacao: [
      "Graduação em Psicologia - USP (2010)",
      "Mestrado em Psicologia Clínica - UNIFESP (2013)",
      "Especialização em TCC - Instituto Beck (2014)"
    ],
    experiencia: [
      "15 anos de experiência clínica",
      "Atendimento a adultos com ansiedade e depressão",
      "Coordenadora de grupo terapêutico no Hospital das Clínicas",
      "Supervisora clínica em formação de novos psicólogos"
    ],
    avaliacoes: [
      {
        cliente: "Maria S.",
        data: "Março 2025",
        estrelas: 5,
        comentario: "Profissional extremamente competente! Me ajudou muito a superar minha ansiedade. Recomendo de olhos fechados."
      },
      {
        cliente: "João P.",
        data: "Fevereiro 2025",
        estrelas: 5,
        comentario: "Excelente terapeuta. Suas técnicas são muito eficazes e ela é muito acolhedora."
      },
      {
        cliente: "Ana L.",
        data: "Janeiro 2025",
        estrelas: 4,
        comentario: "Ótima profissional, me sinto muito confortável nas sessões. Está me ajudando bastante."
      }
    ]
  },
  {
    nome: "Dr. Maria",
    especialidade: "Psicanálise",
    valor: 250,
    foto: "maria.jpeg",
    crp: "CRP 06/234567",
    formacao: [
      "Graduação em Psicologia - PUC-SP (2008)",
      "Formação em Psicanálise - Sociedade Brasileira de Psicanálise (2012)",
      "Doutorado em Teoria Psicanalítica - UFRJ (2016)"
    ],
    experiencia: [
      "17 anos de experiência em análise",
      "Especialista em análise de adultos e adolescentes",
      "Membro titular da Sociedade Brasileira de Psicanálise",
      "Autor de 3 livros sobre teoria psicanalítica contemporânea"
    ],
    avaliacoes: [
      {
        cliente: "Carlos M.",
        data: "Março 2025",
        estrelas: 5,
        comentario: "Profundo conhecimento teórico aliado a grande sensibilidade clínica. Transformou minha vida."
      },
      {
        cliente: "Beatriz F.",
        data: "Fevereiro 2025",
        estrelas: 5,
        comentario: "Analista excepcional. As sessões são sempre reveladoras e me ajudam muito no autoconhecimento."
      },
      {
        cliente: "Ricardo S.",
        data: "Dezembro 2024",
        estrelas: 5,
        comentario: "Melhor decisão que tomei foi começar análise com ele. Profissional incrível!"
      }
    ]
  },
  {
    nome: "Dra. Júlia Andrade",
    especialidade: "Terapia Familiar",
    valor: 220,
    foto: "julia.jpeg",
    crp: "CRP 06/345678",
    formacao: [
      "Graduação em Psicologia - UNICAMP (2012)",
      "Especialização em Terapia de Casal e Família - PUC-SP (2014)",
      "Mestrado em Psicologia Social - USP (2017)"
    ],
    experiencia: [
      "13 anos de experiência clínica",
      "Especialista em mediação de conflitos familiares",
      "Atendimento a casais, famílias e adolescentes",
      "Facilitadora de grupos de apoio a pais"
    ],
    avaliacoes: [
      {
        cliente: "Família Silva",
        data: "Março 2025",
        estrelas: 5,
        comentario: "Nos ajudou a melhorar muito nossa comunicação familiar. Profissional muito dedicada!"
      },
      {
        cliente: "Paula e Roberto",
        data: "Janeiro 2025",
        estrelas: 5,
        comentario: "Salvou nosso casamento! Técnicas muito eficazes e abordagem acolhedora. Gratidão!"
      },
      {
        cliente: "Márcia T.",
        data: "Dezembro 2024",
        estrelas: 4,
        comentario: "Muito boa! Está nos ajudando muito com as questões da adolescência do nosso filho."
      }
    ]
  },
  {
    nome: "Dr. Pedro",
    especialidade: "Terapia Infantil",
    valor: 210,
    foto: "pedro.webp",
    crp: "CRP 06/456789",
    formacao: [
      "Graduação em Psicologia - UNESP (2011)",
      "Especialização em Psicologia Infantil - Hospital Pequeno Príncipe (2013)",
      "Formação em Ludoterapia - Instituto Luz (2015)"
    ],
    experiencia: [
      "14 anos de experiência com crianças",
      "Especialista em TDAH, TEA e dificuldades escolares",
      "Psicólogo escolar em colégio particular",
      "Supervisor de estágio em clínica-escola"
    ],
    avaliacoes: [
      {
        cliente: "Sandra M. (mãe)",
        data: "Março 2025",
        estrelas: 5,
        comentario: "Meu filho adora as sessões! Dr. Pedro tem um dom especial com crianças. Resultados incríveis!"
      },
      {
        cliente: "Fernando L. (pai)",
        data: "Fevereiro 2025",
        estrelas: 5,
        comentario: "Profissional excepcional. Ajudou muito nosso filho com as dificuldades na escola."
      },
      {
        cliente: "Juliana K. (mãe)",
        data: "Janeiro 2025",
        estrelas: 5,
        comentario: "Muito paciente e atencioso. Minha filha melhorou muito após começar o acompanhamento."
      }
    ]
  }
];

// Função para exibir estrelas de avaliação
function exibirEstrelas(quantidade) {
  return '⭐'.repeat(quantidade) + '☆'.repeat(5 - quantidade);
}

// Função para carregar e exibir os profissionais
function carregarProfissionais() {
  const lista = document.getElementById("lista-profissionais");
  const select = document.getElementById("select-profissional");
  
  if (lista) lista.innerHTML = "";
  
  if (select) {
    const primeira = select.querySelector('option[value=""]');
    select.innerHTML = "";
    if (primeira) select.appendChild(primeira);
  }
  
  profissionais.forEach((p, i) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      ${p.foto ? `<img src="${p.foto}" alt="${p.nome}" class="card-img" onerror="this.onerror=null;this.src='data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 140 140%27><rect width=%27100%25%27 height=%27100%25%27 fill=%27%23e6e6e6%27/><text x=%2750%25%27 y=%2750%25%27 dy=%27.35em%27 text-anchor=%27middle%27 font-family=%27Arial%27 font-size=%2714%27 fill=%27%23666%27>Sem%20imagem</text></svg>'">` : ''}
      <h4>${p.nome}</h4>
      <p>${p.especialidade}</p>
      <span>💰 R$ ${p.valor}</span>
      <button class="botao botao-perfil" onclick="mostrarPerfil(${i})">Ver Perfil</button>
    `;
    lista.appendChild(card);
    
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = `${p.nome} — ${p.especialidade}`;
    select.appendChild(opt);
  });
}

// Função para mostrar o perfil detalhado do profissional
function mostrarPerfil(index) {
  const prof = profissionais[index];
  const detalhes = document.getElementById("perfil-detalhes");
  const secaoProfissionais = document.getElementById("profissionais");
  const secaoAgendamento = document.getElementById("agendamento");
  
  // Monta o HTML da tela de perfil
  detalhes.innerHTML = `
    <div class="perfil-container">
      <button class="botao-voltar" onclick="voltarParaLista()">← Voltar</button>
      
      <div class="perfil-header">
        <img src="${prof.foto}" alt="${prof.nome}" class="perfil-foto" onerror="this.onerror=null;this.src='data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 200 200%27><rect width=%27100%25%27 height=%27100%25%27 fill=%27%23e6e6e6%27/><text x=%2750%25%27 y=%2750%25%27 dy=%27.35em%27 text-anchor=%27middle%27 font-family=%27Arial%27 font-size=%2716%27 fill=%27%23666%27>Sem%20imagem</text></svg>'">
        <div class="perfil-info">
          <h2>${prof.nome}</h2>
          <p class="perfil-especialidade">${prof.especialidade}</p>
          <p class="perfil-crp">${prof.crp}</p>
          <p class="perfil-valor">💰 R$ ${prof.valor} por sessão</p>
        </div>
      </div>
      
      <div class="perfil-secao">
        <h3>📚 Formação Acadêmica</h3>
        <ul>
          ${prof.formacao.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
      
      <div class="perfil-secao">
        <h3>💼 Experiência Profissional</h3>
        <ul>
          ${prof.experiencia.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
      
      <div class="perfil-secao">
        <h3>💬 Avaliações de Clientes</h3>
        <div class="avaliacoes-lista">
          ${prof.avaliacoes.map(av => `
            <div class="avaliacao-card">
              <div class="avaliacao-header">
                <strong>${av.cliente}</strong>
                <span class="avaliacao-data">${av.data}</span>
              </div>
              <div class="avaliacao-estrelas">${exibirEstrelas(av.estrelas)}</div>
              <p class="avaliacao-texto">"${av.comentario}"</p>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="perfil-acoes">
        <a href="#agendamento" class="botao botao-agendar" onclick="voltarParaLista()">Agendar Sessão</a>
        <button class="botao botao-voltar-secundario" onclick="voltarParaLista()">Voltar para Lista</button>
      </div>
    </div>
  `;
  
  // Esconde as seções principais e mostra os detalhes
  secaoProfissionais.style.display = "none";
  secaoAgendamento.style.display = "none";
  detalhes.style.display = "block";
  
  // Rola para o topo
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Função para voltar à lista de profissionais
function voltarParaLista() {
  const detalhes = document.getElementById("perfil-detalhes");
  const secaoProfissionais = document.getElementById("profissionais");
  const secaoAgendamento = document.getElementById("agendamento");
  
  detalhes.style.display = "none";
  secaoProfissionais.style.display = "block";
  secaoAgendamento.style.display = "block";
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ====== PERSISTÊNCIA COM LOCALSTORAGE ======

function carregarAgendamentos() {
  const dados = localStorage.getItem('agendamentos');
  const agendamentos = dados ? JSON.parse(dados) : [];
  console.log('Agendamentos carregados do localStorage:', agendamentos); // Debug
  return agendamentos;
}

function salvarAgendamento(novoAgendamento) {
  const agendamentos = carregarAgendamentos();
  agendamentos.push(novoAgendamento);
  localStorage.setItem('agendamentos', JSON.stringify(agendamentos));
}

// Exibir agendamentos salvos na página
function exibirAgendamentosNaPagina() {
  const agendamentos = carregarAgendamentos();
  const lista = document.getElementById("lista-agendamentos");
  
  console.log('Exibindo agendamentos:', agendamentos); // Debug
  
  if (!lista) {
    console.error('Elemento lista-agendamentos não encontrado!');
    return;
  }
  
  if (agendamentos.length === 0) {
    lista.innerHTML = '<p style="color: #9ca3af; font-size: 1.1rem;">Nenhum agendamento realizado ainda.</p>';
    return;
  }
  
  lista.innerHTML = agendamentos.map(ag => `
    <div class="card">
      <h4>${ag.nome}</h4>
      <p><strong>📧 Email:</strong> ${ag.email}</p>
      <p><strong>👨‍⚕️ Profissional:</strong> ${ag.profissional.nome}</p>
      <p><strong>🎯 Especialidade:</strong> ${ag.profissional.especialidade}</p>
      <p><strong>📅 Data:</strong> ${new Date(ag.data).toLocaleDateString('pt-BR')}</p>
      <p><strong>🕐 Horário:</strong> ${ag.hora}</p>
      <p><strong>💰 Valor:</strong> R$ ${ag.profissional.valor}</p>
      ${ag.observacoes ? `<p><strong>📝 Observações:</strong> ${ag.observacoes}</p>` : ''}
      <button onclick="cancelarAgendamento(${ag.id})" class="botao botao-cancelar" style="background: #ef4444; margin-top: 1rem; width: 100%;">
        Cancelar Agendamento
      </button>
    </div>
  `).join('');
}

// Cancelar um agendamento específico
function cancelarAgendamento(id) {
  if (confirm('Tem certeza que deseja cancelar este agendamento?')) {
    let agendamentos = carregarAgendamentos();
    agendamentos = agendamentos.filter(ag => ag.id !== id);
    localStorage.setItem('agendamentos', JSON.stringify(agendamentos));
    exibirAgendamentosNaPagina();
    
    // Mensagem de confirmação
    const mensagem = document.getElementById("mensagem-agendamentos");
    if (mensagem) {
      mensagem.textContent = '✅ Agendamento cancelado com sucesso!';
      mensagem.style.color = '#10b981';
      setTimeout(() => {
        mensagem.textContent = '';
      }, 3000);
    }
  }
}

// Limpar todos os agendamentos
function limparTodosAgendamentos() {
  if (confirm('Tem certeza que deseja cancelar TODOS os agendamentos?')) {
    localStorage.removeItem('agendamentos');
    exibirAgendamentosNaPagina();
    
    const mensagem = document.getElementById("mensagem-agendamentos");
    if (mensagem) {
      mensagem.textContent = '✅ Todos os agendamentos foram cancelados!';
      mensagem.style.color = '#10b981';
      setTimeout(() => {
        mensagem.textContent = '';
      }, 3000);
    }
  }
}

// Aguarda o DOM estar completamente carregado antes de executar
document.addEventListener('DOMContentLoaded', function() {
  // Inicializa a página
  carregarProfissionais();
  exibirAgendamentosNaPagina();
  
  // Formulário com persistência
  const form = document.getElementById("form-agendamento");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const dados = Object.fromEntries(new FormData(e.target).entries());
      
      const agendamento = {
        id: Date.now(),
        nome: dados.nome,
        email: dados.email,
        profissional: profissionais[dados.profissional],
        data: dados.data,
        hora: dados.hora,
        observacoes: dados.observacoes || '',
        dataCriacao: new Date().toISOString()
      };
      
      salvarAgendamento(agendamento);
      
      const mensagem = document.getElementById("mensagem");
      mensagem.textContent = `✅ Sessão agendada com ${profissionais[dados.profissional].nome} em ${dados.data} às ${dados.hora}.`;
      mensagem.style.color = '#10b981';
      
      e.target.reset();
      
      // Atualiza a lista de agendamentos
      exibirAgendamentosNaPagina();
      
      // Rola suavemente até a seção de agendamentos
      setTimeout(() => {
        const meusAgendamentos = document.getElementById('meus-agendamentos');
        if (meusAgendamentos) {
          meusAgendamentos.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
      
      console.log('Agendamento salvo:', agendamento);
    });
  }
});
