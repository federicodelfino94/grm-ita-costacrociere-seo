// Read more in the JS API documentation here: https://docs.dataform.co/guides/javascript/js-api

// publish("new_table")
//   .type("table")
//   .query(ctx => `select * from ${ctx.ref("source_table")}`);
module.exports = () => {
    return `
        case 
            when lower(segment_name) like '%direct%' then 'Direct'
            when lower(segment_name) like '%organic%' then 'Organic Search'
            when lower(segment_name) like '%referral%' then 'Referral'
        else 
            'Other' 
        end
    `
} 