import React from 'react';
// import Link from ''
import { Link, useNavigate } from 'react-router-dom'
import styles from './Dashboard.module.css';
const Dashboard = ({jobs, jobData}) => {
    console.log('herer',jobData.jobDoc?.length)

    return (
        <>
        <main className={styles.container}>
            <div className="card" id={styles.firstCard} >
                <div className="card-body">
                    <h4 className="card-title"><a> Sales </a></h4>
                    <p className="card-text">Total Sales: {jobData.jobDoc?.length} </p>
                    <Link to="/history">
                    <button className="btn btn-primary">  sales History </button>
                    </Link>
                </div>
            </div>
            <div className="card" id={styles.secondCard}>
                <div className="card-body">
                    <h4 className="card-title"><a>Card title</a></h4>
                    <p className="card-text"> Commissions: 20 usd </p>
                </div>
            </div>
        </main>
            <div className={styles.buttonTag}>
                <Link to="/job">
                    <button className="btn btn-primary"> add jobs</button>
                </Link>
            </div>
        </>
    )
}
export default Dashboard
