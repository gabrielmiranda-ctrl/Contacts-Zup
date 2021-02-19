import styled from 'styled-components'
import {
  FaCheck,
  FaCheckDouble,
  FaThLarge,
  FaTrash,
  FaBars,
  FaUserCircle,
  FaSearch
} from 'react-icons/fa'

/*header*/

export const CHeader = styled.div`
  display: flex;
  z-index: 9999;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 0 30px;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  background: #2f3d4f;
  box-shadow: 0px 8px 30px -15px rgba(0, 0, 0, 0.5);
`

export const CFaSearch = styled(FaSearch)`
  padding: 0 15px 0 10px;
  font-size: 20px;
  color: #9bc321;
`

export const CheckBtn = styled.label`
  display: none;
  font-size: 30px;
  color: #fff;
  @media (max-width: 650px) {
    display: block;
  }
`
export const CFaBars = styled(FaBars)`
  display: none;
  font-size: 30px;
  color: #fff;

  @media (max-width: 650px) {
    display: block;
  }
`

export const Logo = styled.img`
  width: 80px;

  @media (max-width: 650px) {
    display: none;
  }
`

export const SearchBar = styled.div`
  padding: 5px;
  margin: 0 !important;
  align-items: center;
  display: flex;
  border-radius: 100px;
  height: 30px;
  width: 65%;
  background: #fff;
`

export const CInpunt = styled.input`
  color: #3d414f;
  font-size: 22px;
  width: 90%;
  border: none;
  outline: none;
`
export const User = styled.div``

export const CFaUser = styled(FaUserCircle)`
  color: #fff;
  font-size: 40px;
`

/*sideBar*/

export const CFaCheckDouble = styled(FaCheckDouble)`
  font-size: 22px;
  padding: 0 20px 0 10px;
`

export const CFaThLarge = styled(FaThLarge)`
  font-size: 22px;
  padding: 0 20px 0 10px;
`

export const CFaTrash = styled(FaTrash)`
  font-size: 22px;
  padding: 0 20px 0 10px;
`

export const Cul = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  text-decoration: none;
`

export const SideBarLeft = styled.div`
  position: fixed;
  bottom: 0;
  top: 0;
  width: 180px;
  background: #fff;
  padding: 90px 5px 5px 5px;
  box-shadow: 8px 0px 30px -15px rgba(0, 0, 0, 0.5);
`

export const Active = styled.div`
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 20px;
  height: 55px;
  padding: 0 0 0 15px;
  color: #9bc321;
  &:hover {
    color: #7a9b14;
  }
`

export const MenuItem = styled.div`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #87868b;
  padding: 0 0 0 15px !important;
  height: 55px;
  font-size: 20px;
  &:hover {
    color: #505a63;
  }
`
export const Text = styled.p``
/*table*/

export const TableContact = styled.div`
  border-radius: 10px;
  box-shadow: 8px 0px 50px -15px rgba(0, 0, 0, 0.5);
  overflow-x: auto;
  margin: 140px 70px 20px 260px !important;

  @media (max-width: 650px) {
    margin: 150px 20px 20px 20px !important;
  }
`

export const CTable = styled.table`
  border-radius: 10px;
  width: 100%;
  border-spacing: 0px !important;
`

export const TBody = styled.tbody`
  width: 100%;
`

export const Tr = styled.tr`
  width: 100%;
`

export const Td = styled.td`
  padding: 10px 20px;
  border-bottom: 3px solid #dfdfdf;
`

export const PersonImg = styled.img`
  width: 60px !important;
  height: 60px !important;
  border-radius: 60px !important;
`

export const TdName = styled.td`
  font-weight: 500;
  font-size: 22px;
  color: #414955;
  padding: 10px 25px;
  border-bottom: 3px solid #dfdfdf;
`

export const TdInfo = styled.td`
  font-size: 20px;
  color: #9c9c9c;
  padding: 10px 25px;
  border-bottom: 3px solid #dfdfdf;
`

export const CCheck = styled(FaCheck)`
  font-size: 20px;
  padding: 10px;
  color: #9c9c9c;
  &:hover {
    color: #9bc321;
  }
`

export const CThLarge = styled(FaThLarge)`
  font-size: 20px;
  padding: 10px;
  color: #9c9c9c;
  &:hover {
    color: #9bc321;
  }
`

export const CTrash = styled(FaTrash)`
  font-size: 20px;
  padding: 10px;
  color: #9c9c9c;
  &:hover {
    color: #9bc321;
  }
`
