module.exports = () => {
    return `
        case 
            when lower(segment_name) like '%direct%' then 'Direct'
            when lower(segment_name) like '%organic%' then 'Organic Search'
            when lower(segment_name) like '%referral%' then 'Referral'
        else 
            'N/A' 
        end
    `
} 


