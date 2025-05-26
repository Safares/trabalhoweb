document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('agendamentoForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Captura os dados do formulário
      const dados = {
        nome: form.querySelector('input[placeholder="Nome Completo"]').value,
        matricula: form.querySelector('input[placeholder="Matrícula"]').value,
        setor: form.querySelector('input[placeholder="Setor"]').value,
        diretoria: form.querySelector('select').value,
        ramal: form.querySelector('input[placeholder="Ramal"]').value,
        local: form.querySelector('input[placeholder="Local da Reunião"]').value,
        data: form.querySelector('input[type="date"]').value,
        horaInicio: form.querySelectorAll('select')[1].value,
        horaFim: form.querySelectorAll('select')[2].value,
        materiais: Array.from(form.querySelectorAll('input[type="checkbox"]:checked')).map(el => el.value)
      };

      // Salva no localStorage (simula persistência)
      localStorage.setItem('agendamento', JSON.stringify(dados));

      alert('Agendamento salvo com sucesso! (Simulação com localStorage)');
      form.reset();
    });
  }
});
