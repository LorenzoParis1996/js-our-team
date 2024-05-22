const staffData = [{
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    foto: 'wayne-barnett-founder-ceo.jpg'
},
{
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    foto: 'angela-caroll-chief-editor.jpg'
},
{
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    foto: 'walter-gordon-office-manager.jpg'
},
{
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    foto: 'angela-lopez-social-media-manager.jpg'
},
{
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    foto: 'scott-estrada-developer.jpg'
},
{
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    foto: 'barbara-ramos-graphic-designer.jpg'
}
];

const page = document.querySelector("body");

for (let key in staffData) {

    const info = document.createElement("h3");

    info.append(staffData[key]['nome'] + ' - ' + staffData[key]['ruolo'] + ' - ' + staffData[key]['foto']);

    page.appendChild(info);

    console.log(staffData[key]);

}

