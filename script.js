function baixarDocumento() {
    const link = document.createElement('a');
    link.href = 'UND3_1-ANEXO-II-A.pdf'; // Nome do arquivo que está no site
    link.download = 'UND3_1-ANEXO-II-A.pdf'; // Nome do arquivo ao baixar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
