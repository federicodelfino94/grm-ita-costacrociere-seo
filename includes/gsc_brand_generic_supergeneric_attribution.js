module.exports = () => {
    return `
      case 
        when lower(query) like '%costa%' then 'Brand' 
        when lower(query) like '%costacrociere%' then 'Brand' 
        when lower(query) like '%costa crociere%' then 'Brand' 
        when lower(query) like '%costakreuzfahrten%' then 'Brand' 
        when lower(query) like '%costa kreuzfahrten%' then 'Brand' 
        when lower(query) like '%costacroisieres%' then 'Brand' 
        when lower(query) like '%costa croisieres%' then 'Brand' 
        when lower(query) like '%costacruises%' then 'Brand' 
        when lower(query) like '%costa cruises%' then 'Brand' 
        when lower(query) like '%costacruceros%' then 'Brand' 
        when lower(query) like '%costa cruceros%' then 'Brand' 
        when lower(query) like '%costacruizeiros%' then 'Brand' 
        when lower(query) like '%costa cruizeiros%' then 'Brand' 
        when lower(query) like '%crocier%' then 'Generic'
        when lower(query) like '%crucero%' then 'Generic'
        when lower(query) like '%croisière%' then 'Generic'
        when lower(query) like '%croisiere%' then 'Generic'
        when lower(query) like '%kreuzfahrt%' then 'Generic'
        when lower(query) like '%cruzeiro%' then 'Generic'
        when lower(query) like '%cruise%' then 'Generic'
        when lower(query) like '%круиз%' then 'Generic'
        else 'Super Generic'
      end
    `
} 


