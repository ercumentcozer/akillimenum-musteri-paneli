#!/usr/bin/env sh
deploy () {
    echo "\n\e[34mDeploy işlemi başlatılıyor...\e[39m\n"
    git config --global user.name "ercument"
    git config --global user.email "emirhannera@gmail.com"
    git init
    git add -A
    git commit -m "$commitMessage"
    git push -f https://github.com/ercumentcozer/akillimenum-musteri-paneli.git master
    echo "\n\e[92mDeploy işlemi başarıyla tamamlandı!\e[39m\n"
}

echo -n "\n\e[95mCommit mesajı: \e[31m"
read commitMessage
echo "\e[39m"

deploy