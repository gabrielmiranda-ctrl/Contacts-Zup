import React, { useState } from 'react'
import {
  TableContact,
  CTable,
  TBody,
  Tr,
  TdName,
  Td,
  Text,
  PersonImg,
  CTrash,
  CThLarge,
  CFaTrash,
  CCheck,
  TdInfo,
  CHeader,
  CheckBtn,
  Logo,
  SearchBar,
  User,
  CInpunt,
  CFaSearch,
  CFaBars,
  CFaUser,
  SideBarLeft,
  Active,
  MenuItem,
  CFaCheckDouble,
  CFaThLarge,
  Cul
} from './style'
import logo from './../../assets/logo/logo.png'
import './style.css'
import contacts from './contacts.json'

export default function Contact () {
  const [searchTerm, setSearchTerm] = useState('')
  const [sideBar, setSideBar] = useState(false)

  async function showSideBar () {
    setSideBar(!sideBar)
  }

  return (
    <div>
      <CHeader>
        <CheckBtn>
          <CFaBars onClick={() => showSideBar()} />
        </CheckBtn>
        <Logo class='logo-img' src={logo} alt='logo' />
        <SearchBar>
          <CFaSearch />
          <CInpunt
            type='text'
            onChange={event => {
              setSearchTerm(event.target.value)
            }}
            value={searchTerm}
            placeholder='Buscar'
          />
        </SearchBar>
        <User>
          <CFaUser />
        </User>
      </CHeader>

      <SideBarLeft className={sideBar ? 'sideBarLeft' : 'sideBarOff'}>
        <Cul>
          <Active>
            <CFaThLarge></CFaThLarge>
            <Text>Todos</Text>
          </Active>
          <MenuItem>
            <CFaCheckDouble />
            <Text>Atendidos</Text>
          </MenuItem>
          <MenuItem>
            <CFaTrash />
            <Text>Lixeira</Text>
          </MenuItem>
        </Cul>
      </SideBarLeft>

      <TableContact>
        <CTable>
          <TBody>
            {contacts
              .filter(val => {
                if (searchTerm == '') {
                  return val
                } else if (
                  val.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val
                }
              })
              .map((val, key) => {
                return (
                  <Tr key={key}>
                    <Td>
                      <PersonImg src={val.img} alt='person' />
                    </Td>
                    <TdName>{val.name}</TdName>
                    <TdInfo>{val.mail}</TdInfo>
                    <TdInfo>{val.phone}</TdInfo>
                    <TdInfo>{val.oratio}</TdInfo>
                    <Td>
                      <CTrash />
                      <CThLarge />
                      <CCheck />
                    </Td>
                  </Tr>
                )
              })}
          </TBody>
        </CTable>
      </TableContact>
    </div>
  )
}
