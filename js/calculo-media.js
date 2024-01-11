document.addEventListener("DOMContentLoaded", function() {
    const ranges = document.querySelectorAll("input[type='range']");
    const submitButton = document.querySelector(".btn");

    ranges.forEach(function(range) {
        const spanId = "valorRange" + range.id.charAt(5).toUpperCase() + range.id.slice(6);
        const span = document.getElementById(spanId);

        range.addEventListener("input", function() {
            span.textContent = range.value;
            calcularMedias();
        });
    });

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        calcularMedias();
    });
});

function calcularMedias() {
    const planejamentoValues = obterValoresDosSliders("Planejamento");
    const execucaoValues = obterValoresDosSliders("Execução");
    const organizacaoValues = obterValoresDosSliders("Organizacao");

    const mediaPlanejamento = calcularMedia(planejamentoValues);
    const mediaExecucao = calcularMedia(execucaoValues);
    const mediaOrganizacao = calcularMedia(organizacaoValues);

    const mediaGeral = (mediaPlanejamento + mediaExecucao + mediaOrganizacao) / 3;

    exibirResultado("mediaPlanejamento", mediaPlanejamento);
    exibirResultado("mediaExecucao", mediaExecucao);
    exibirResultado("mediaOrganizacao", mediaOrganizacao);
    exibirResultado("mediaGeral", mediaGeral);
}

function obterValoresDosSliders(categoria) {
    const slidersDaCategoria = document.querySelectorAll(`.${categoria} input[type='range']`);
    return Array.from(slidersDaCategoria).map(slider => parseInt(slider.value, 10));
}


function calcularMedia(valores) {
    const soma = valores.reduce((total, valor) => total + valor, 0);
    return valores.length > 0 ? soma / valores.length : 0;
}

function exibirResultado(id, valor) {
    const resultadoSpan = document.getElementById(id);
    if (resultadoSpan) {
        resultadoSpan.textContent = valor.toFixed(2);
        resultadoSpan.classList.add('mostrar');
    }
}
