const selectors = {
    buttons: {
        downloadAsPdf: 'download-pdf',
    },
    containers: {
        mainContainer: 'main-container',
    },
};

const html2PdfObject = {
    generatePdfEvent: () => {
        var opt = {
            filename: 'Stan Razvan Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            enableLinks: true,
            pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        };

        var mainContainer = document.getElementById(
            selectors.containers.mainContainer
        );
        html2pdf().set(opt).from(mainContainer).save();
    },
};

window.addEventListener('DOMContentLoaded', function () {
    registerHtml2PdfEventListeners(window.document);
});

function registerHtml2PdfEventListeners(document) {
    document
        .getElementById(selectors.buttons.downloadAsPdf)
        .addEventListener('click', html2PdfObject.generatePdfEvent);
}
