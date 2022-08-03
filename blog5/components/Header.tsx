import {DiDebian, DiDocker, DiGithub, 
  DiJsBadge, DiLinux, DiMarkdown, 
  DiNodejsSmall, DiReact, DiTerminal} from 'react-icons/di';
import { SiEthereum, SiSolidity, SiTypescript } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaHardHat } from 'react-icons/fa'
const Header = ( ) => {
  return (
  <header>
    <DiLinux />
    <DiTerminal />
    <DiDebian />
    <DiDocker />
    <DiGithub />
    <DiJsBadge />
    <DiMarkdown />
    <DiReact />
    <DiNodejsSmall />
    <SiSolidity />
    <SiTypescript />
    <TbBrandNextjs />
    <SiEthereum />
    <FaHardHat />
  </header>)
}
export default Header;