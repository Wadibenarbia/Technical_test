<?php

$all = 10;
$compte = 0;
$m = 0;
$nb_chiffre = 1;
while ($compte < $all) {
    while ($m < $nb_chiffre) {
        echo ++$compte;
        $m++;
    }
    $m = 0;
    echo "\n";
    $nb_chiffre++;
}