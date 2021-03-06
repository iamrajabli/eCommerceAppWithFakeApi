'use strict';

export default function about({ businessYearSelector, designBrandsSelector, teamMembersSelector }) {
    const businessYear = document.querySelector(businessYearSelector),
        designBrands = document.querySelector(designBrandsSelector),
        teamMembers = document.querySelector(teamMembersSelector)

    if (businessYear && designBrands && teamMembers) {
        let i = 1;
        setInterval(() => {
            i += 1;

            if (i <= 50) {
                businessYear.textContent = `${i}+`
            }

            if (i <= 70) {
                designBrands.textContent = `${i}+`

            }

            if (i <= 85) {
                teamMembers.textContent = `${i}+`

            }
        }, 30)
    }

}