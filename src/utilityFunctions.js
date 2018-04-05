export const getBrutto = (netto) => {
    const VATRate = 23;
    const nettoParsed = parseFloat(netto);
    const VAT = (VATRate/100) * nettoParsed;
    return (nettoParsed + VAT).toFixed(2);
};