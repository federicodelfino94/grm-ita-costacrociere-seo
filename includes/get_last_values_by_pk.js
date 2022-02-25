// Read more in the JS API documentation here: https://docs.dataform.co/guides/javascript/js-api

module.exports = (schema, table, pk) => {
    return `
        with up_to_date as (
            select
                * except (dt_created, dt_updated, dt_filename),
                row_number() over (
                    partition by ${pk}
                    order by dt_updated desc
                ) rn
            from ${schema}.${table}
        )
        select 
            * except (rn)
        from up_to_date
        where rn = 1
    `
} 
