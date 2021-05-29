exports.cekKapital = async(str)=>{
    return !/[a-z]/.test(str) && /[A-Z]/.test(str);
}

exports.encodeMorse = async(kalimat)=>{
    let hasil = '';
    const karakter = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const karakterKapital = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    const morse = ['.-','-...','-.-.','-..','.','..-.','-.','....','..','.--','-.-','.-..','--','-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..'];
    kalimat = [...kalimat];

    if(kalimat.length <= 0) return [{KIND:'EMPTY'},null];
    await Promise.all(kalimat.map(item=>{
        let ketemu = false;
        
        karakter.map((kar,index)=> {
            if(kar==item){
                ketemu = true;
                hasil += `${morse[index]}:`;
            }
        });

        if(!ketemu){
            karakterKapital.map((kar,index)=>{
                if(kar==item) hasil += `${morse[index]}:`;
            })
        }
    }));

    return [null,hasil];
}

exports.decodeMorse = async(kalimat)=>{
    if(!kalimat) return [{KIND:'UNESCAPED_STRING'},null];
    let hasil = '';
    const karakter = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const morse = ['.-','-...','-.-.','-..','.','..-.','--.','....','..','.--','-.-','.-..','--','-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..'];
    kalimat = kalimat.split(':');

    await Promise.all(kalimat.map(item=>{
        morse.map((kar,index)=>{
            if(kar==item) hasil += karakter[index];
        })
    }))

    return [null,hasil];
}