import './Dashboard.css';
import { useLogin } from "../../contexts/LoginContext";
import Team from '../Team/Team';
import Search from "../../components/Search/Search";

const Dashboard = () => {
    const { auth } = useLogin();

    return (
        <>
            <div className="container-fluid background">
                <div className="container d-flex flex-column justify-content-center align-items-center pb-5">
                    {auth === true ? <>
                        <Search />
                        <Team /> </>
                        : <h1 className='message my-5'>You must be logged in!</h1>
                    }
                </div>
            </div>
        </>
    )
}

export default Dashboard;