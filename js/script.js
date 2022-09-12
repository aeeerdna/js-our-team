console.log('JS OK!!')

const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        picture: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        picture: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        picture: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        picture: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        picture: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        picture: 'barbara-ramos-graphic-designer.jpg'
    },
];

const teamContainer = document.getElementById('team');

for (let i = 0; i < team.length; i++) {
    const teamMate = team[i];

    teamContainer.innerHTML +=
        `<div class="img-team">
            <div class="bio-img">
                <div>
                    <img src="img/${teamMate.picture}" alt="${teamMate.name} picture" />
                </div>   
                <div class="info-team">${teamMate.name}</div>
                <div class="info-team">${teamMate.role} </div>
            </div>
        </div>`
}