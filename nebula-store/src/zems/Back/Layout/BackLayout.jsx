import { Outlet } from 'react-router-dom';

const BackLayout = () => {
    return (
        <div className="back-layout">
            <header>Dashboard Header</header>
            <div className="content">
                <aside>Sidebar</aside>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default BackLayout;
