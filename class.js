
//deklarasi class 
class mobil{
    warna="merah"
    merk ="toyota"
    tipe ="supra"
    ukuran = [1000,2000,3000]
    //function
    getDataMobil (){
        const obj ={
            warna:this.warna,
            merk :this.merk,
            tipe :this.tipe,
            ukuran:this.ukuran,
        }
        return obj
    }

    //procedure
    //bisa merubah data dengan parameter baru 
    setDataMobil (warna,merk,tipe,ukuran){
        this.warna= warna;
        this.merk = merk;
        this.tipe = tipe;
        this.ukuran = ukuran;
    }
}
// instansiasi sebuah kelas
//instansiasai = pembuatan object dari sebuah class
// 
// class nya mobil m nya sebuah obejct dari class
// function
const m = new mobil()
console.log (m);
let dataMobil=m.getDataMobil();
console.log (dataMobil)

//procedure
m.setDataMobil("hijau","suzuki","ertiga",[1200,1300,1400])
dataMobil =m.getDataMobil();
console.log (dataMobil)