    let details = document.querySelector("div#elementDetails")
    let x = document.querySelector("i#x")
    const elementos = [
        { numeroAtomico: 1, simbolo: "H", nome: "Hidrogênio", massaAtomica: 1.008, tipo: "Não metal" },
        { numeroAtomico: 2, simbolo: "He", nome: "Hélio", massaAtomica: 4.0026, tipo: "Gás nobre" },
        { numeroAtomico: 3, simbolo: "Li", nome: "Lítio", massaAtomica: 6.94, tipo: "Metal alcalino" },
        { numeroAtomico: 4, simbolo: "Be", nome: "Berílio", massaAtomica: 9.0122, tipo: "Metal alcalino-terroso" },
        { numeroAtomico: 5, simbolo: "B", nome: "Boro", massaAtomica: 10.81, tipo: "Sem metal" },
        { numeroAtomico: 6, simbolo: "C", nome: "Carbono", massaAtomica: 12.011, tipo: "Não metal" },
        { numeroAtomico: 7, simbolo: "N", nome: "Nitrogênio", massaAtomica: 14.007, tipo: "Não metal" },
        { numeroAtomico: 8, simbolo: "O", nome: "Oxigênio", massaAtomica: 15.999, tipo: "Não metal" },
        { numeroAtomico: 9, simbolo: "F", nome: "Flúor", massaAtomica: 18.998, tipo: "Halogênio" },
        { numeroAtomico: 10, simbolo: "Ne", nome: "Neônio", massaAtomica: 20.180, tipo: "Gás nobre" },
        { numeroAtomico: 11, simbolo: "Na", nome: "Sódio", massaAtomica: 22.990, tipo: "Metal alcalino" },
        { numeroAtomico: 12, simbolo: "Mg", nome: "Magnésio", massaAtomica: 24.305, tipo: "Metal alcalino-terroso" },
        { numeroAtomico: 13, simbolo: "Al", nome: "Alumínio", massaAtomica: 26.982, tipo: "Metal do bloco p" },
        { numeroAtomico: 14, simbolo: "Si", nome: "Silício", massaAtomica: 28.085, tipo: "Sem metal" },
        { numeroAtomico: 15, simbolo: "P", nome: "Fósforo", massaAtomica: 30.974, tipo: "Não metal" },
        { numeroAtomico: 16, simbolo: "S", nome: "Enxofre", massaAtomica: 32.06, tipo: "Não metal" },
        { numeroAtomico: 17, simbolo: "Cl", nome: "Cloro", massaAtomica: 35.45, tipo: "Halogênio" },
        { numeroAtomico: 18, simbolo: "Ar", nome: "Argônio", massaAtomica: 39.948, tipo: "Gás nobre" },
        { numeroAtomico: 19, simbolo: "K", nome: "Potássio", massaAtomica: 39.098, tipo: "Metal alcalino" },
        { numeroAtomico: 20, simbolo: "Ca", nome: "Cálcio", massaAtomica: 40.078, tipo: "Metal alcalino-terroso" },
        { numeroAtomico: 21, simbolo: "Sc", nome: "Escândio", massaAtomica: 44.956, tipo: "Metal de transição" },
        { numeroAtomico: 22, simbolo: "Ti", nome: "Titânio", massaAtomica: 47.867, tipo: "Metal de transição" },
        { numeroAtomico: 23, simbolo: "V", nome: "Vanádio", massaAtomica: 50.942, tipo: "Metal de transição" },
        { numeroAtomico: 24, simbolo: "Cr", nome: "Cromo", massaAtomica: 51.996, tipo: "Metal de transição" },
        { numeroAtomico: 25, simbolo: "Mn", nome: "Manganês", massaAtomica: 54.938, tipo: "Metal de transição" },
        { numeroAtomico: 26, simbolo: "Fe", nome: "Ferro", massaAtomica: 55.845, tipo: "Metal de transição" },
        { numeroAtomico: 26, simbolo: "Fe", nome: "Ferro", massaAtomica: 55.845, tipo: "Metal de transição" },
        { numeroAtomico: 27, simbolo: "Co", nome: "Cobalto", massaAtomica: 58.933, tipo: "Metal de transição" },
        { numeroAtomico: 28, simbolo: "Ni", nome: "Níquel", massaAtomica: 58.693, tipo: "Metal de transição" },
        { numeroAtomico: 29, simbolo: "Cu", nome: "Cobre", massaAtomica: 63.546, tipo: "Metal de transição" },
        { numeroAtomico: 30, simbolo: "Zn", nome: "Zinco", massaAtomica: 65.38, tipo: "Metal de transição" },
        { numeroAtomico: 31, simbolo: "Ga", nome: "Gálio", massaAtomica: 69.723, tipo: "Metal do bloco p" },
        { numeroAtomico: 32, simbolo: "Ge", nome: "Germânio", massaAtomica: 72.63, tipo: "Sem metal" },
        { numeroAtomico: 33, simbolo: "As", nome: "Arsênio", massaAtomica: 74.922, tipo: "Sem metal" },
        { numeroAtomico: 34, simbolo: "Se", nome: "Selênio", massaAtomica: 78.971, tipo: "Não metal" },
        { numeroAtomico: 35, simbolo: "Br", nome: "Bromo", massaAtomica: 79.904, tipo: "Halogênio" },
        { numeroAtomico: 36, simbolo: "Kr", nome: "Criptônio", massaAtomica: 83.798, tipo: "Gás nobre" },
        { numeroAtomico: 37, simbolo: "Rb", nome: "Rubídio", massaAtomica: 85.468, tipo: "Metal alcalino" },
        { numeroAtomico: 38, simbolo: "Sr", nome: "Estrôncio", massaAtomica: 87.62, tipo: "Metal alcalino-terroso" },
        { numeroAtomico: 39, simbolo: "Y", nome: "Ítrio", massaAtomica: 88.906, tipo: "Metal de transição" },
        { numeroAtomico: 40, simbolo: "Zr", nome: "Zircônio", massaAtomica: 91.224, tipo: "Metal de transição" },
        { numeroAtomico: 41, simbolo: "Nb", nome: "Nióbio", massaAtomica: 92.906, tipo: "Metal de transição" },
        { numeroAtomico: 42, simbolo: "Mo", nome: "Molibdênio", massaAtomica: 95.95, tipo: "Metal de transição" },
        { numeroAtomico: 43, simbolo: "Tc", nome: "Tecnécio", massaAtomica: 98, tipo: "Metal de transição" },
        { numeroAtomico: 44, simbolo: "Ru", nome: "Rutênio", massaAtomica: 101.07, tipo: "Metal de transição" },
        { numeroAtomico: 45, simbolo: "Rh", nome: "Ródio", massaAtomica: 102.91, tipo: "Metal de transição" },
        { numeroAtomico: 46, simbolo: "Pd", nome: "Paládio", massaAtomica: 106.42, tipo: "Metal de transição" },
        { numeroAtomico: 47, simbolo: "Ag", nome: "Prata", massaAtomica: 107.87, tipo: "Metal de transição" },
        { numeroAtomico: 48, simbolo: "Cd", nome: "Cádmio", massaAtomica: 112.41, tipo: "Metal de transição" },
        { numeroAtomico: 49, simbolo: "In", nome: "Índio", massaAtomica: 114.82, tipo: "Metal do bloco p" },
        { numeroAtomico: 50, simbolo: "Sn", nome: "Estanho", massaAtomica: 118.71, tipo: "Metal do bloco p" },
        { numeroAtomico: 51, simbolo: "Sb", nome: "Antimônio", massaAtomica: 121.76, tipo: "Metal do bloco p" },
        { numeroAtomico: 52, simbolo: "Te", nome: "Telúrio", massaAtomica: 127.6, tipo: "Sem metal" },
        { numeroAtomico: 53, simbolo: "I", nome: "Iodo", massaAtomica: 126.9, tipo: "Halogênio" },
        { numeroAtomico: 54, simbolo: "Xe", nome: "Xenônio", massaAtomica: 131.29, tipo: "Gás nobre" },
        { numeroAtomico: 55, simbolo: "Cs", nome: "Césio", massaAtomica: 132.91, tipo: "Metal alcalino" },
        { numeroAtomico: 56, simbolo: "Ba", nome: "Bário", massaAtomica: 137.33, tipo: "Metal alcalino-terroso" },
        { numeroAtomico: 57, simbolo: "La", nome: "Lantânio", massaAtomica: 138.91, tipo: "Lantanídeo" },
        { numeroAtomico: 58, simbolo: "Ce", nome: "Cério", massaAtomica: 140.12, tipo: "Lantanídeo" },
        { numeroAtomico: 59, simbolo: "Pr", nome: "Praseodímio", massaAtomica: 140.91, tipo: "Lantanídeo" },
        { numeroAtomico: 60, simbolo: "Nd", nome: "Neodímio", massaAtomica: 144.24, tipo: "Lantanídeo" },
        { numeroAtomico: 61, simbolo: "Pm", nome: "Promécio", massaAtomica: 145, tipo: "Lantanídeo" },
        { numeroAtomico: 62, simbolo: "Sm", nome: "Samário", massaAtomica: 150.36, tipo: "Lantanídeo" },
        { numeroAtomico: 63, simbolo: "Eu", nome: "Európio", massaAtomica: 151.96, tipo: "Lantanídeo" },
        { numeroAtomico: 64, simbolo: "Gd", nome: "Gadolínio", massaAtomica: 157.25, tipo: "Lantanídeo" },
        { numeroAtomico: 65, simbolo: "Tb", nome: "Térbio", massaAtomica: 158.93, tipo: "Lantanídeo" },
        { numeroAtomico: 66, simbolo: "Dy", nome: "Disprósio", massaAtomica: 162.5, tipo: "Lantanídeo" },
        { numeroAtomico: 67, simbolo: "Ho", nome: "Hólmio", massaAtomica: 164.93, tipo: "Lantanídeo" },
        { numeroAtomico: 68, simbolo: "Er", nome: "Érbio", massaAtomica: 167.26, tipo: "Lantanídeo" },
        { numeroAtomico: 69, simbolo: "Tm", nome: "Túlio", massaAtomica: 168.93, tipo: "Lantanídeo" },
        { numeroAtomico: 70, simbolo: "Yb", nome: "Itérbio", massaAtomica: 173.05, tipo: "Lantanídeo" },
        { numeroAtomico: 71, simbolo: "Lu", nome: "Lutécio", massaAtomica: 174.97, tipo: "Lantanídeo" },
        { numeroAtomico: 72, simbolo: "Hf", nome: "Háfnio", massaAtomica: 178.49, tipo: "Metal de transição" },
        { numeroAtomico: 73, simbolo: "Ta", nome: "Tântalo", massaAtomica: 180.95, tipo: "Metal de transição" },
        { numeroAtomico: 74, simbolo: "W", nome: "Tungstênio", massaAtomica: 183.84, tipo: "Metal de transição" },
        { numeroAtomico: 75, simbolo: "Re", nome: "Rênio", massaAtomica: 186.21, tipo: "Metal de transição" },
        { numeroAtomico: 76, simbolo: "Os", nome: "Ósmio", massaAtomica: 190.23, tipo: "Metal de transição" },
        { numeroAtomico: 77, simbolo: "Ir", nome: "Irídio", massaAtomica: 192.22, tipo: "Metal de transição" },
        { numeroAtomico: 78, simbolo: "Pt", nome: "Platina", massaAtomica: 195.08, tipo: "Metal de transição" },
        { numeroAtomico: 79, simbolo: "Au", nome: "Ouro", massaAtomica: 196.97, tipo: "Metal de transição" },
        { numeroAtomico: 80, simbolo: "Hg", nome: "Mercúrio", massaAtomica: 200.59, tipo: "Metal de transição" },
        { numeroAtomico: 81, simbolo: "Tl", nome: "Tálio", massaAtomica: 204.38, tipo: "Metal do bloco p" },
        { numeroAtomico: 82, simbolo: "Pb", nome: "Chumbo", massaAtomica: 207.2, tipo: "Metal do bloco p" },
        { numeroAtomico: 83, simbolo: "Bi", nome: "Bismuto", massaAtomica: 208.98, tipo: "Metal do bloco p" },
        { numeroAtomico: 84, simbolo: "Po", nome: "Polônio", massaAtomica: 209, tipo: "Metal do bloco p" },
        { numeroAtomico: 85, simbolo: "At", nome: "Ástato", massaAtomica: 210, tipo: "Halogênio" },
        { numeroAtomico: 86, simbolo: "Rn", nome: "Radônio", massaAtomica: 222, tipo: "Gás nobre" },
        { numeroAtomico: 87, simbolo: "Fr", nome: "Frâncio", massaAtomica: 223, tipo: "Metal alcalino" },
        { numeroAtomico: 88, simbolo: "Ra", nome: "Rádio", massaAtomica: 226, tipo: "Metal alcalino-terroso" },
        { numeroAtomico: 89, simbolo: "Ac", nome: "Actínio", massaAtomica: 227, tipo: "Metal de transição" },
        { numeroAtomico: 90, simbolo: "Th", nome: "Tório", massaAtomica: 232.04, tipo: "Metal de transição" },
        { numeroAtomico: 91, simbolo: "Pa", nome: "Protactínio", massaAtomica: 231.04, tipo: "Metal de transição" },
        { numeroAtomico: 92, simbolo: "U", nome: "Urânio", massaAtomica: 238.03, tipo: "Metal de transição" },
        { numeroAtomico: 93, simbolo: "Np", nome: "Neptúnio", massaAtomica: 237, tipo: "Metal de transição" },
        { numeroAtomico: 94, simbolo: "Pu", nome: "Plutônio", massaAtomica: 244, tipo: "Metal de transição" },
        { numeroAtomico: 95, simbolo: "Am", nome: "Amerício", massaAtomica: 243, tipo: "Metal de transição" },
        { numeroAtomico: 96, simbolo: "Cm", nome: "Cúrio", massaAtomica: 247, tipo: "Metal de transição" },
        { numeroAtomico: 97, simbolo: "Bk", nome: "Berquélio", massaAtomica: 247, tipo: "Metal de transição" },
        { numeroAtomico: 98, simbolo: "Cf", nome: "Califórnio", massaAtomica: 251, tipo: "Metal de transição" },
        { numeroAtomico: 99, simbolo: "Es", nome: "Einstênio", massaAtomica: 252, tipo: "Metal de transição" },
        { numeroAtomico: 100, simbolo: "Fm", nome: "Férmio", massaAtomica: 257, tipo: "Metal de transição" },
        { numeroAtomico: 101, simbolo: "Md", nome: "Mendelévio", massaAtomica: 258, tipo: "Metal de transição" },
        { numeroAtomico: 102, simbolo: "No", nome: "Nobélio", massaAtomica: 259, tipo: "Metal de transição" },
        { numeroAtomico: 103, simbolo: "Lr", nome: "Laurêncio", massaAtomica: 266, tipo: "Metal de transição" },
        { numeroAtomico: 104, simbolo: "Rf", nome: "Rutherfórdio", massaAtomica: 267, tipo: "Metal de transição" },
        { numeroAtomico: 105, simbolo: "Db", nome: "Dúbnio", massaAtomica: 268, tipo: "Metal de transição" },
        { numeroAtomico: 106, simbolo: "Sg", nome: "Seabórgio", massaAtomica: 269, tipo: "Metal de transição" },
        { numeroAtomico: 107, simbolo: "Bh", nome: "Bóhrio", massaAtomica: 270, tipo: "Metal de transição" },
        { numeroAtomico: 108, simbolo: "Hs", nome: "Hássio", massaAtomica: 269, tipo: "Metal de transição" },
        { numeroAtomico: 109, simbolo: "Mt", nome: "Meitnério", massaAtomica: 278, tipo: "Metal de transição" },
        { numeroAtomico: 110, simbolo: "Ds", nome: "Darmstácio", massaAtomica: 281, tipo: "Metal de transição" },
        { numeroAtomico: 111, simbolo: "Rg", nome: "Roentgênio", massaAtomica: 282, tipo: "Metal de transição" },
        { numeroAtomico: 112, simbolo: "Cn", nome: "Copernício", massaAtomica: 285, tipo: "Metal de transição" },
        { numeroAtomico: 113, simbolo: "Nh", nome: "Nihônio", massaAtomica: 286, tipo: "Metal do bloco p" },
        { numeroAtomico: 114, simbolo: "Fl", nome: "Fleróvio", massaAtomica: 289, tipo: "Metal do bloco p" },
        { numeroAtomico: 115, simbolo: "Mc", nome: "Moscóvio", massaAtomica: 290, tipo: "Metal do bloco p" },
        { numeroAtomico: 116, simbolo: "Lv", nome: "Livermório", massaAtomica: 293, tipo: "Metal do bloco p" },
        { numeroAtomico: 117, simbolo: "Ts", nome: "Tenessino", massaAtomica: 294, tipo: "Metal do bloco p" },
        { numeroAtomico: 118, simbolo: "Og", nome: "Oganesônio", massaAtomica: 294, tipo: "Metal do bloco p" }
];

// Função para exibir detalhes do elemento
function exibirDetalhesElemento(elemento) {
    details.style.display = "block";
    document.getElementById('elementDetails').innerHTML = `
        <h2>${elemento.nome} (${elemento.simbolo})</h2>
        <p>Número Atômico: ${elemento.numeroAtomico}</p>
        <p>Massa Atômica: ${elemento.massaAtomica}</p>
        <p>Tipo: ${elemento.tipo}</p>
    `;
    x.style.display = "block"; // Exibir o ícone "x"
}

// Função para esconder detalhes do elemento
function esconderDetalhesElemento() {
    details.style.display = "none";
    x.style.display = "none"; // Esconder o ícone "x"
}

// Função para exibir elementos na grade
function exibirElementos() {
    const elementGrid = document.getElementById('elementGrid');
    elementGrid.innerHTML = '';
    elementos.forEach(elemento => {
        const elementDiv = document.createElement('div');
        elementDiv.classList.add('element');
        elementDiv.textContent = elemento.simbolo;
        elementDiv.addEventListener('click', () => exibirDetalhesElemento(elemento));
        elementGrid.appendChild(elementDiv);
    });
}

// Função para buscar elemento por símbolo ou nome
function buscarElemento(termo) {
    termo = termo.toLowerCase();
    const elementoEncontrado = elementos.find(elemento =>
        elemento.simbolo.toLowerCase() === termo || elemento.nome.toLowerCase() === termo
    );
    if (elementoEncontrado) {
        exibirDetalhesElemento(elementoEncontrado);
    } else {
        document.getElementById('elementDetails').innerHTML = '<p>Elemento não encontrado.</p>';
    }
}

// Event listener para pesquisa de elementos
document.getElementById('searchInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        buscarElemento(event.target.value);
    }
});

// Event listener para clicar no ícone "x" para esconder os detalhes
x.addEventListener('click', esconderDetalhesElemento);

// Carregar elementos ao carregar a página
window.onload = function() {
    exibirElementos();
};