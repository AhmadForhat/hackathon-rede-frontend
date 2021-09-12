import api from "services/api";

export function getReportById(id: string) {

    return Promise.resolve({
        id,
        idUser: 'UY2J3KN23',
        status: 'EM ABERTO',
        photo: 'https://www.globaltec.com.br/wp-content/uploads/2019/03/Empresa-de-constru%C3%A7%C3%A3o-civil-abriu-vagas-para-grande-obra-em-muitas-fun%C3%A7%C3%B5es.jpg',
        comment: 'Lorem ipsum',
        title: 'Robertinho',
        state: 'São Paulo',
        endereco: 'Rua pedro miligrau, nº 182'
    })

    return api.get(`/reports/${id}`)
        .then(({ data }) => data)
}