// Lista simulada de profissionais (dados estáticos que serão exibidos na tela)
const profissionais = [
  { nome: "Dra. Julia Clara", especialidade: "Terapia Cognitivo-Comportamental", valor: 200, foto: "cristiana.jpeg" }, // Psicóloga 1
  { nome: "Dr. maria", especialidade: "Psicanálise", valor: 250, foto: "maria.jpeg" }, // Psicólogo 2
  { nome: "Dra. Júlia Andrade", especialidade: "Terapia Familiar", valor: 220, foto: "julia.jpeg" }, // Psicóloga 3
  { nome: "Dr. Lucas Silva", especialidade: "Terapia Infantil", valor: 210, foto: "pedro.webp" }, // Psicólogo 4
];

// Função responsável por carregar e exibir os profissionais na página
function carregarProfissionais() {
  const lista = document.getElementById("lista-profissionais"); // Pega a div onde os cards dos profissionais serão adicionados
  const select = document.getElementById("select-profissional"); // Pega o select do formulário onde as opções de profissionais serão inseridas
  // Limpa conteúdo existente (evita duplicação se já houver conteúdo estático/fallback)
  if (lista) lista.innerHTML = "";
  // Reseta o select mantendo a primeira opção (placeholder)
  if (select) {
    const primeira = select.querySelector('option[value=""]');
    select.innerHTML = "";
    if (primeira) select.appendChild(primeira);
  }

  // Percorre o array 'profissionais'
  profissionais.forEach((p, i) => {
    // Cria dinamicamente um elemento <div> para cada profissional
    const card = document.createElement("div");
    card.classList.add("card"); // Adiciona a classe CSS "card" para estilização

    // Define o conteúdo interno do card (inclui imagem, nome, especialidade e valor)
    card.innerHTML = `
      ${p.foto ? `<img src="${p.foto}" alt="${p.nome}" class="card-img" onerror="this.onerror=null;this.src='data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 140 140%27><rect width=%27100%25%27 height=%27100%25%27 fill=%27%23e6e6e6%27/><text x=%2750%25%27 y=%2750%25%27 dy=%27.35em%27 text-anchor=%27middle%27 font-family=%27Arial%27 font-size=%2714%27 fill=%27%23666%27>Sem%20imagem</text></svg>'">` : ''}
      <h4>${p.nome}</h4>
      <p>${p.especialidade}</p>
      <span>💰 R$ ${p.valor}</span>
    `;

    // Adiciona o card dentro da div 'lista-profissionais'
    lista.appendChild(card);

    // Cria uma nova <option> para o <select> do formulário
    const opt = document.createElement("option");
    opt.value = i; // Define o valor da opção como o índice do profissional (0, 1, 2, ...)
    opt.textContent = `${p.nome} — ${p.especialidade}`; // Define o texto que aparecerá no menu suspenso
    select.appendChild(opt); // Adiciona a opção dentro do <select>
  });
}

// Captura o formulário de agendamento pelo ID e adiciona um evento de "submit"
document.getElementById("form-agendamento").addEventListener("submit", (e) => {
  e.preventDefault(); // Impede o comportamento padrão de recarregar a página ao enviar o formulário

  // Coleta os dados do formulário e os transforma em um objeto JavaScript
  const dados = Object.fromEntries(new FormData(e.target).entries());

  // Seleciona o elemento onde a mensagem de confirmação será exibida
  const mensagem = document.getElementById("mensagem");

  // Exibe a mensagem de sucesso personalizada no parágrafo com id="mensagem"
  mensagem.textContent = `✅ Sessão agendada com ${profissionais[dados.profissional].nome} em ${dados.data} às ${dados.hora}.`;

  // Limpa todos os campos do formulário após o envio
  e.target.reset();
});

// Chama a função ao carregar o site, para preencher os profissionais automaticamente
carregarProfissionais();
