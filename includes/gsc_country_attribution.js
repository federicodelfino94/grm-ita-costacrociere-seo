module.exports = () => {
    return `
        case  
            when site = 'https://www.costacrociere.it/' then 'Italy'
            when site = 'https://www.costacroisieres.fr/' then 'France' 
            when site = 'https://www.costakreuzfahrten.ch/' then 'Switzerland'
            when site = 'https://www.costacruises.co.uk/' then 'UK'
            when site = 'https://www.costacruceros.es/' then 'Spain'
            when site = 'https://www.costacruises.se/' then 'Sweden'
            when site = 'https://www.costakreuzfahrten.at/' then 'Austria'
            when site = 'https://www.costakreuzfahrten.de/' then 'Germany'
            when site = 'https://www.costacruceros.com/' then 'Argentina'
            when site = 'https://www.costacruises.dk/' then 'Denmark'
            when site = 'https://www.costacruzeiros.com/' then 'Brazil'
            when site = 'https://www.costacruises.ru/' then 'Russia'
            else 'N/A'
        end
    `
} 









