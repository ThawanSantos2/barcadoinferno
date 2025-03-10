function baixarDocumento() {
    const link = document.createElement('a');
    link.href = 'Barca do Inferno.docx'; // Nome do arquivo que está no site
    link.download = 'Barca do Infero Roteiro.docx'; // Nome do arquivo ao baixar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
