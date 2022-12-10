import Navbar from '../navbar/Navbar';
import UserDefinedFooter from '../../components/Navbar and Footer/UserDefinedFooter';

const Layout = (props) => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="flex flex-col justify-center items-center p-10">
        {props.children}
      </main>
      <footer>
        <UserDefinedFooter></UserDefinedFooter>
      </footer>
    </>
  );
};

export default Layout;
