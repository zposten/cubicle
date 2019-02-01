import styled from 'styled-components'
import {primary} from '../../general/theme'

export const TitleBlock = styled.div`
  background: ${primary};
  font-family: 'Anton';
  color: white;
  padding: 20px;
  margin-bottom: 20px;
  margin-left: ${props => props.marginLeft || 0}px;
  font-size: 1.7rem;
  text-transform: uppercase;
`