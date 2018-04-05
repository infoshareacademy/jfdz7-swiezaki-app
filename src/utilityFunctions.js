export const getBrutto = (netto) => {
    const VATRate = 23;
    const nettoParsed = parseFloat(netto);
    const VAT = (VATRate/100) * nettoParsed;
    return (nettoParsed + VAT).toFixed(2);
};

export const shortenName = (name, maxNameLength) => {
    return name.length > maxNameLength ? `${ name.slice(0, maxNameLength - 3) }...` : name
};