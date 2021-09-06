
 const cpfMask = (cpf) => {
    return cpf
        .replace(/\D/g, '') 
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');
}


const removeCpfMask = (cpf) => cpf.replace(/\D/g, '');

export  {
    cpfMask,
    removeCpfMask
};