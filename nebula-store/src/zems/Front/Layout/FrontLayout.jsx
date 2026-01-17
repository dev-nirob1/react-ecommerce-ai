import { Outlet } from 'react-router-dom';

const FrontLayout = () => {
  return (
    <div className="front-layout">
      <header>Front Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Front Footer</footer>
    </div>
  );
};

export default FrontLayout;
