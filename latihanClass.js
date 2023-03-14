class bankAccount {
    nomorRekening;
    saldo ;
    setMenyimpanNomorRekening (nomorRekening){
    this.nomorRekening=nomorRekening
    }
    setMenyimpanSaldo (saldo){
    this.saldo = saldo
    }
    deposit (){
        let nomorRekening =123456
        let setorUang =1000
        let deposit=0
        deposit = this.saldo +setorUang
           
        return deposit;
        
    }
    
    
    tarikSaldo(){
        let nomorRekening =123456
        let ambilUang =1000
        let tarikSaldo
    
           tarikSaldo = this.deposit() -ambilUang
           console.log(this.deposit())
        return tarikSaldo;
    
    }
    mengecekSaldo(){
       

           this.mengecekSaldo = this.tarikSaldo()
    
        
        return this.mengecekSaldo;
    }
    }
    const atm1 = new bankAccount()
    atm1.setMenyimpanNomorRekening (123456)
    atm1.setMenyimpanSaldo (1000000)
    
    const atm1deposit =atm1.deposit();
    const atm1tarikSaldo =atm1.tarikSaldo();
    const atm1mengecekSaldo= atm1.mengecekSaldo()
    
    console.log ("deposit =",atm1deposit)
    console.log ("tarikSaldo =",atm1tarikSaldo)
    console.log ("mengecekSaldo =",atm1mengecekSaldo)


    const atm2 = new bankAccount()
    atm2.setMenyimpanNomorRekening (123456)
    atm2.setMenyimpanSaldo (5000000)
    
    const atm2deposit =atm2.deposit();
    const atm2tarikSaldo =atm2.tarikSaldo();
    const atm2mengecekSaldo= atm2.mengecekSaldo()
    
    console.log ("deposit =",atm2deposit)
    console.log ("tarikSaldo =",atm2tarikSaldo)
    console.log ("mengecekSaldo =",atm2mengecekSaldo)
    
    const atm3 = new bankAccount()
    atm3.setMenyimpanNomorRekening (123456)
    atm3.setMenyimpanSaldo (4000000)
    
    const atm3deposit =atm3.deposit();
    const atm3tarikSaldo =atm3.tarikSaldo();
    const atm3mengecekSaldo= atm3.mengecekSaldo()
    
    console.log ("deposit =",atm3deposit)
    console.log ("tarikSaldo =",atm3tarikSaldo)
    console.log ("mengecekSaldo =",atm3mengecekSaldo)
    