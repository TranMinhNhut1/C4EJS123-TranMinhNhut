const loadinformations = async() => {
    try {
        const res = await fetch('https://sheetdb.io/api/v1/eg3nh7djoyltj');
        hpinformations  = await res.json();
        displayinformations(hpinformations);
    } catch (err) {
        console.error(err);
    }
};

const displayinformations = (informations) => {
    const htmlString = informations 
        .map((informations) => {
            return `
            <div class="informationstaff">
                <h4>${informations.name}</h4>
                <p>${informations.gender}</p>
                <p>${informations.Department}</p>
                <p> Chức Vụ:${informations.position}</p>
                <p> Ngày Sinh:${informations.YearofBirth}</p>
                <p>Mail:${informations.Mail}</p>
                <p>Std:${informations.phone}</p>
                <p>Lương:${informations.salary}</p><br>

            </div>
        `;
        })
        .join('');
    informationstaff.innerHTML = htmlString;
};
loadinformations();