<!DOCTYPE html>
<html lang="pt-BR">
<?php
    require_once __DIR__.'/src/routes.php';
?>
<head>
    <title>CashIn - Login</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Fabio Henrique Silva Furtado">
    <meta name="company" content="Grupo Logos">
    <meta name="description" content="Sistema de controle de solicitações e trânsito interno de documentos">

    <script src="<?=$jquery?>"></script>
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="<?=$materializecss?>"/>
    <link rel="stylesheet" href="assets\customs\css\style.css">
</head>
<body>
    <nav>
        <div class="nav-wrapper">
            <a href="#" class="brand-logo">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li>
                    <a href="<?=$site_logos?>">
                        Voltar ao Site
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    <ul id="dropdownMenu" class="dropdown-content">
        <li><a href="#!">one</a></li>
        <li><a href="#!">two</a></li>
        <li class="divider"></li>
        <li><a href="#!">three</a></li>
    </ul>
    <div class="row">
        <div class="col maindiv">
            <div class="info-card">
                Test1
            </div>
            <div class="info-card">
                Test2
            </div>
            <div class="info-card">
                Test3
            </div>
            <div class="info-card">
                Test4
            </div>
        </div>
    </div>
    
</body>
<script src="<?=$materializejs?>"></script>
<script>
    $(document).ready(function(){
        $(".dropdown-trigger").dropdown();
        $('body').on("click", function(){
            if($('#dropdownMenu').is(':visible')){
                $(this).removeAttr('style');
            }
            console.log($('#dropdownMenu').is(':visible'));
        });
    });
</script>
</html>