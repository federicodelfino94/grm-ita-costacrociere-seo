// Read more in the JS API documentation here: https://docs.dataform.co/guides/javascript/js-api

module.exports = (schema, table, pk) => {
    return `
        select ${pk}, count(1) as ct
        from ${schema}.${table}
        group by ${pk}
        having count(1) > 1
    `
} 
