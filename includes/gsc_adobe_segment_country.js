module.exports = () => {
    return `
        case     
            when upper(segment_name) like '%==%IT%' then 'Italy'
            when upper(segment_name) like '%==%FR%' then 'France'
            when upper(segment_name) like '%==%CH%' then 'Switzerland'
            when upper(segment_name) like '%==%UK%' then 'UK'
            when upper(segment_name) like '%==%ES%' then 'Spain'
            when upper(segment_name) like '%==%AT%' then 'Austria'
            when upper(segment_name) like '%==%DE%' then 'Germany'
            when upper(segment_name) like '%==%AR%' then 'Argentina'
            when upper(segment_name) like '%==%BR%' then 'Brazil'
            when upper(segment_name) like '%==%RU%' then 'Russia'
            when upper(segment_name) like '%==%SE%' then 'Sweden'
            when upper(segment_name) like '%==%DK%' then 'Denmark'
            when upper(segment_name) like '%==%BE%' then 'Belgium'
            when upper(segment_name) like '%==%NL%' then 'Netherlands'
            when upper(segment_name) like '%==%FI%' then 'Finland'
            else 
            'N/A' 
        end
    `
} 
