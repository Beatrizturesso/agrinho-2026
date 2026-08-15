/* =========================================================
   AGROSMART - AGRINHO 2026
   Projeto: Beatriz Turesso Staron
   Colégio Estadual Dom Pedro II
   Professor: Luiz Alessandro
========================================================= */


/* =========================================================
   SIMULADOR DE UMIDADE DO SOLO
========================================================= */

const controleUmidade = document.getElementById("umidade");
const valorUmidade = document.getElementById("valorUmidade");
const botaoAnalisar = document.getElementById("btnAnalisar");

const resultado = document.getElementById("resultado");
const resultadoIcone = document.getElementById("resultadoIcone");
const resultadoTitulo = document.getElementById("resultadoTitulo");
const resultadoTexto = document.getElementById("resultadoTexto");


/*
   Atualiza o número mostrado enquanto
   o usuário movimenta o controle.
*/

if (controleUmidade && valorUmidade) {

    controleUmidade.addEventListener("input", function () {

        valorUmidade.textContent = controleUmidade.value;

    });

}


/*
   Analisa a umidade escolhida.
*/

if (botaoAnalisar) {

    botaoAnalisar.addEventListener("click", function () {

        const umidade = Number(controleUmidade.value);


        /*
           Umidade muito baixa:
           o sistema recomenda atenção
           e possibilidade de irrigação.
        */

        if (umidade < 30) {

            resultadoIcone.textContent = "💧";

            resultadoTitulo.textContent =
                "Umidade baixa";

            resultadoTexto.textContent =
                "O solo apresenta um nível baixo de umidade. " +
                "A proposta do sistema é indicar atenção " +
                "à necessidade de irrigação.";

        }


        /*
           Umidade entre 30% e 60%:
           condição intermediária.
        */

        else if (umidade < 60) {

            resultadoIcone.textContent = "🌱";

            resultadoTitulo.textContent =
                "Umidade adequada";

            resultadoTexto.textContent =
                "O nível de umidade está em uma faixa " +
                "intermediária. A recomendação é continuar " +
                "monitorando as condições do solo.";

        }


        /*
           Umidade acima de 60%:
           o sistema indica que não há necessidade
           de aumentar a irrigação naquele momento.
        */

        else {

            resultadoIcone.textContent = "🌧️";

            resultadoTitulo.textContent =
                "Umidade alta";

            resultadoTexto.textContent =
                "O solo apresenta um nível elevado de umidade. " +
                "A proposta é evitar uma irrigação desnecessária " +
                "e continuar acompanhando os dados.";

        }

    });

}


/* =========================================================
   QUIZ
========================================================= */

const alternativas =
    document.querySelectorAll(".alternativa");

const resultadoQuiz =
    document.getElementById("resultadoQuiz");


/*
   Verifica a resposta escolhida pelo usuário.
*/

alternativas.forEach(function (alternativa) {

    alternativa.addEventListener("click", function () {

        const resposta =
            alternativa.getAttribute("data-resposta");


        /*
           Remove qualquer marcação anterior.
        */

        alternativas.forEach(function (item) {

            item.style.borderColor = "";
            item.style.backgroundColor = "";

        });


        /*
           Verifica se a resposta está correta.
        */

        if (resposta === "correta") {

            alternativa.style.borderColor =
                "#28734a";

            alternativa.style.backgroundColor =
                "#dff0df";

            resultadoQuiz.textContent =
                "✅ Correto! O AgroSmart busca utilizar " +
                "a tecnologia para auxiliar no uso consciente " +
                "da água e no monitoramento do solo.";

        }

        else {

            alternativa.style.borderColor =
                "#b65c4c";

            alternativa.style.backgroundColor =
                "#f8e2dd";

            resultadoQuiz.textContent =
                "❌ Essa não é a resposta. " +
                "Pense no principal objetivo do projeto: " +
                "usar tecnologia para ajudar no monitoramento " +
                "do solo e evitar desperdícios.";

        }

    });

});


/* =========================================================
   ANIMAÇÃO SUAVE AO ENTRAR NAS SEÇÕES
========================================================= */

const elementosAnimados =
    document.querySelectorAll(
        ".card-tema, " +
        ".problema-card, " +
        ".passo, " +
        ".iot-card, " +
        ".impacto, " +
        ".desafio"
    );


/*
   Deixa os elementos preparados para
   uma pequena animação de entrada.
*/

elementosAnimados.forEach(function (elemento) {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(20px)";
    elemento.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

});


/*
   Observa quando os elementos aparecem
   na tela.
*/

const observador =
    new IntersectionObserver(function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {

                entrada.target.style.opacity = "1";
                entrada.target.style.transform =
                    "translateY(0)";

                observador.unobserve(entrada.target);

            }

        });

    }, {

        threshold: 0.15

    });


elementosAnimados.forEach(function (elemento) {

    observador.observe(elemento);

});


/* =========================================================
   MENU - DESTAQUE DA SEÇÃO ATUAL
========================================================= */

const linksMenu =
    document.querySelectorAll(".menu a");


linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {

        linksMenu.forEach(function (item) {

            item.style.color = "";

        });

        link.style.color = "#5fa66d";

    });

});


/* =========================================================
   MENSAGEM NO CONSOLE
========================================================= */

console.log(
    "🌱 AgroSmart carregado com sucesso!"
);

console.log(
    "Projeto Agrinho 2026 - " +
    "Beatriz Turesso Staron"
);
