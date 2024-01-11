document.addEventListener("DOMContentLoaded", function() {
    const ranges = document.querySelectorAll("input[type='range']");
    
    ranges.forEach(function(range) {
        const spanId = "valorRange" + range.id.charAt(5).toUpperCase() + range.id.slice(6);
        const span = document.getElementById(spanId);

        range.addEventListener("input", function() {
            span.textContent = range.value;
        });
    });
});