
    function mascaraMutuario(o,f){
        v_obj=o
        v_fun=f
        setTimeout('execmascara()',1)
    }

    function execmascara(){
        v_obj.value=v_fun(v_obj.value)
    }

    function cpfCnpj(v){
        v=v.replace(/\D/g,"")
        if (v.length <= 11) { //CPF
            v=v.replace(/(\d{3})(\d)/,"$1.$2")
            v=v.replace(/(\d{3})(\d)/,"$1.$2")
            v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
        } else { //CNPJ
            v=v.replace(/^(\d{2})(\d)/,"$1.$2")
            v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
            v=v.replace(/\.(\d{3})(\d)/,".$1/$2")
            v=v.replace(/(\d{4})(\d)/,"$1-$2")
        }
        return v
    }

    function mascara(o, f) {
        v_obj = o
        v_fun = f
        setTimeout("execmascara()", 1)
    }

    function execmascara() {
        v_obj.value = v_fun(v_obj.value)
    }
    
    function mtel(v) {
        v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
        v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
        v = v.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
        return v;
    }
    

    function mtelnum(v) {
        v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
        v = v.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
        return v;
    }

    function ddd(v) {
        v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
        return v;
    }

    function cep(v) {
        v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
        v = v.replace(/(\d)(\d{3})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
        return v;
    }

    function rg(v) {
        v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
        v = v.replace(/(\d)(\d{1})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
        return v;
    }

    function money(v) {
        v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
        v = v.replace(/(\d)(\d{2})$/, "$1,$2"); //Coloca hífen entre o quarto e o quinto dígitos
        return v;
    }

    function sonumeros(v){
        v = v.replace(/\D/g, "");
        return v;
    }

    function id(el) {
        return document.getElementById(el);
    }
    
    function validarEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
      }

    window.onload = function(){
        id('uc').onkeyup = function(){
            mascara( this , sonumeros );
        }

        //id('rg').onkeyup = function(){
        //    mascara( this, rg );
        //}

        id('cpf').onkeyup = function(){
            mascaraMutuario( this, cpfCnpj );
        }
        id('rg').onkeyup = function(){
            mascaraMutuario( this, rg );
        }
        id('cpf_paciente').onkeyup = function(){
            mascaraMutuario( this, cpfCnpj );
        }
        id('rg_paciente').onkeyup = function(){
            mascaraMutuario( this, rg );
        }
        id('cep').onkeyup = function(){
            mascaraMutuario( this, cep );
        }
        id('tel_contato_ddd').onkeyup = function(){
            mascara(this,sonumeros);
        }
        id('tel_contato_ddd_2').onkeyup = function(){
            mascara(this,sonumeros);
        }
        id('tel_contato_num').onkeyup = function(){
            mascara(this,mtelnum);
        }
        id('tel_contato_num_2').onkeyup = function(){
            mascara(this,mtelnum);
        }
        id('valor_renda').onkeyup = function(){
            mascara(this,money);
        }
    }
   