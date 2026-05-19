import React from 'react'
import styled from 'styled-components'

const TableContainer = styled.div`
  width: 100%;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
`

const Thead = styled.thead`
  border-bottom: 1px solid #d8dcde;
`

const Th = styled.th`
  text-align: left;
  padding: 12px 12px;
  font-weight: 600;
  color: #2f3941;
  font-size: 14px;
  white-space: nowrap;

  &:first-child {
    width: 40px;
    padding-left: 16px;
  }
`

const SortableTh = styled(Th)`
  cursor: pointer;
  user-select: none;
  display: table-cell;

  &:hover {
    color: #2f3941;
  }
`

const Tbody = styled.tbody``

const Tr = styled.tr`
  border-bottom: 1px solid #e9ebed;

  &:hover {
    background: #f8f9f9;
  }
`

const Td = styled.td`
  padding: 12px 12px;
  color: #2f3941;
  vertical-align: middle;

  &:first-child {
    width: 40px;
    padding-left: 16px;
  }
`

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: #1f73b7;
`

const NameCell = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const Avatar = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #c2c8cc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 600;
  color: #49545c;
  flex-shrink: 0;
`

const NameLink = styled.a`
  color: #1f73b7;
  text-decoration: none;
  font-size: 13px;

  &:hover {
    text-decoration: underline;
  }
`

const WarningIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <path d="M6.86 2.57L1.21 12a1 1 0 0 0 .86 1.5h11.28a1 1 0 0 0 .86-1.5L8.57 2.57a1 1 0 0 0-1.72 0z" fill="none" stroke="#87929d" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.71 6v2.57" stroke="#87929d" strokeLinecap="round"/>
    <path d="M7.71 11.14h.01" stroke="#87929d" strokeLinecap="round"/>
  </svg>
)

const EmailCell = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #2f3941;
  font-size: 13px;
`

const Tag = styled.span`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  background: ${props => {
    const v = props.$variant?.toLowerCase()
    if (v === 'gold') return '#fff3cd'
    if (v === 'diamond') return '#d4edff'
    return '#e9ebed'
  }};
  color: ${props => {
    const v = props.$variant?.toLowerCase()
    if (v === 'gold') return '#8b6914'
    if (v === 'diamond') return '#144a75'
    return '#49545c'
  }};
`

const Dash = styled.span`
  color: #87929d;
`

const SortIconWrapper = styled.span`
  margin-left: 6px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
  gap: 2px;
`

const Caret = styled.span`
  font-size: 10px;
  line-height: 1;
  color: ${props => props.$active ? '#2f3941' : '#c2c8cc'};
`

export const customersByList = {
  all: [
    { id: 1, name: 'Rodrigo De Conceição', email: 'roddecon@email.com', tags: ['Gold'], timezone: '(GMT-04:00) Eastern Time (US & Canada)', lastUpdated: 'May 05' },
    { id: 2, name: 'Samantha Cruz', email: 's.cruz@elite.ph', tags: ['Platinum'], timezone: '(GMT+08:00) Manila', lastUpdated: 'May 05' },
    { id: 3, name: 'James Bond', email: '007@email.com', tags: ['Gold'], timezone: '(GMT-04:00) Eastern Time (US & Canada)', lastUpdated: 'May 04' },
    { id: 4, name: 'Gus Gus', email: 'gg@email.com', tags: [], timezone: '(GMT-04:00) Eastern Time (US & Canada)', lastUpdated: 'May 04' },
    { id: 5, name: 'Paul Newsome', email: 'paul@email.com', tags: ['Silver'], timezone: '(GMT-04:00) Eastern Time (US & Canada)', lastUpdated: 'May 03' },
    { id: 6, name: 'W. Customer Wilson', email: 'w.wilson997.997@gmail.com', tags: ['Diamond'], timezone: '(GMT-04:00) Eastern Time (US & Canada)', lastUpdated: 'May 02' },
    { id: 7, name: 'Mr. Lee', email: 'lee@gmail.com', tags: [], timezone: '(GMT-04:00) Eastern Time (US & Canada)', lastUpdated: 'May 01' },
    { id: 8, name: 'Marcus Johnson', email: 'marcus.j@enterprise.com', tags: ['Gold'], timezone: '(GMT-05:00) Central Time (US & Canada)', lastUpdated: 'Apr 28' },
    { id: 9, name: 'Elena Volkov', email: 'elena.v@globalcorp.ru', tags: ['Gold'], timezone: '(GMT+03:00) Moscow', lastUpdated: 'Apr 27' },
    { id: 10, name: 'Takeshi Yamamoto', email: 'takeshi@nippon.co.jp', tags: ['Gold'], timezone: '(GMT+09:00) Tokyo', lastUpdated: 'Apr 25' },
    { id: 11, name: 'Rachel Green', email: 'rachel.g@fashion.com', tags: ['Gold'], timezone: '(GMT-04:00) Eastern Time (US & Canada)', lastUpdated: 'Apr 24' },
    { id: 12, name: 'Omar Hassan', email: 'omar.h@logistics.ae', tags: ['Gold'], timezone: '(GMT+04:00) Dubai', lastUpdated: 'Apr 22' },
    { id: 13, name: 'Nina Petrova', email: 'nina.p@fintech.ee', tags: ['Gold'], timezone: '(GMT+02:00) Tallinn', lastUpdated: 'Apr 20' },
    { id: 14, name: 'Carlos Mendez', email: 'carlos.m@media.mx', tags: ['Gold'], timezone: '(GMT-06:00) Mexico City', lastUpdated: 'Apr 18' },
    { id: 15, name: 'Ingrid Svensson', email: 'ingrid.s@nordic.se', tags: ['Gold'], timezone: '(GMT+01:00) Stockholm', lastUpdated: 'Apr 16' },
    { id: 16, name: 'Kwame Asante', email: 'kwame.a@ventures.gh', tags: ['Gold'], timezone: '(GMT+00:00) Accra', lastUpdated: 'Apr 14' },
    { id: 17, name: 'Yuki Tanaka', email: 'yuki.t@design.jp', tags: ['Gold'], timezone: '(GMT+09:00) Tokyo', lastUpdated: 'Apr 12' },
    { id: 18, name: 'Liam O\'Brien', email: 'liam.ob@startup.ie', tags: ['Gold'], timezone: '(GMT+00:00) Dublin', lastUpdated: 'Apr 10' },
    { id: 19, name: 'Anika Muller', email: 'anika.m@corp.de', tags: ['Gold'], timezone: '(GMT+01:00) Berlin', lastUpdated: 'Apr 08' },
    { id: 20, name: 'Henrik Larsson', email: 'henrik.l@nordic.se', tags: ['Diamond'], timezone: '(GMT+01:00) Stockholm', lastUpdated: 'Apr 06' },
    { id: 21, name: 'Isabelle Fontaine', email: 'isabelle.f@luxe.fr', tags: ['Diamond'], timezone: '(GMT+01:00) Paris', lastUpdated: 'Apr 04' },
    { id: 22, name: 'Victoria Chang', email: 'v.chang@prestige.hk', tags: ['Diamond'], timezone: '(GMT+08:00) Hong Kong', lastUpdated: 'Apr 02' },
    { id: 23, name: 'Benjamin Adler', email: 'b.adler@diamond.ch', tags: ['Diamond'], timezone: '(GMT+01:00) Zurich', lastUpdated: 'Mar 30' },
    { id: 24, name: 'Catherine Whitmore', email: 'c.whitmore@prestige.uk', tags: ['Diamond'], timezone: '(GMT+00:00) London', lastUpdated: 'Mar 28' },
    { id: 25, name: 'Raj Kapoor', email: 'raj.k@luxury.in', tags: ['Diamond'], timezone: '(GMT+05:30) Mumbai', lastUpdated: 'Mar 26' },
    { id: 26, name: 'Sofia Martinez', email: 'sofia.m@company.io', tags: ['Silver'], timezone: '(GMT-06:00) Central Time (US & Canada)', lastUpdated: 'Mar 24' },
    { id: 27, name: 'Lucas Fernandez', email: 'lucas.f@designstudio.br', tags: ['Silver'], timezone: '(GMT-03:00) São Paulo', lastUpdated: 'Mar 22' },
    { id: 28, name: 'Mei Lin', email: 'mei.lin@retail.sg', tags: ['Silver'], timezone: '(GMT+08:00) Singapore', lastUpdated: 'Mar 20' },
    { id: 29, name: 'Thomas Wright', email: 'tom.w@services.co.uk', tags: ['Silver'], timezone: '(GMT+00:00) London', lastUpdated: 'Mar 18' },
    { id: 30, name: 'Priya Sharma', email: 'priya@webdev.in', tags: ['Silver'], timezone: '(GMT+05:30) Mumbai', lastUpdated: 'Mar 16' },
    { id: 31, name: 'Connor Murphy', email: 'c.murphy@tech.ie', tags: ['Silver'], timezone: '(GMT+00:00) Dublin', lastUpdated: 'Mar 14' },
    { id: 32, name: 'Alessandro Rossi', email: 'a.rossi@ventures.it', tags: ['Platinum'], timezone: '(GMT+01:00) Rome', lastUpdated: 'Mar 12' },
    { id: 33, name: 'Robert Van Der Berg', email: 'r.vdb@finance.nl', tags: ['Platinum'], timezone: '(GMT+01:00) Amsterdam', lastUpdated: 'Mar 10' },
    { id: 34, name: 'Amara Osei', email: 'a.osei@premium.gh', tags: ['Platinum'], timezone: '(GMT+00:00) Accra', lastUpdated: 'Mar 08' },
    { id: 35, name: 'Sebastian Krol', email: 's.krol@platinum.pl', tags: ['Platinum'], timezone: '(GMT+01:00) Warsaw', lastUpdated: 'Mar 06' },
    { id: 36, name: 'Natasha Romanova', email: 'n.romanova@corp.ru', tags: ['Platinum'], timezone: '(GMT+03:00) Moscow', lastUpdated: 'Mar 04' },
    { id: 37, name: 'Daniel Cooper', email: 'd.cooper@trade.au', tags: ['Bronze'], timezone: '(GMT+10:00) Sydney', lastUpdated: 'Mar 02' },
    { id: 38, name: 'Fatima Zahra', email: 'f.zahra@connect.ma', tags: ['Bronze'], timezone: '(GMT+01:00) Casablanca', lastUpdated: 'Feb 28' },
    { id: 39, name: 'Kevin Park', email: 'k.park@digital.kr', tags: ['Bronze'], timezone: '(GMT+09:00) Seoul', lastUpdated: 'Feb 26' },
    { id: 40, name: 'Maria Santos', email: 'm.santos@bronze.br', tags: ['Bronze'], timezone: '(GMT-03:00) São Paulo', lastUpdated: 'Feb 24' },
    { id: 41, name: 'Ahmed Mansour', email: 'a.mansour@trade.eg', tags: ['Bronze'], timezone: '(GMT+02:00) Cairo', lastUpdated: 'Feb 22' },
    { id: 42, name: 'Lisa Chang', email: 'l.chang@basics.tw', tags: ['Bronze'], timezone: '(GMT+08:00) Taipei', lastUpdated: 'Feb 20' },
    { id: 43, name: 'Sandra Novak', email: 's.novak@agency.cz', tags: ['Nickle'], timezone: '(GMT+01:00) Prague', lastUpdated: 'Feb 18' },
    { id: 44, name: 'Jorge Ramirez', email: 'j.ramirez@shop.co', tags: ['Nickle'], timezone: '(GMT-05:00) Bogota', lastUpdated: 'Feb 16' },
    { id: 45, name: 'Emily Watson', email: 'e.watson@basics.ca', tags: ['Nickle'], timezone: '(GMT-05:00) Toronto', lastUpdated: 'Feb 14' },
    { id: 46, name: 'Tobias Gruber', email: 't.gruber@standard.at', tags: ['Nickle'], timezone: '(GMT+01:00) Vienna', lastUpdated: 'Feb 12' },
    { id: 47, name: 'Hannah Kim', email: 'h.kim@nickle.kr', tags: ['Nickle'], timezone: '(GMT+09:00) Seoul', lastUpdated: 'Feb 10' },
    { id: 48, name: 'Dmitri Volkov', email: 'd.volkov@standard.ru', tags: ['Pewter'], timezone: '(GMT+03:00) Moscow', lastUpdated: 'Feb 08' },
    { id: 49, name: 'Anya Kowalski', email: 'a.kowalski@basic.pl', tags: ['Pewter'], timezone: '(GMT+01:00) Warsaw', lastUpdated: 'Feb 06' },
    { id: 50, name: 'Patrick O\'Neill', email: 'p.oneill@starter.ie', tags: ['Pewter'], timezone: '(GMT+00:00) Dublin', lastUpdated: 'Feb 04' },
    { id: 51, name: 'Chen Wei', email: 'chen.wei@techcorp.cn', tags: ['Pewter'], timezone: '(GMT+08:00) Beijing', lastUpdated: 'Feb 02' },
    { id: 52, name: 'Rosa Delgado', email: 'r.delgado@pewter.mx', tags: ['Pewter'], timezone: '(GMT-06:00) Mexico City', lastUpdated: 'Jan 30' },
    { id: 53, name: 'Aisha Patel', email: 'aisha.p@startup.dev', tags: [], timezone: '(GMT+05:30) Mumbai', lastUpdated: 'Jan 28' },
    { id: 54, name: 'David Kim', email: 'david.kim@techstart.kr', tags: [], timezone: '(GMT+09:00) Seoul', lastUpdated: 'Jan 26' },
    { id: 55, name: 'Anna Kowalski', email: 'anna.k@eurocorp.pl', tags: [], timezone: '(GMT+01:00) Warsaw', lastUpdated: 'Jan 24' },
    { id: 56, name: 'Jean-Pierre Dubois', email: 'jp.dubois@agence.fr', tags: [], timezone: '(GMT+01:00) Paris', lastUpdated: 'Jan 22' },
    { id: 57, name: 'Ngozi Okafor', email: 'ngozi@ventures.ng', tags: [], timezone: '(GMT+01:00) Lagos', lastUpdated: 'Jan 20' },
    { id: 58, name: 'Michael Torres', email: 'm.torres@freelance.us', tags: [], timezone: '(GMT-07:00) Mountain Time (US & Canada)', lastUpdated: 'Jan 18' },
    { id: 59, name: 'Fatima Al-Rashid', email: 'fatima@consulting.sa', tags: [], timezone: '(GMT+03:00) Riyadh', lastUpdated: 'Jan 16' },
    { id: 60, name: 'Sarah Bennett', email: 's.bennett@agency.au', tags: [], timezone: '(GMT+10:00) Sydney', lastUpdated: 'Jan 14' },
    { id: 61, name: 'Oscar Lindqvist', email: 'o.lindqvist@tech.se', tags: [], timezone: '(GMT+01:00) Stockholm', lastUpdated: 'Jan 12' },
    { id: 62, name: 'Julia Novikova', email: 'j.novikova@mail.ru', tags: [], timezone: '(GMT+03:00) Moscow', lastUpdated: 'Jan 10' },
    { id: 63, name: 'Brian Foster', email: 'b.foster@corp.us', tags: [], timezone: '(GMT-05:00) Central Time (US & Canada)', lastUpdated: 'Jan 08' },
    { id: 64, name: 'Kenji Nakamura', email: 'k.nakamura@biz.jp', tags: [], timezone: '(GMT+09:00) Tokyo', lastUpdated: 'Jan 06' },
    { id: 65, name: 'Isabella Ricci', email: 'i.ricci@media.it', tags: [], timezone: '(GMT+01:00) Rome', lastUpdated: 'Jan 04' },
  ],
  last30: [
    { id: 8, name: 'Sofia Martinez', email: 'sofia.m@company.io', tags: ['Silver'], timezone: '(GMT-06:00) Central Time (US & Canada)', lastUpdated: 'May 10' },
    { id: 9, name: 'Chen Wei', email: 'chen.wei@techcorp.cn', tags: [], timezone: '(GMT+08:00) Beijing', lastUpdated: 'May 08' },
    { id: 10, name: 'Aisha Patel', email: 'aisha.p@startup.dev', tags: [], timezone: '(GMT+05:30) Mumbai', lastUpdated: 'May 03' },
  ],
  gold: [
    { id: 3, name: 'James Bond', email: '007@email.com', tags: ['Gold'], timezone: '(GMT-04:00) Eastern Time (US & Canada)', lastUpdated: 'May 04' },
    { id: 11, name: 'Marcus Johnson', email: 'marcus.j@enterprise.com', tags: ['Gold'], timezone: '(GMT-05:00) Central Time (US & Canada)', lastUpdated: 'Apr 28' },
    { id: 12, name: 'Elena Volkov', email: 'elena.v@globalcorp.ru', tags: ['Gold'], timezone: '(GMT+03:00) Moscow', lastUpdated: 'Apr 15' },
    { id: 13, name: 'Takeshi Yamamoto', email: 'takeshi@nippon.co.jp', tags: ['Gold'], timezone: '(GMT+09:00) Tokyo', lastUpdated: 'Mar 22' },
  ],
  mylist: [
    { id: 14, name: 'Rachel Green', email: 'rachel.g@fashion.com', tags: ['Gold'], timezone: '(GMT-04:00) Eastern Time (US & Canada)', lastUpdated: 'May 01' },
    { id: 15, name: 'Omar Hassan', email: 'omar.h@logistics.ae', tags: ['Gold'], timezone: '(GMT+04:00) Dubai', lastUpdated: 'Apr 20' },
  ],
  test2: [
    { id: 16, name: 'Priya Sharma', email: 'priya@webdev.in', tags: [], timezone: '(GMT+05:30) Mumbai', lastUpdated: 'Apr 30' },
    { id: 17, name: 'Lucas Fernandez', email: 'lucas.f@designstudio.br', tags: ['Silver'], timezone: '(GMT-03:00) São Paulo', lastUpdated: 'Apr 18' },
    { id: 18, name: 'Anna Kowalski', email: 'anna.k@eurocorp.pl', tags: [], timezone: '(GMT+01:00) Warsaw', lastUpdated: 'Apr 10' },
    { id: 19, name: 'David Kim', email: 'david.kim@techstart.kr', tags: ['Gold'], timezone: '(GMT+09:00) Seoul', lastUpdated: 'Mar 30' },
    { id: 20, name: 'Fatima Al-Rashid', email: 'fatima@consulting.sa', tags: [], timezone: '(GMT+03:00) Riyadh', lastUpdated: 'Mar 15' },
  ],
  again: [
    { id: 21, name: 'Henrik Larsson', email: 'henrik.l@nordic.se', tags: ['Diamond'], timezone: '(GMT+01:00) Stockholm', lastUpdated: 'May 06' },
    { id: 22, name: 'Ngozi Okafor', email: 'ngozi@ventures.ng', tags: [], timezone: '(GMT+01:00) Lagos', lastUpdated: 'Apr 25' },
    { id: 23, name: 'Jean-Pierre Dubois', email: 'jp.dubois@agence.fr', tags: ['Silver'], timezone: '(GMT+01:00) Paris', lastUpdated: 'Apr 12' },
  ],
}

function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
}

function CustomersTable({ customers = customersByList.all }) {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <tr>
            <Th><Checkbox type="checkbox" /></Th>
            <Th></Th>
            <SortableTh>
              Name
              <SortIconWrapper>
                <Caret $active={false}>▴</Caret>
                <Caret $active={false}>▾</Caret>
              </SortIconWrapper>
            </SortableTh>
            <Th>Email</Th>
            <Th>Tags</Th>
            <Th>Timezone</Th>
            <SortableTh>
              Last updated
              <SortIconWrapper>
                <Caret $active={false}>▴</Caret>
                <Caret $active={true}>▾</Caret>
              </SortIconWrapper>
            </SortableTh>
          </tr>
        </Thead>
        <Tbody>
          {customers.map(customer => (
            <Tr key={customer.id}>
              <Td><Checkbox type="checkbox" /></Td>
              <Td>
                <Avatar>{getInitials(customer.name)}</Avatar>
              </Td>
              <Td>
                <NameCell>
                  <NameLink href="#">{customer.name}</NameLink>
                  <WarningIcon />
                </NameCell>
              </Td>
              <Td>
                <EmailCell>
                  {customer.email}
                  <WarningIcon />
                </EmailCell>
              </Td>
              <Td>
                {customer.tags.length > 0 ? (
                  customer.tags.map(tag => (
                    <Tag key={tag} $variant={tag}>{tag}</Tag>
                  ))
                ) : (
                  <Dash>-</Dash>
                )}
              </Td>
              <Td>{customer.timezone || <Dash>-</Dash>}</Td>
              <Td>{customer.lastUpdated}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default CustomersTable
