# -*- mode: ruby -*-
# vi: set ft=ruby :


Vagrant.configure("2") do |config|
  # Utiliser une boîte Ubuntu 20.04 LTS
  config.vm.box = "bento/ubuntu-22.04"


  # Configuration réseau
  config.vm.network "private_network", ip: "192.168.33.10"


  # Configuration des ressources (mémoire, CPU)
  config.vm.provider "virtualbox" do |vb|
    vb.memory = "3048" # 2 Go de mémoire
    vb.cpus = 2 # 2 CPU cores
  end


  # Provisionnement (installation de logiciels, configuration, etc.)
  config.vm.provision "shell", inline: <<-SHELL
    # Mise à jour du système
    sudo apt-get update
    sudo apt-get upgrade -y 


    # Installer les outils usuels
    sudo apt-get install -y vim git curl wget
  SHELL
end

