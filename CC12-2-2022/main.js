//create function with a param dna
//use regex to get all T
//replace all T with U

function DNAtoRNA(dna){
    let rna = /T/ig;
    return dna.replace(rna, 'U');
}
DNAtoRNA("TGATT")