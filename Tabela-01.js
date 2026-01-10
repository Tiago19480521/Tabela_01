// Tabelas em JavaScript

// Definir dados:
  const dados = [
    { cidade: 'Kolkhata', pais: 'Índia', continente: 'Ásia' },
    { cidade: 'Nairobi', pais: 'Kenya', continente: 'África' },
    { cidade: 'Lima', pais: 'Peru', continente: 'América do Sul' }, 
    { cidade: 'Tashkent', pais: 'Uzbekistão', continente: 'Ásia' },
    { cidade: 'Tegucigalpa', pais: 'Honduras', continente: 'América Central' },
    { cidade: 'Calgary', pais: 'Canadá', continente: 'América do Norte' },
  ]

  // Criar uma tabela:
  const tabela = document.createElement("table")

  // Acrescentar cabeçalho:
  const headers = ['Cidade', 'País', 'Continente']
  const headerRow = document.createElement("tr")

  headers.forEach(elem => {
    const head = document.createElement("th")
    head.textContent = elem
    headerRow.appendChild(head)
  })
  tabela.appendChild(headerRow)

  // Acrescentar dados:
  dados.forEach(item => {
    const row = document.createElement("tr")
    Object.values(item).forEach(value => {
      const cell = document.createElement("td")
      cell.textContent = value
      row.appendChild(cell)
    })
    tabela.appendChild(row)
  })

  // Inserir a tabela no DOM:
  document.getElementById("div_tabela").appendChild(tabela)

