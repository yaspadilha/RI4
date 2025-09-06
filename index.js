import {Cliente, Telefone, Endereco, Empresa} from "moduloatv4";

let endereco1 = new Endereco('SP', 'São Paulo', 'Rua dos Sonhos', '93')
let cliente1 = new Cliente('Claúdio', '12345678900', endereco1)
cliente1.addTelefone(new Telefone('12', '111111111'))
cliente1.addTelefone(new Telefone('12', '222222222'))

let endereco2 = new Endereco('MG', 'Belo Horizonte', 'Rua dos Ipês', '102')
let cliente2 = new Cliente('Juliano', '12345678900', endereco2)
cliente2.addTelefone(new Telefone('12', '333333333'))
cliente2.addTelefone(new Telefone('12', '444444444'))

let endereco3 = new Endereco('SP', 'São José dos Campos', 'Vila Verde', '304')
let cliente3 = new Cliente('Gerson', '12345678900', endereco3)
cliente3.addTelefone(new Telefone('12', '555555555'))
cliente3.addTelefone(new Telefone('12', '666666666'))

let endereco4 = new Endereco('SP', 'Campinas', 'Rua Bergamota', '34')
let cliente4 = new Cliente('Fernando', '12345678900', endereco4)
cliente4.addTelefone(new Telefone('12', '777777777'))
cliente4.addTelefone(new Telefone('12', '888888888'))

let endereco5 = new Endereco('SP', 'Guarulhos', 'Rua Morro dos Ventos Uivantes', '1028')
let cliente5 = new Cliente('Antônio', '12345678900', endereco5)
cliente5.addTelefone(new Telefone('12', '999999999'))
cliente5.addTelefone(new Telefone('12', '000000000'))

let endereco6 = new Endereco('SP', 'São Carlos', 'São João', '55')
let empresa = new Empresa('Neonova Tecnologia e Inovação Digital Ltda', 'Neonova Tech', '123456789', endereco6)
empresa.addTelefone(new Telefone('51', '98708655'))
empresa.addTelefone(new Telefone('11', '90395454'))
empresa.addCliente(cliente1)
empresa.addCliente(cliente2)
empresa.addCliente(cliente3)
empresa.addCliente(cliente4)
empresa.addCliente(cliente5)
empresa.addEndereco(endereco6)

console.log(empresa.detalhe())