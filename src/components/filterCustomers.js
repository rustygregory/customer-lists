import { customersByList } from './CustomersTable'

export function filterCustomers(customers, conditions) {
  if (!conditions || conditions.length === 0) return customers
  const validConditions = conditions.filter(c => {
    if (!c.category || !c.operator) return false
    if (Array.isArray(c.value)) return c.value.length > 0
    return !!c.value
  })
  if (validConditions.length === 0) return customers
  return customers.filter(customer => {
    return validConditions.some(cond => {
      let fieldValue = ''
      if (cond.category === 'tag') {
        fieldValue = customer.tags.map(t => t.toLowerCase())
      } else if (cond.category === 'name') {
        fieldValue = customer.name.toLowerCase()
      } else if (cond.category === 'email') {
        fieldValue = customer.email.toLowerCase()
      } else {
        fieldValue = ''
      }

      if (cond.category === 'tag') {
        const compareValues = Array.isArray(cond.value)
          ? cond.value.map(v => v.toLowerCase())
          : [cond.value.toLowerCase()]

        switch (cond.operator) {
          case 'is': return compareValues.some(cv => fieldValue.includes(cv))
          case 'is-not': return !compareValues.some(cv => fieldValue.includes(cv))
          case 'contains': return compareValues.some(cv => fieldValue.some(t => t.includes(cv)))
          case 'does-not-contain': return !compareValues.some(cv => fieldValue.some(t => t.includes(cv)))
          default: return true
        }
      } else {
        const compareValue = Array.isArray(cond.value) ? cond.value[0]?.toLowerCase() || '' : cond.value.toLowerCase()
        switch (cond.operator) {
          case 'is': return fieldValue === compareValue
          case 'is-not': return fieldValue !== compareValue
          case 'contains': return fieldValue.includes(compareValue)
          case 'does-not-contain': return !fieldValue.includes(compareValue)
          case 'starts-with': return fieldValue.startsWith(compareValue)
          case 'ends-with': return fieldValue.endsWith(compareValue)
          default: return true
        }
      }
    })
  })
}

export function getCustomersForList(listId, lists) {
  if (listId === 'all') return customersByList.all
  const list = lists.find(l => l.id === listId)
  if (!list || !list.conditions) return customersByList[listId] || []
  if (list.conditions.some(c => c.category === 'created')) {
    return customersByList.all.slice(0, 3)
  }
  const filtered = filterCustomers(customersByList.all, list.conditions)
  return filtered.length > 0 ? filtered : (customersByList[listId] || [])
}
