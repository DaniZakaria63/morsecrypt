# Morsecrypt

Adalah library NodeJS untuk enkripsi dan deskripsi Sandi Morse.

## Instalation

Untuk penginstallan cukup menggunakan snytax

```bash
npm install morsecrypt
```

## Cara Penggunaan

Morsecrypt cocok untuk mengkonversi password karena tingkat penerjemah ulang yang sulit.

### Enkripsi

Untuk Enkripsi dapat menggunakan syntax

```javascript
    // Cara Async 
    const [err,hasil] = await encodeMorse(pass);
    if(err) console.log(`ERROR : ${err.KIND}`});
    console.log(`HASIL : ${hasil}`});

    //Atau dengan callback
    await encodeMorse(pass).then(([err,hasil])=>{
        if(err) console.log(`ERROR : ${err.KIND}`});
        console.log(`HASIL : ${hasil}`});
    });
```

### Deskripsi

Untuk deksripsi dapat menggunakan syntax

```javascript
    //Dengan callback
    await decodeMorse(pass).then(([err,hasil])=>{
        if(err) console.log({RESPONSE:`ERROR : ${err.KIND}`});
        console.log({RESPONSE:hasil});
    });

    //Dengan Promise
    const [err,hasil] = await decodeMorse(pass);
    if(err) console.log({RESPONSE:`ERROR : ${err.KIND}`});
    console.log({RESPONSE:hasil});
```

## Penjelasan

Masing-masing method menggunakan parameter berupa string yang akan dikonnversi ataupun yang akan dideskripsi.

```javascript
    /**
     * Variabel kalimat berupa string yang akan dikonversi ataupun yang * akan dideskripsi
     */

    await encodeMorse(kalimat); // contoh: kisamatachi
    await decodeMorse(kalimat); // contoh: -.-:..:...:.-:--:.-:-:.-:-.-.:....:..:
```

Ada beberapa kondisi yang harus diperhatikan untuk menggunakan library ini, antara lain:

1. Pastikan kalimat/string tidak kosong.
2. Pastikan agar tidak ada spasi dalam kalimat/string.
3. Pastikan untuk tidak menggunakan angka.
4. Pastikan tidak ada huruf kapital.

## Contoh

Berikut adalah contoh penggunaan dalam routing menggunakan Express.JS

```javascript

router.get('/encode.:PASS',async(req,res,next)=>{
    const pass = req.params.PASS;
    if(!pass) return res.json({RESPONSE:'Parameter Tidak Lengkap'});
    if(pass.includes(" ")) return res.json({RESPONSE:'Tidak Boleh Ada Spasi'});
    if(/\d/.test(pass)) return res.json({RESPONSE:'Tidak Boleh Berupa Nomor'});
    if(await cekKapital(pass))return res.json({RESPONSE:'Tidak Boleh Huruf Kapital'});

    const [err,hasil] = await encodeMorse(pass);
    if(err) return res.json({RESPONSE:`ERROR : ${err.KIND}`});
    return res.json({RESPONSE:`HASIL : ${hasil}`});
})

```

## Contributing

Main Developer : [Dani Zakaria (GITLAB)](https://gitlab.com/DaniZakaria63)

[Dani Zakaria (GITHUB)](https://github.com/DaniZakaria63)

## License

[MIT](https://choosealicense.com/licenses/mit/)
